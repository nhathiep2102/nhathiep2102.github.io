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

