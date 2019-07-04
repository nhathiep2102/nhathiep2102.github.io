let product = [];

    $.ajax({
        url: 'https://raw.githubusercontent.com/nhathiep2102/nhathiep2102.github.io/master/ajax/product.json',
        type: 'get',
        dataType: 'json',
    }).done(function (data) {
        product = data;
        renderProduct();
    });


function renderProduct() {
    let content = '';
 
    for (let i = 0; i < product.length; i++) {
        content +=
            `<tr>
				<td><img src = ${product[i].img}></td> 
				<td> ${product[i].name} </td> 
				<td> ${product[i].series}</td>
				<td> ${product[i].price} </td> 
				<td> ${product[i].amount} </td>
			</tr>`;
    }
    document.getElementById('myTbody').innerHTML = content;
}
renderProduct()


//Sắp xếp:
function sortColumn(thElement) {
    thElement = $(thElement);
    
    const column = thElement.attr('data-column');

    //reset biểu tượng về ban đầu:
    $('i.fas').attr('class', 'fas fa-random');

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
    renderProduct();
}

//gán number sort 2 chiều
function sortAll(column, number) {
  product.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return -number;
    if (x > y) return number;

    return 0;
  })
  
}