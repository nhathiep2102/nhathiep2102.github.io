$('#form-register').on('submit', function () {
	var isValid = true;

	if($('#name').val().trim() == ''){
		$('#name').next('span').text('Vui lòng nhập Họ Tên');
		isValid = false;
	} 
	else{
		$('#name').next('span').text('');
	}

	if($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
		$('#email').next('span').text('Địa chỉ Email không hợp lệ');
		isValid = false;
	} 
	else{
		$('#email').next('span').text('');
	}
	
	if($('#password').val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/) == null){
		$('#password').next('span').text('Mật khẩu bao gồm 1 chữ in hoa và số');
		isValid = false;
	} 
	else{
		$('#password').next('span').text('');
	}

	if($('#fb').val().match(/(?<http>(http:[/][/]|www.)([a-z]|[A-Z]|[0-9]|[/.]|[~])*)/) == null){
		$('#fb').next('span').text('Địa chỉ Facebook không hợp lệ');
		isValid = false;
	} 
	else{
		$('#fb').next('span').text('');
	}

	if($('#phone').val().match(/^\(?[\d]{4}\)?[\s-]?[\d]{3}[\s-]?[\d]{3}$/) == null){
		$('#phone').next('span').text('Số điện thoại không hợp lệ');
		isValid = false;
	} 
	else{
		$('#phone').next('span').text('');
	}

	if($('#address').val().trim() == ''){
		$('#address').next('span').text('Vui lòng nhập địa chỉ');
		isValid = false;
	} 
	else{
		$('#address').next('span').text('');
	}

	if($('#bday').val().trim() == ''){
		$('#bday').next('span').text('Vui lòng chọn đúng ngày tháng năm sinh');
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