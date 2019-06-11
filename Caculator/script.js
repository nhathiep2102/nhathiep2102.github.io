let a = document.getElementById('result');
//press
function press(button){
	a.value += button.innerHTML;
}

function press2(button){
	a.value += "*";
}

function press1(button){
	a.value += '/';
}

//Ket qua tinh
function equal(){
	a.value = eval(a.value);
}

//Bình Phương
function bp(){
	a.value = Math.pow(a.value, 2);
}

//Căn bậc 2:
function cbh(){
	a.value = Math.sqrt(a.value);
}

//Tính sin:
function tinhsin(){
	a.value = Math.sin(a.value);
}

//Tính cos:
function tinhcos(){
	a.value = Math.cos(a.value);
}

//Nút xóa:
function back(){
	var x = result.value;
	a.value = x.substring(0, x.length - 1);
}

//AC:
function clean(){
	a.value = "";
}

