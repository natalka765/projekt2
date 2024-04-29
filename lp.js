var rows = document.querySelectorAll('#server-table tr');

var rowNumber = 1;

for (var i = 1; i < rows.length; i++) {
    var cell = rows[i].getElementsByTagName('td')[0];
    cell.textContent = rowNumber;
    rowNumber++;
}