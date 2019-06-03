
function changeColor(){
	p1.style.color = "green";
	p2.style.color = "yellow";
	p3.style.color = "red";
}


function changeBgColor(color){
	all.style.backgroundColor = color;
}

function copyContent(p1, p2){
	p1.innerHTML = p2.innerHTML;
}

function changeFontSize(x){
	p1.style.fontSize = x + "px";
	p2.style.fontSize = x + "px";
	p3.style.fontSize = x + "px";
}

function increaseFontSize(paragraph){
	let compStyles = window.getComputedStyle(paragraph);
	var s = parseInt(compStyles.getPropertyValue('font-size').replace("px",""));
	if(s + 1 < 30){
		paragraph.style.fontSize = s + 1 + "px";
	}
	else{
		alert("Oversize");
	}
}

function decreaseFontSize(paragraph){
	let compStyles = window.getComputedStyle(paragraph);
	var s = parseInt(compStyles.getPropertyValue('font-size').replace("px",""));
	if(s - 1 > 10){
		paragraph.style.fontSize = s - 1 + "px";
	}
	else{
		alert("Oversize");
	}
}