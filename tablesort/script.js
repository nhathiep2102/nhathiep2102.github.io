let product = [{
        img: "img/camry.png",
        name: "Camry",
        series: "T089",
        price: 51000,
        amount: 20,
    },
    {
        img: "img/fortuner.png",
        name: "Fortuner",
        series: "D218",
        price: 50000,
        amount: 15,
    },
    {
        img: "img/altis.png",
        name: "Altis",
        series: "B1D4",
        price: 45000,
        amount: 33,
    },
    {
        img: "img/yaris.png",
        name: "Yaris",
        series: "D3R3",
        price: 32000,
        amount: 24,
    },
    {
        img: "img/vios.png",
        name: "Vios",
        series: "B4R0",
        price: 35000,
        amount: 88,
    },
    {
        img: "img/alphard.png",
        name: "Alphard",
        series: "G4X0",
        price: 85000,
        amount: 11,
    }]

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

    if(thElement.attr('data-order') === 'asc'){
        thElement.attr('data-order', 'desc');
        thElement.children().removeClass('fas fa-sort-amount-down');
        thElement.children().addClass('fas fa-sort-amount-down-alt');
        sortAz(column);
    }
    else{
        thElement.attr('data-order', 'asc');
        thElement.children().removeClass('fas fa-sort-amount-down-alt');
        thElement.children().addClass('fas fa-sort-amount-down');
        sortZa(column);
    }
    renderProduct();
}

function sortAz(column) {
  product.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return -1;
    if (x > y) return 1;

    return 0;
  })
}

function sortZa(column) {
  product.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return 1;
    if (x > y) return -1;

    return 0;
  })
}
renderProduct();