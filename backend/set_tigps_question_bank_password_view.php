<?php
$this->load->view('includes/header');
?>
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
            <h2 class="text-center pb-3" style="color:#004085;">Set your password</h2>
            <div class="d-flex justify-content-lg-center">
                <form method="post" id="signInForm">
                    <input type="hidden" name="<?= $this->security->get_csrf_token_name(); ?>" value="<?= $this->security->get_csrf_hash() ?>">
                    <input type="hidden" id="student_id" name="student_id" value="<?= !empty($result_fetch->id) ? $result_fetch->id : ''?>">
                    <input class="aceinput" type="text" id="student_name" name="student_name" placeholder="Enter your name" value="<?= !empty($result_fetch->student_name) ? $result_fetch->student_name : ''?>" readonly>
                    <input class="aceinput" type="text" id="school_name" name="school_name" placeholder="Enter your name" value="<?= !empty($result_fetch->school_name) ? $result_fetch->school_name : ''?>" readonly>
                    <input class="aceinput" type="text" id="class_name" name="class_name" placeholder="Enter your name" value="<?= !empty($result_fetch->class_name) ? $result_fetch->class_name : ''?>" readonly>
                    <input class="aceinput" type="text" id="login_id" name="login_id" placeholder="Enter your name" value="<?= !empty($result_fetch->login_id) ? $result_fetch->login_id : ''?>" readonly>
                    <input class="aceinput" type="password" id="password" name="password" placeholder="Enter new password" required>
                    <input class="aceinput" type="password" id="confirm_password" name="confirm_password" placeholder="Enter confirm password" required>
                    <button class="acebutton" id="study_mat_signin_submit" type="button">Set your password</button>
                    <span id="error_form" style="display: none;"></span>
                </form>
            </div>
        </div>

    </div>
</div>
</section>

<?php
$this->load->view('includes/footer');

?>

<script type="text/javascript">
    $('#study_mat_signin_submit').click(function(){

        var password           =    $('#password').val();
        var confirm_password   =    $('#confirm_password').val();

        if (!password || password == "") {
            $('#error_form').html('<span style="color: red; font-size: 16px;">Please enter password.</span>'); 
            $('#error_form').show();
        }else if (password == "ABCD@1234") {
            $('#error_form').html('<span style="color: red; font-size: 16px;">Default password cannot be used. Please choose a new password.</span>');   
            $('#error_form').show();
        }else if (!confirm_password || confirm_password == '') {
            $('#error_form').html('<span style="color: red; font-size: 16px;">Please enter confirm password.</span>');   
            $('#error_form').show();
        }else if(password != confirm_password) {
            $('#error_form').html('<span style="color: red; font-size: 16px;">The Password and Confirm Password fields must match.</span>');   
            $('#error_form').show();
        }else{
            $('#error_form').html('');   
            $('#error_form').hide();

            var form = $('#signInForm')[0]; // You need to use standard javascript object here
            var formData = new FormData(form);

            jQuery.ajax({
                type:"POST",
                url: '<?php echo base_url()?>welcome/tigps_question_bank_password_submit',
                data: formData,  
                contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                processData: false,
                cache: false, 
                success:function(result){
                  var res = JSON.parse(result);
                  if (res.result_fetch == 1) {
                    window.location.href="<?= base_url()?>tigps-question-bank";
                  }else if (res.result_fetch == 2) {
                    window.location.href="<?= base_url()?>set-tigps-question-bank-password";
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


</script>