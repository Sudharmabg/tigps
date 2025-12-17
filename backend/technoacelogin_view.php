<?php
$this->load->view('includes/header');
?>
<style>
    .search-highlight {
        border: 2px solid #85191a;   /* Bootstrap primary color */
        background-color: #f0f8ff;   /* light highlight */
        transition: all 0.3s ease-in-out;
    }

    .search-highlight:focus {
        box-shadow: 0 0 8px rgba(13, 110, 253, 0.8);
        background-color: #ffffff;
    }
</style>

<section>
 <div class="technoace">
    <div class="d-flex">

        <div class="left-section">
            <div class="techno-ace">
                <div class="header">
                    <img src="<?= base_url() ?>assets/images/com.png" alt="Laptop Image" id="laptop">
                    <img class="lock-icon" src="<?= base_url() ?>assets/images/lock.png" alt="Lock Icon" id="lock">
                </div>
            </div>
        </div>
        <div class="right-section mt-100">
            <h2 class="text-center" style="color:#004085;">Sign In</h2>
            <div class="d-flex justify-content-lg-center">
                <form method="post" id="signInForm">
                    <input type="hidden" name="<?= $this->security->get_csrf_token_name(); ?>" value="<?= $this->security->get_csrf_hash() ?>">
                    <input class="aceinput" type="text" id="login_id" name="login_id" placeholder="Enter your Login id">
                    <input class="aceinput" type="password" id="password" name="password" placeholder="Enter your password" required>
                    <button class="acebutton" id="study_mat_signin_submit" type="button">Log In</button>
                    <span id="error_form" style="display: none;"></span>
                    <p class="pt-3 login_id_p" style="color: red; text-align: center; cursor: pointer;">Don't know your <span style="font-weight: bold;">login id</span> or <span style="font-weight: bold;">password</span>?</p>
                </form>
            </div>
        </div>

    </div>
</div>
</section>

<!-- Modal -->
<div class="modal fade" id="forgetLoginIdModal" tabindex="-1" aria-labelledby="forgetLoginIdLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      
      <div class="modal-header">
        <h5 class="modal-title" id="forgetLoginIdLabel">Retrieve Login ID & Password</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="school_name" class="form-label">School Name</label>
            <select id="school_name" class="form-select">
              <option value="">Select School</option>
              <?php foreach($schools as $s): ?>
                <option value="<?= $s->school_name ?>"><?= $s->school_name ?></option>
              <?php endforeach; ?>
            </select>
          </div>

          <div class="col-md-6 mb-3">
            <label for="class_name" class="form-label">Class Name</label>
            <select id="class_name" class="form-select">
                <option value="">Select Class</option>
                <!-- will be filled dynamically -->
            </select>
          </div>
        </div>

        <!-- Results Table -->
        <div><p style="font-size: 18px;"><span style="color: red;">*</span> Your default password <span style="font-weight: bold; color: #85191a;">ABCD@1234</span></p></div>
        <div id="result_table" class="mt-3"></div>
      </div>
    </div>
  </div>
</div>

<?php
$this->load->view('includes/footer');

?>

<script type="text/javascript">
    $('#study_mat_signin_submit').click(function(){

        var login_id           =    $('#login_id').val();
        var password           =    $('#password').val();

        if (!login_id || login_id == "") {
            $('#error_form').html('<span style="color: red; font-size: 14px; font-weight: bold;">Please enter correct Login id.</span>');   
            $('#error_form').show();
        }else if (!password || password == '') {
            $('#error_form').html('<span style="color: red; font-size: 14px; font-weight: bold;">Please enter password.</span>');   
            $('#error_form').show();
        }else{
            $('#error_form').html('');   
            $('#error_form').hide();

            var form = $('#signInForm')[0]; // You need to use standard javascript object here
            var formData = new FormData(form);

            jQuery.ajax({
                type:"POST",
                url: '<?php echo base_url()?>welcome/tigps_question_bank_login_submit',
                data: formData,  
                contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                processData: false,
                cache: false, 
                success:function(result){
                  var res = JSON.parse(result);
                  if (res.result_fetch == 1) {
                    window.location.href="<?= base_url()?>set-tigps-question-bank-password";
                  }else if (res.result_fetch == 2) {
                    window.location.href="<?= base_url()?>tigps-question-bank";
                  }else{
                    $('#error_form').html('<span style="color: red; font-size: 14px; font-weight: bold;">'+res.msg+'</span>');   
                    $('#error_form').show();
                  }
                },
                error: function (jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    alert(msg);
                },
            });
        }
    });

    $(".login_id_p").click(function(){
        $("#forgetLoginIdModal").modal("show");
    });

    // When school changes → load classes
    $("#school_name").change(function () {
        let school = $(this).val();
        $("#class_name").html('<option value="">Select Class</option>'); // reset
        if (school == "") {
            $("#result_table").html("");
        }
        if (school !== "") {
            $.ajax({
                url: "<?= base_url('welcome/get_classes_by_school') ?>",
                type: "POST",
                data: { school_name: school },
                success: function (data) {
                    $("#class_name").html(data); // append options
                    $("#result_table").html("");
                }
            });
        }
    });

    // When both selected → load students
    $("#class_name").change(function () {
        let school = $("#school_name").val();
        let className = $(this).val();

        if (school !== "" && className !== "") {
            $.ajax({
                url: "<?= base_url('welcome/get_login_ids') ?>",
                type: "POST",
                data: { school_name: school, class_name: className },
                success: function (data) {
                    $("#result_table").html(data);
                }
            });
        }else{
            $("#result_table").html("");
        }
    });

    $(document).on("keyup", "#searchInput", function () {
        let value = $(this).val().toLowerCase();
        let rows = $("#studentsTable tbody tr");
        let visibleCount = 0;

        rows.each(function () {
            if ($(this).text().toLowerCase().indexOf(value) > -1) {
                $(this).show();
                visibleCount++;
            } else {
                $(this).hide();
            }
        });

        // Remove any old "No data found" row
        $("#studentsTable tbody .no-data").remove();

        // If no rows match → show "No data found."
        if (visibleCount === 0) {
            $("#studentsTable tbody").append(
                '<tr class="no-data"><td colspan="2" class="text-center">No data found.</td></tr>'
            );
        }
    });

    $(document).on("click", ".copyBtn", function () {
        let loginId = $(this).data("loginid");
        let btn = $(this);

        // Use modern Clipboard API
        navigator.clipboard.writeText(loginId).then(function () {
            // Success feedback
            btn.text("Copied!").removeClass("btn-outline-secondary").addClass("btn-success");
            setTimeout(function () {
                btn.text("Copy").removeClass("btn-success").addClass("btn-outline-secondary");
            }, 1500);
        }).catch(function (err) {
            alert("Failed to copy: " + err);
        });
    });
</script>