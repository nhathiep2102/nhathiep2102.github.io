//press
function press(button){
	document.getElementById('result').value += button.innerHTML;
}

function press2(button){
	document.getElementById('result').value += "*";
}

function press1(button){
	document.getElementById('result').value += '/';
}

//Ket qua tinh
function equal(){
	document.getElementById('result').value = eval(result.value);
}

//Bình Phương
function bp(){
	document.getElementById('result').value = result.value * result.value;
}

//Căn bậc 2:
function cbh(){
	document.getElementById('result').value = Math.sqrt(result.value);
}

//Tính sin:
function tinhsin(){
	document.getElementById('result').value = Math.sin(result.value);
}

//Tính cos:
function tinhcos(){
	document.getElementById('result').value = Math.cos(result.value);
}

//Nút xóa:
function back(){
	var x = result.value;
	document.getElementById('result').value = x.substring(0, x.length - 1);
}

//AC:
function clean(){
	document.getElementById('result').value = "";
}

