<?php
$this->load->view('includes/header');

?>

<style>
    h3 {
        color: #fc9928;
    }

    a {
        color: orangered;
    }

    .card img {

        height: 180px;
    }

    #outerContainer #mainContainer div.toolbar {
        display: none !important;
        /* hide PDF viewer toolbar */
    }

    #outerContainer #mainContainer #viewerContainer {
        top: 0 !important;
        /* move doc up into empty bar space */
    }



    ul,
    .myUL {
        list-style-type: none;
    }

    .myUL {
        margin: 0;
        padding: 0;
    }

    .myUL li a {
        font-size: 18px;
        color: black;
    }

    /* .myUL li span {
        font-size: 20px;
        font-weight: 600;
    } */

    ul li {
        line-height: 2;
    }

    .caret {
        cursor: pointer;
        -webkit-user-select: none;
        /* Safari 3.1+ */
        -moz-user-select: none;
        /* Firefox 2+ */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
        font-size: 20px;
        font-weight: 600;

    }

    .caret::before {
        content: "\25B6";
        color: black;
        display: inline-block;
        margin-right: 6px;
    }

    .caret-down::before {
        -ms-transform: rotate(90deg);
        /* IE 9 */
        -webkit-transform: rotate(90deg);
        /* Safari */

        transform: rotate(90deg);
    }

    .nested {
        display: none;
    }

    .nested li {
        padding-left: 42px;
    }

    .active {
        display: block;
    }

    @media screen and (max-width: 600px) {
        .innerpage .show-hide-mobile {
            display: inherit !important;
        }
    }
.tabcontent{
        width: 100%;
        

    }

    .pdf-frame {
        width: 100%;
        height: 100%;  /* Default for desktop */
        border: none;
    }

    /* On mobile screens */
    @media (max-width: 768px) {
        .pdf-frame {
            height: 100%;   /* Taller for small devices */
        }
        .modal-dialog {
            max-width: 100% !important;
            margin: 0; /* Full width modal on mobile */
        }
        .modal-content {
            height: 100%; /* Almost full screen */
            border-radius: 0; /* No rounded edges for full-screen look */
        }
    }
.tabs {
  display: flex;
  justify-content: center; 
  gap: 10px;               
  margin: 20px 0;
}

.tab {
  padding: 8px 18px;       
  font-weight: bold;
  font-size: 14px;         
  cursor: pointer;
  background: #f5f8fc;
  color: #333;
  border-radius: 4px 4px 0 0;
  white-space: nowrap;     
}

.tab.active {
  background: #fff;
  color: #0d6efd;
  border-top: 3px solid #0d6efd;
      border-bottom: 0px;
}
    .tabcontent {
      display: none;
      width: 100%;
    }

    .tabcontent.active {
      display: block;
    }

    .class-name {
        font-size: 19px;
        color: darkcyan;
        font-weight: bold;
        cursor: pointer;
        background: #f5f5f5;
        padding: 7px 10px;
        margin-bottom: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background 0.3s ease;
        border-left: 5px solid red;
        border-radius: 10px;
    }

    .subjects-list  {
        list-style-type: none;
        max-height: 400px;
    }

    .subjects-list li{
        padding: 5px 0;
        border-bottom: 1px dashed #ddd;
        color: #555;
        font-size: 1.1rem;
    }

    .subjects-list li:last-child {
        border-bottom: none;
    }
    
    .subjects-list li::before {
        color: #6a11cb;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
</style>



<section>
    <div class="container my-4 clearfix">
        <div class="d-flex justify-content-between align-items-center">
            <h6 style="color: red;font-size:20px;">
                School: <strong><?= $result_fetch->school_name ?></strong>
            </h6>
            <a href="javascript:void(0);" 
               onclick="confirmLogout()" 
               class="btn btn-primary btn-round">
               Logout
            </a>
        </div>
    </div>    
</section>

<div class="tabs">
    <div class="tab active" data-tab="schoolwise" style="font-size: 18px;">School Wise</div>
    <div class="tab"  data-tab="erp" style="font-size: 18px;">AEP</div>
    <div class="tab"  data-tab="aepquestionbank" style="font-size: 18px;">AEP Question Bank</div>                
</div>

<div class="tabcontent active" id="schoolwise">
    <div class="container d-flex">
        <div class="container innerpage">
            <div class="row mt-2">
                <!------ START TIGPS Kolaghat ------->
                <div class="col-md-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center"style="color:#1D4778;font-size:28px;">TIGPS-Kolaghat</h3>
                            <ul class="myUL">
                                <li>
                                    <span class="class-name">&#129054; Class V</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Bengali" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-v/bengali.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Computer" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-v/computer.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Computer</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="English" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-v/english.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Hindi" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-v/hindi.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-v/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-v/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Social science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-v/social-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social science</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class VI</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Bengali" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vi/bengali.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Computer" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vi/computer.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Computer</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="English" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vi/english.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Hindi" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vi/hindi.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vi/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vi/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Social science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vi/social-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social science</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class VII</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Bengali" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vii/bengali.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Computer" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vii/computer.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Computer</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="English" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vii/english.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Hindi" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vii/hindi.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vii/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vii/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Social science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-vii/social-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social science</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class VIII</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Bengali" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-viii/bengali.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Computer" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-viii/computer.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Computer</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="English" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-viii/english.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Hindi" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-viii/hindi.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-viii/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-viii/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Social science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-viii/social-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social science</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class IX</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Bengali" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-ix/bengali.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="AI" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-ix/ai.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>AI</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="English" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-ix/english.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Hindi" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-ix/hindi.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-ix/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-ix/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Social science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-ix/social-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social science</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class X</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Bengali" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-x/bengali.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="AI" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-x/ai.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>AI</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="English" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-x/english.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Hindi" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-x/hindi.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-x/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-x/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Social science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-kolaghat/class-x/social-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social science</a><br></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!------ END TIGPS Kolaghat ------->
                <!------ START TIGPS Krishnanagar ------------->
                <div class="col-md-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center"style="color:#1D4778;font-size:28px;">TIGPS-Krishnanagar</h3>
                            <ul class="myUL">
                                <li>
                                    <span class="class-name">&#129054; Class V</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Second language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-v/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Second language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Third language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-v/bengali-third-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Third language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="English language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-v/english-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="English literature" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-v/english-literature.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="EVS" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-v/evs.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>EVS</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-v/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-v/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>science</a><br></li>
                                    </ul>
                                </li>
               					<li>
                                    <span class="class-name">&#129054; Class VI</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Second language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Second language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Third language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/bengali-third-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Third language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="English language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/english-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="English literature" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/english-literature.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="English literature poorvi (NCRT)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/english-literature-poorvi-ncrt.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature poorvi (NCRT)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/physics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Physics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/chemistry.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Chemistry</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Civics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/civics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Civics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Geography" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/geography.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Geography</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="History" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vi/history.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>History</a><br></li>
                                    </ul>
                                </li>
                				<li>
                                    <span class="class-name">&#129054; Class VII</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Second language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Second language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Third language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/bengali-third-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Third language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="English language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/english-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="English literature" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/english-literature.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/physics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Physics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/chemistry.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Chemistry</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Civics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/civics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Civics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Geography" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/geography.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Geography</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="History" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-vii/history.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>History</a><br></li>
                                    </ul>
                                </li>
                				<li>
                                    <span class="class-name">&#129054; Class VIII</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Second language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Second language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Third language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/bengali-third-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Third language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="English language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/english-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="English literature" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/english-literature.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/physics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Physics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/chemistry.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Chemistry</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Civics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/civics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Civics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Geography" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/geography.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Geography</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="History" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-viii/history.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>History</a><br></li>
                                    </ul>
                                </li>
               					<li>
                                    <span class="class-name">&#129054; Class IX</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Second language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Second language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="English language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/english-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="English literature (Beehive)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/english-literature-beehive.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature (Beehive)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="English literature (Moments)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/english-literature-moments.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature (Moments)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/physics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Physics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/chemistry.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Chemistry</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Political science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/political-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Political science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Economics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/economics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Economics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Geography" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/geography.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Geography</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="History" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-ix/history.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>History</a><br></li>
                                    </ul>
                                </li>
                				<li>
                                    <span class="class-name">&#129054; Class X</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Second language (Bengali)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Second language (Bengali)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="English language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/english-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="English literature (First Flight)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/english-literature-first-flight.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature (First Flight)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="English literature (Moments)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/english-literature-footprints.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English literature (Footprints)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/physics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Physics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/chemistry.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Chemistry</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Political science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/political-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Political science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Economics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/economics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Economics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Geography" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/geography.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Geography</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="History" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-krishnanagar/class-x/history.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>History</a><br></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!------ END TIGPS KRISHNANAGAR ------->
                
                <!------ START TIGPS Alipurduar ------->
                <div class="col-md-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center"style="color:#1D4778;font-size:28px;">TIGPS-Alipurduar</h3>
                            <ul class="myUL">
                                <li>
                                    <span class="class-name">&#129054; Class III</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class III" data-subject="Bengali - বাঘশিকার" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-iii/bengali-বাঘশিকার.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali - বাঘশিকার</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class III" data-subject="bengali - রাজার ব্যয়াম" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-iii/bengali-রাজারব্যয়াম.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>bengali - রাজার ব্যয়াম</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class III" data-subject="Hindi" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-iii/hindi.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class IV</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IV" data-subject="Bengali - অতি কিশোরের ছড়া" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-iv/bengali-অতি-কিশোরের-ছড়া.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali - অতি কিশোরের ছড়া</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IV" data-subject="Hindi - दोस्त की पोशाक" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-iv/hindi-दोस्त-की-पोशाक.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi - दोस्त की पोशाक</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class V</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="English Communicative - Three Men in a Boat" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-v/english-communicative-three-men-in-a-boat.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English Communicative - Three Men in a Boat</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Bengali - কাবুলিওয়ালা" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-v/bengali-কাবুলিওয়ালা.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali - কাবুলিওয়ালা</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Bengali - গনেশ জননী" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-v/bengali-গনেশ-জননী.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali- গনেশ জননী</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Hindi (second-language - एक माँ की बेबसी)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-v/hindi-second-language-एक माँ की बेबसी.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi (second-language - एक माँ की बेबसी)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Hindi (third-language - फूली रोटी)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-v/hindi-third-language-फूली-रोटी.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi (third-language - फूली रोटी)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Mathematics - Areas" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-v/mathematics-areas.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics - Areas</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class V" data-subject="Mathematics - Volumes" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-v/mathematics-volumes.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics - Volumes</a><br></li>
                                    </ul>
                                </li>
                				<li>
                                    <span class="class-name">&#129054; Class VI</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="English Communicative - A Christmas Carol" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vi/english-communicative-a-christmas-carol.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English Communicative - A Christmas Carol</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="English Communicative - The Superior Man" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vi/english-communicative-the-superior-man.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English Communicative - The Superior Man</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="English" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vi/english.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vi/science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VI" data-subject="Social Science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vi/social-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social Science</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class VII</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="English Communicative" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vii/english-communicative.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>English Communicative</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Bengali - Second Language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vii/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali - Second Language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Science (Teacher name - Priyanka Ghosh)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vii/science-teacher-name-priyanka-ghosh.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science (Teacher name - Priyanka Ghosh)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Science (Teacher name - Debalina Mitra)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vii/science-teacher-name-debalina-mitra.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Science (Teacher name - Debalina Mitra)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Mathematics" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vii/mathematics.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VII" data-subject="Geography" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-vii/geography.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Geography</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class VIII</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Bengali Second-language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-viii/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali Second-language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-viii/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class IX</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Hindi Second-language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-ix/hindi-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi Second-language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-ix/chemistry.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Chemistry</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-ix/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Mathematics chapters-10-11-12" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-ix/mathematics-chapters-10-11-12.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Mathematics chapters-10-11-12</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Social science - Geography" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-ix/social-science-geography.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Social science - Geography</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class X</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Bengali - বহুরুপী" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-x/bengali-বহুরুপী.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali - বহুরুপী</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Physics - (Question bank)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-x/physics-question-bank.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Physics - (Question bank)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Physics - (Answer key)" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-x/physics-answer-key.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Physics - (Answer key)</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-x/chemistry.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Chemistry</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="History" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-x/history.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>History</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class XI</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Hindi - Second language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/hindi-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Hindi - Second language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Computer science - Computer system overview" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/computer-science-computer-system-overview.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Computer science - Computer system overview</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Computer science - Boolean logic" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/computer-science-boolean-logic.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Computer science - Boolean logic</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Informatics practices - Computer system" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/informatics-practices-computer-system.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Informatics practices - Computer system</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Informatics practices - Getting started with Python" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/informatics-practices-getting-started-with-python.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Informatics practices - Getting started with Python</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Informatics practices - Python fundamentals" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/informatics-practices-python-fundamentals.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Informatics practices - Python fundamentals</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Informatics practices - Data handling" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/informatics-practices-data-handling.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Informatics practices - Data handling</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Informatics practices - Flow of control" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/informatics-practices-flow-of-control.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Informatics practices - Flow of control</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xi/biology.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Biology</a><br></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="class-name">&#129054; Class XII</span>
                                    <ul class="subjects-list" style="display: none; max-height: max-content;">
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Bengali Second-language" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xii/bengali-second-language.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Bengali Second-language</a><br></li>
                                        <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Political science" data-pdf="<?= base_url()?>assets/question_bank/school_wise/tigps-alipurduar/class-xii/political-science.pdf"><span style="color: red; font-size: 20px; font-weight: bold;">&#128980; </span><a>Political science</a><br></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!------ END TIGPS Alipurduar ------->
            </div>
        </div>
    </div>
</div>
<div class="tabcontent " id="erp">
    <div class="container d-flex">
        <div class="container innerpage">
            <div class="row">
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center"style="color:#1D4778;font-size:28px;">Class VIII</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_VIII_(Physic) 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Physics </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_VIII_(Chemistry) 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Chemistry </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Math" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_VIII_(Math) 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Math </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_VIII_(Biology) 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Biology </a><br></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class IX</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/QUESTION BANK_Physics_IX.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Physics </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/QUESTION BANK_Chemistry_IX.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Chemistry </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Math" data-pdf="<?= base_url()?>assets/question_bank/QUESTION BANK_Mathematics_IX.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Math </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/QUESTION BANK_Biology_IX.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Biology </a><br></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mt-2 d-flex justify-content-center mt-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class X</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/Question_Bank_X_Physics.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Physics </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/Question_Bank_X_Chemistry.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Chemistry </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Math" data-pdf="<?= base_url()?>assets/question_bank/Question_Bank_X_Mathematics.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Math </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/Question_Bank_X_Biology.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Biology </a><br></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2 d-flex justify-content-center mt-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class XI</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_XI_Physics 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Physics </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_XI_Chemistry 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Chemistry </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Math" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_XI_Math 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Math </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_XI_(Biology) 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Biology </a><br></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 mt-2 d-flex mt-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class XII</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Physics" data-pdf="<?= base_url()?>assets/question_bank/Question Bank_XII_(Physic) 2025-26.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Physics </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Chemistry" data-pdf="<?= base_url()?>assets/question_bank/Question_Bank_XII_Chemistry.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Chemistry </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Math" data-pdf="<?= base_url()?>assets/question_bank/QUESTION BANK_Mathematics_XII_4.9.2025.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Math </a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Biology" data-pdf="<?= base_url()?>assets/question_bank/Question_Bank_XII_Biology.pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of - Biology </a><br></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="tabcontent " id="aepquestionbank">
    <div class="container d-flex">
        <div class="container innerpage">
            <div class="row">
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center"style="color:#1D4778;font-size:28px;">Class VIII</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Question bank of 10-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/10-11-2025 Question Bank (Class-VIII PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 10-11-2025</a><br></li>
								<li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Question bank of 22-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/22-11-2025 Question Bank (Class-VIII PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 22-11-2025</a><br></li> 
                                <li style="cursor: pointer;" class="study_mat" data-class="Class VIII" data-subject="Question bank of 01-12-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/01-12-2025 Question Bank (Class-VIII PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 01-12-2025</a><br></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2 d-flex justify-content-center">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class IX</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Question bank of 10-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/10-11-2025 Question Bank (Class-IX PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 10-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Question bank of 22-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/22-11-2025 Question Bank (Class-IX PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 22-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class IX" data-subject="Question bank of 01-12-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/01-12-2025 Question Bank (Class-IX PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 01-12-2025</a><br></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mt-2 d-flex justify-content-center mt-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class X</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Question bank of 10-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/10-11-2025 Question Bank (Class-X PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 10-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Question bank of 22-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/22-11-2025 Question Bank (Class-X PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 22-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class X" data-subject="Question bank of 01-12-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/01-12-2025 Question Bank (Class-X PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 01-12-2025</a><br></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2 d-flex justify-content-center mt-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class XI</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Question bank of 10-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/10-11-2025 Question Bank (Class-XI PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 10-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Question bank of 22-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/22-11-2025 Question Bank (Class-XI PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 22-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XI" data-subject="Question bank of 01-12-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/01-12-2025 Question Bank (Class-XI PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 01-12-2025</a><br></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 mt-2 d-flex mt-4">
                    <div class="card" style="width:100%;">
                        <div class="card-body">
                            <h3 class="card-title text-center" style="color:#1D4778;font-size:28px;">Class XII</h3>
                            <ul class="myUL">
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Question bank of 10-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/10-11-2025 Question Bank (Class-XII PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 10-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Question bank of 22-11-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/22-11-2025 Question Bank (Class-XII PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 22-11-2025</a><br></li>
                                <li style="cursor: pointer;" class="study_mat" data-class="Class XII" data-subject="Question bank of 01-12-2025" data-pdf="<?= base_url()?>assets/question_bank/aep_question_paper/01-12-2025 Question Bank (Class-XII PCMB).pdf"><span style="color: red; font-size: 22px; font-weight: bold;">&rArr;&nbsp;</span><a>Question bank of 01-12-2025</a><br></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--------- MODAL ------------>

<div class="modal fade" id="modal_study_mat">
    <div class="modal-dialog modal-xl modal-dialog-centered" style="max-width:90%;">
        <div class="modal-content" style="height:90vh;">
            <div class="modal-header">
                
                <h5 class="modal-title" id="study_modal_title" style="text-align: left;">Modal title</h5>
                
                <button type="button" class="btn-close" data-bs-dismiss="modal" style="color: #1D4778; font-size: 24px;">
                </button>
                
            </div>
            <div class="modal-body p-0" id="study_mat_body">
                <iframe id="pdfViewer" src="" style="width: 100%; height: 100%; border: none;" ></iframe>
                <div id="noContentMsg" style="display:none;" class="text-center text-danger fw-bold p-3">
                    Content not uploaded. Please wait.
                </div>
            </div>
            <div class="modal-footer" style="display: inline-block;">
                <button type="button" class="btn btn-danger text-white" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>


<?php
$this->load->view('includes/footer');

?>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script type="text/javascript">
    function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }


    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".study_mat").forEach(function (item) {
            item.addEventListener("click", function () {
                let className = this.getAttribute("data-class");
                let subject   = this.getAttribute("data-subject");
                let pdfUrl    = this.getAttribute("data-pdf");

                // Update modal header
                document.getElementById("study_modal_title").innerText =
                    className + " - Question bank of " + subject;

                let pdfFrame = document.getElementById("pdfViewer");
                let noContentMsg = document.getElementById("noContentMsg");

                if (!pdfUrl || pdfUrl.trim() === "") {
                    // No PDF uploaded
                    pdfFrame.style.display = "none";
                    noContentMsg.style.display = "block";
                    noContentMsg.innerText = "Content not uploaded. Please wait.";
                } else if (isMobile()) {
                    // Mobile - iframe not supported, show download link
                    pdfFrame.style.display = "none";
                    noContentMsg.style.display = "block";
                    noContentMsg.innerHTML =
                        "<a href='" + pdfUrl + "' target='_blank' class='btn btn-primary mt-2'>Open PDF</a></p>";
                } else {
                    // Desktop - show iframe
                    pdfFrame.style.display = "block";
                    pdfFrame.src = pdfUrl;
                    noContentMsg.style.display = "none";
                }

                var myModal = new bootstrap.Modal(document.getElementById('modal_study_mat'));
                myModal.show();
            });
        });
    });


    document.querySelectorAll(".class-name").forEach(item => {
      item.addEventListener("click", () => {
        let subjects = item.nextElementSibling;
        let isOpen = subjects.style.display === "block";

        // toggle subjects list
        subjects.style.display = isOpen ? "none" : "block";

        // toggle arrow symbol
        if (isOpen) {
          item.innerHTML = "&#129054; " + item.textContent.slice(2); // ▶
        } else {
          item.innerHTML = "&#129055; " + item.textContent.slice(2); // ▼
        }
      });
    });

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
</script>

<script>
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tabcontent");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // deactivate all tabs
      document.querySelector(".tab.active").classList.remove("active");
      tab.classList.add("active");

      // hide all contents
      tabContents.forEach(content => content.classList.remove("active"));

      // show selected content
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });

    function confirmLogout() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out of your session.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "<?= base_url()?>techno-ace-mpt-logout";
            }
        });
    }
</script>
