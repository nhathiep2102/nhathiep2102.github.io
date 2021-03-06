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

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//sticky menu
$('.navbar').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}