
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let content = "";
        var data = JSON.parse(this.response);
    for (var i = 0; i < data.length; i++) {
        content +=
        `<tr>
        <td><img src = ${data[i].img}></td> 
        <td> ${data[i].name} </td> 
        <td> ${data[i].series}</td>
        <td> ${data[i].price} </td> 
        <td> ${data[i].amount} </td>
        </tr>`;
    }
     document.getElementById("myTbody").innerHTML = content;
    }
  }
  xhttp.open("GET", "https://raw.githubusercontent.com/nhathiep2102/nhathiep2102.github.io/master/ajax/product.json", true);
  xhttp.send();
}
loadDoc()