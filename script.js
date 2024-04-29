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