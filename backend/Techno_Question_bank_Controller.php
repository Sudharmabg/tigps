public function tigps_question_bank_login(){
		$study_mat_logged_in = isset($_SESSION['study_mat_logged_in']) ? $_SESSION['study_mat_logged_in'] : '';
	    $login_id = isset($_SESSION['login_id']) ? $_SESSION['login_id'] : '';

	    // Case 1: both missing/empty → show login
	    if ((empty($study_mat_logged_in) || $study_mat_logged_in == '') 
	        && (empty($login_id) || $login_id == '')) 
	    {
	        $data['schools'] = $this->HomeContentModel->get_schools();
	        $this->load->view('technoacelogin', $data);
	    } 
	    else {
	        // Case 2: login_id exists but not logged in
	        if ((empty($study_mat_logged_in) || $study_mat_logged_in == '') && !empty($login_id)) {
	        	$login_id = $this->session->userdata('login_id');
				$data['result_fetch'] = $this->HomeContentModel->check_student_id_study_mat($login_id);
	            redirect(base_url().'set-tigps-question-bank-password', $data);
	        }
	        // Case 3: logged in properly
	        elseif (!empty($study_mat_logged_in) && $study_mat_logged_in === TRUE && !empty($login_id)) {
	        	$login_id = $this->session->userdata('login_id');
				$data['result_fetch'] = $this->HomeContentModel->check_student_id_study_mat($login_id);
	            redirect(base_url().'tigps-question-bank', $data);
	        }
	        // fallback → send to login
	        else {
	            $data['schools'] = $this->HomeContentModel->get_schools();
	            $this->load->view('technoacelogin', $data);
	        }
	    }
	}

	public function get_classes_by_school() {
        $school = $this->input->post('school_name');
        $classes = $this->HomeContentModel->get_classes_by_school($school);

        $options = '<option value="">Select Class</option>';
        foreach ($classes as $c) {
            $options .= '<option value="'.$c->class_name.'">'.$c->class_name.'</option>';
        }
        echo $options;
    }

    public function get_login_ids() {
        $school = $this->input->post('school_name');
        $class  = $this->input->post('class_name');

        $students = $this->HomeContentModel->get_students($school, $class);

        $output = '<div class="input-group mb-3">
					  <span class="input-group-text text-white" style="background-color: #85191a; border: 2px solid #85191a;">
					    <i class="fa fa-search"></i>
					  </span>
					  <input type="text" id="searchInput" 
					         class="form-control search-highlight" 
					         placeholder="Search student name or login ID...">
					</div><div class="table-responsive"><table class="table table-bordered" id="studentsTable">
            		<thead><tr><th>Student Name</th><th>Login ID</th></tr></thead><tbody>';

        if (!empty($students)) {
            foreach ($students as $s) {
                $output .= "
					        <tr>
					            <td>{$s->student_name}</td>
					            <td>
					                {$s->login_id}
					                <button class='btn btn-sm btn-outline-secondary copyBtn' data-loginid='{$s->login_id}'>
					                    Copy
					                </button>
					            </td>
					        </tr>";
            }
        } else {
            $output .= "<tr><td colspan='2'>No data found</td></tr>";
        }

        $output .= '</tbody></table></div>';

        echo $output;
    }

	public function tigps_question_bank_login_submit(){
		$login_id      =    trim($this->input->post('login_id'));
		$password  			=   trim($this->input->post('password'));
		$result_fetch    =    $this->HomeContentModel->check_student_id_study_mat($login_id);

		if (!empty($result_fetch)) {
			if ($password == 'ABCD@1234' && $result_fetch->sign_up == "0") {
				$newdata = array(
			        'login_id'            => $login_id,
				);

				$this->session->set_userdata($newdata);
				$response = array('result_fetch' => 1);
				echo json_encode($response);
				return;
			} elseif ($password != 'ABCD@1234' && $result_fetch->sign_up == "1") {
				if ($password == $result_fetch->password) {
					$newdata = array(
				        'study_mat_logged_in' => TRUE,
				        'login_id'            => $login_id,
					);

					$this->session->set_userdata($newdata);
					$response = array('result_fetch' => 2);
					echo json_encode($response);
					return;
				}else{
					$response = array('result_fetch' => 0, 'msg' => 'Please enter correct password.');
					echo json_encode($response);
					return;
				}
			}else{
				$response = array('result_fetch' => 0, 'msg' => 'Please enter correct password.');
				echo json_encode($response);
				return;
			}
		}else{
			$response = array('result_fetch' => 0, 'msg' => 'Please enter the correct login id.');
			echo json_encode($response);
			return;
		}
	}

	public function set_tigps_question_bank_password(){
		if ((empty($_SESSION['study_mat_logged_in']) || $_SESSION['study_mat_logged_in'] == '') && !empty($_SESSION['login_id'])) {
			$login_id = $this->session->userdata('login_id');
			$data['result_fetch'] = $this->HomeContentModel->check_student_id_study_mat($login_id);
			$this->load->view('set_tigps_question_bank_password',$data);
		}else{
			redirect(base_url().'tigps-question-bank-login');
		}
	}

	public function tigps_question_bank_password_submit(){
		if ((empty($_SESSION['study_mat_logged_in']) || $_SESSION['study_mat_logged_in'] == '') && !empty($_SESSION['login_id'])) {
			$password = $this->input->post('password');
			$confirm_password = $this->input->post('confirm_password');
			$login_id = $this->input->post('login_id');
			$student_id = $this->input->post('student_id');

			if ($password != $confirm_password) {
				$response = array('result_fetch' => 0, 'msg' => 'The Password and Confirm Password fields must match.');
				echo json_encode($response);
				return;
			}elseif ($password == "ABCD@1234") {
				$response = array('result_fetch' => 0, 'msg' => 'Default password cannot be used. Please choose a new password.');
				echo json_encode($response);
				return;
			}elseif ($_SESSION['login_id'] != $login_id) {
				$response = array('result_fetch' => 0, 'msg' => 'Something went wrong.');
				echo json_encode($response);
				return;
			}else{
				$storeData = array(
					'password'         =>   $password,
					'sign_up'       =>   "1",
				);

				$this->db->where('id',$student_id);
				$this->db->update('techno_ace_study_mat', $storeData);

				$newdata = array(
			        'study_mat_logged_in' => TRUE,
			        'login_id'            => $login_id,
				);

				$this->session->set_userdata($newdata);

				$response = array('result_fetch' => 1, 'msg' => 'Password updated successfully.');
				echo json_encode($response);
				return;
			}
		}else{
			$response = array('result_fetch' => 0, 'msg' => 'something went wrong.');
			echo json_encode($response);
			return;
		}
	}

	public function techno_ace_mpt_logout(){
		if ($_SESSION['study_mat_logged_in'] == TRUE) {
			$this->load->library('session');
			$array_items = array('study_mat_logged_in','login_id');
			$this->session->unset_userdata($array_items);
			redirect(base_url().'tigps-question-bank-login');
		}else{
			redirect(base_url().'tigps-question-bank');
		}
	}

	public function tigps_question_bank(){
		if (!empty($_SESSION['study_mat_logged_in']) && $_SESSION['study_mat_logged_in'] === TRUE && !empty($_SESSION['login_id'])) {
			$login_id = $this->session->userdata('login_id');
			$data['result_fetch'] = $this->HomeContentModel->check_student_id_study_mat($login_id);
			$this->load->view('tigps_question_bank',$data);
		}else{
			redirect(base_url().'tigps-question-bank-login');
		}
	}