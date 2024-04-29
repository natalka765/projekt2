 var serverTempTable = document.getElementById('server-table');
    
    serverTempTable.addEventListener('click', ()=>{
        var clickedRow = event.target.closest('tr[data-id]');
        if (clickedRow) {
            var TempServerId = clickedRow.getAttribute('data-id');
            showTempServerDetails(TempServerId);
        }
    });

function showTempServerDetails(TempServerId) {
    // alert("Kliknięto serwer o ID: "+TempServerId)
    var stronaT= "";
        switch (TempServerId) {
            case "1":
                stronaT = "st1.html";
                break;
            case "2":
                stronaT = "st2.html";
                break;
            case "3":
                stronaT = "st3.html";
                break;
        }
    window.location.href = stronaT;
};


    
  
    