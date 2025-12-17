//////////////////////// Techno Ace //////////////////////////	

	function check_student_id_study_mat($login_id){
		return $this->db->where_in('login_id', $login_id)->get('techno_ace_study_mat')->row();
	}

	///////////////////////// TIGPS QUESTION BANK //////////////////

	public function get_schools() {
	    $this->db->distinct();
	        $this->db->select('school_name');
	    	$this->db->where('school_name !=', 'TIGPS Head Office');
	        $this->db->order_by('school_name', 'ASC');
	        return $this->db->get('techno_ace_study_mat')->result();
	}

	public function get_classes_by_school($school) {
	    $this->db->distinct();
	    $this->db->select('class_name');
	    $this->db->where('school_name', $school);
	    $this->db->where('class_name !=', 'Principal'); // 🚫 exclude "Principal"
	    $this->db->order_by("
		  CASE REPLACE(REPLACE(class_name, 'Class - ', ''), 'Class ', '')
		    WHEN 'I' THEN 1
		    WHEN 'II' THEN 2
		    WHEN 'III' THEN 3
		    WHEN 'IV' THEN 4
		    WHEN 'V' THEN 5
		    WHEN 'VI' THEN 6
		    WHEN 'VII' THEN 7
		    WHEN 'VIII' THEN 8
		    WHEN 'IX' THEN 9
		    WHEN 'X' THEN 10
		    WHEN 'XI' THEN 11
		    WHEN 'XII' THEN 12
		  END
		", '', false);
	    return $this->db->get('techno_ace_study_mat')->result();
	}

	public function get_students($school, $class) {
        return $this->db->where(['school_name' => $school, 'class_name' => $class])
                        ->order_by('id', 'ASC')
                        ->get('techno_ace_study_mat')
                        ->result();
   	}