var serverVirtTable = document.getElementById('server-table');
    
serverVirtTable.addEventListener('click', ()=>{
    var clickedRow = event.target.closest('tr[data-id]');
    if (clickedRow) {
        var VirtServerId = clickedRow.getAttribute('data-id');
        showVirtServerDetails(VirtServerId);
    }
});

function showVirtServerDetails(VirtServerId) {
    // alert("Kliknięto serwer o ID: "+VirtServerId)
    var stronaW= "";
        switch (VirtServerId) {
            case "1":
                stronaW = "sw1.html";
                break;
            case "2":
                stronaW = "sw2.html";
                break;
            case "3":
                stronaW = "sw3.html";
                break;
        }
    window.location.href = stronaW;
};
