var wiersz = document.getElementsByTagName("tr");
    
    for (var i=0; i<wiersz.length; i++){
        wiersz[i].onmouseover = function(){
            this.style.cursor = "pointer";
            this.style.backgroundColor="rgba(95, 74, 74, 0.616)";
        };
    };

    for (var i=0; i<wiersz.length; i++){
        wiersz[i].onmouseout = function(){
            this.style.cursor = "";
            this.style.backgroundColor="";
        };
    };


var searchInput = document.getElementById('search');
var rows = document.querySelectorAll('#server-table tr');

searchInput.addEventListener('input', function(){
    var searchText = searchInput.value.trim().toLowerCase();

    rows.forEach(function(row, index){
        if(index===0){
            row.style.display= " ";
            return;
        }
        var serverNameCell = row.cells[0]; // pierwsza komorka w kazdym wierszu
        var serverNameText = serverNameCell.textContent.trim().toLowerCase();

        if(serverNameText.includes(searchText)){
            row.style.display = ''; 
        } else{
            row.style.display = 'none'; 
        }
    });
});

let currentPage = 1;
let recordsOnPage = 5; 
const table = document.getElementById('server-table');

function displayData() {
    const startIndex = (currentPage - 1) * recordsOnPage;
    const endIndex = startIndex + recordsOnPage;

    for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = 'none';
    }

    for (let i = startIndex + 1; i < Math.min(endIndex + 1, rows.length); i++) {
        rows[i].style.display = '';
    }

    document.getElementById('page-info').textContent = `strona ${currentPage}`;
}

function nextPage() {
    if ((currentPage * recordsOnPage) < rows.length) {
        currentPage++;
        displayData();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayData();
    }
}

function RecordsOnPage() {
    recordsOnPage = parseInt(document.getElementById('RecordsOnPage').value);
    currentPage = 1;
    displayData();
}
window.onload = function() {
    displayData();
};
var statusCells = document.querySelectorAll('#server-table td:last-child');

statusCells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
    });
});
