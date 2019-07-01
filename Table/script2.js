let product = [{
        img: "img/camry.png",
        name: 'Camry',
        series: 'T089',
        price: '51.000',
        amount: '20',
    },
    {
        img: "img/fortuner.png",
        name: 'Fortuner',
        series: 'D218',
        price: '50.000',
        amount: '15',
    },
    {
        img: "img/altis.png",
        name: 'Altis',
        series: 'B1D4',
        price: '45.000',
        amount: '33',
    },
    {
        img: "img/yaris.png",
        name: 'Yaris',
        series: 'D3R3',
        price: '32.000',
        amount: '24',
    },
    {
        img: "img/vios.png",
        name: 'Vios',
        series: 'B4R0',
        price: '35.000',
        amount: '88',
    },
    {
        img: "img/alphard.png",
        name: 'Alphard',
        series: 'G4X0',
        price: '85.000',
        amount: '11',
    }
]

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

function tinhTong() {
    let sum = 0;
    for (var i = 0; i < product.length; i++) {
        sum += Number(product[i].price.replace('.', '')) * Number(product[i].amount);
    }
    return sum;
}

document.getElementById('tong').innerText = tinhTong();


function sortName() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortSeries() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortPrice() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];

            if (x.innerHTML > y.innerHTML) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortAmount() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[4];
            y = rows[i + 1].getElementsByTagName("TD")[4];

            if (x.innerHTML > y.innerHTML) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}