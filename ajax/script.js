
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

//Sắp xếp:
function sortColumn(thElement) {
    thElement = $(thElement);
    
    const column = thElement.attr('data-column');
    $('.fas fa-sort-amount-down').removeClass('fas fa-sort-amount-down').addClass('fas fa-random');
    $('.fas fa-sort-amount-alt').removeClass('fas fa-sort-amount-alt').addClass('fas fa-random');

    if(thElement.attr('data-order') === 'asc'){
        thElement.attr('data-order', 'desc');
        thElement.children().removeClass('fas fa-sort-amount-down').addClass('fas fa-sort-amount-down-alt');
        
        sortAll(column, 1);
    }
    else{
        thElement.attr('data-order', 'asc');
        thElement.children().removeClass('fas fa-sort-amount-down-alt').addClass('fas fa-sort-amount-down');
        
        sortAll(column, -1);
    }
    loadDoc();
}

function sortAll(column, number) {
  product.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return number;
    if (x > y) return number;

    return 0;
  })