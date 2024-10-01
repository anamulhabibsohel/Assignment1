function drawTable() {
    var table = document.getElementById("multiplicationTable");
    table.innerHTML = "";

    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;

    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");
            cell.textContent = (i + 1) * (j + 1);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}