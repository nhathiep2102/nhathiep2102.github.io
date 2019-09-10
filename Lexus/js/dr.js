$('#form-register').on('submit', function () {
    var isValid = true;
    
    if($('#dx').val() == 'Chọn danh xưng...'){
		$('#dx').next('span').text('Vui lòng chọn danh xưng');
		isValid = false;
	} 
	else{
		$('#dx').next('span').text('');
	}	

	if($('#name').val().trim() == ''){
		$('#name').next('span').text('Vui lòng nhập Họ Tên');
		isValid = false;
	} 
	else{
		$('#name').next('span').text('');
	}

	if($('#phone').val().match(/^\(?[\d]{4}\)?[\s-]?[\d]{3}[\s-]?[\d]{3}$/) == null){
		$('#phone').next('span').text('Số điện thoại không hợp lệ');
		isValid = false;
	} 
	else{
		$('#phone').next('span').text('');
	}

    if($('#mx').val() == 'Chọn mẫu xe...'){
		$('#mx').next('span').text('Vui lòng chọn mẫu xe lái thử');
		isValid = false;
	} 
	else{
		$('#mx').next('span').text('');
	}	


	if($('#bday').val().trim() == ''){
		$('#bday').next('span').text('Vui lòng chọn đúng ngày lái thử');
		isValid = false;
	} 
	else{
		$('#bday').next('span').text('');
	}


	if($('#shop').val() == 'Chọn đại lý...'){
		$('#shop').next('span').text('Vui lòng chọn đại lý lái thử');
		isValid = false;
	} 
	else{
		$('#shop').next('span').text('');
	}	

	return isValid;
});