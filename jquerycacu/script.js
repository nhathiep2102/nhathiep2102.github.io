//Ấn dữ liệu:
$("button.number").on('click', function () {
	$num = $(this).html();
	$disp = $('#result').val();
	$('#result').val($disp + $num);
});

$("button#daunhan").on('click', function () {
	$num = $(this).html();
	$disp = $('#result').val();
	$('#result').val($disp + $num.replace("x", "*"));
});

$("button#dauchia").on('click', function () {
	$num = $(this).html();
	$disp = $('#result').val();
	$('#result').val($disp + $num.replace("÷", "/"));
});


//Tính kết quả
$("button#daubang").on('click', function(){
	$disp = $('#result').val();
	$("#result").val(eval($disp));
});

//Tính bình phương:
$("button#bp").on('click', function(){
	$disp = $('#result').val();
	$("#result").val(Math.pow($disp, 2));
});

//Tính căn bậc 2:
$("button#cbh").on('click', function(){
	$disp = $('#result').val();
	$("#result").val(Math.sqrt($disp));
});

//Tính Cos:
$("button#cos").on('click', function(){
	$disp = $('#result').val();
	$("#result").val(Math.cos($disp));
});

//Tính sin:
$("button#sin").on('click', function(){
	$disp = $('#result').val();
	$("#result").val(Math.sin($disp));
});

//Nút AC:
$("button#AC").on('click', function(){
	$("#result").val('');
});

//Nút del:
$("button#del").on('click', function(){
	$str = $('#result').val();
	$("#result").val($str.substring(0, $str.length - 1));
});

//Lightmode:
$("button#light").on('click', function(){
	$(".container").css('background-color', '#C6E2FF');
	$("#result").css('background-color', '#C6E2FF');
	$("#result").css('border-color', '#C6E2FF');
	$("button").css('border-color', '#C6E2FF');
});

//Darkmode:
$("button#dark").on('click', function(){
	$(".container").css('background-color', '#111111');
	$("#result").css('background-color', '#111111');
	$("#result").css('border-color', '#111111');
	$("button").css('border-color', '#111111');
});