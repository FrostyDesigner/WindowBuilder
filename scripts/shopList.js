function calculateLength() {
    var qty = parseInt(getQuantity(), 10);
    var width = parseInt(getWidth(), 10);
    var height = parseInt(getHeighth(), 10);
    var doubleWidth = width * 2;
    var doubleHeight = height * 2;
    var singlelLength = doubleWidth + doubleHeight;
    var totalLength=qty*singlelLength;
    // alert(totalLength);
    return totalLength;
}

function addToShopList() {
    document.getElementById("shopListTitle").innerHTML = "Shop List / Order Form (Work In Progress)";
    var table = document.getElementById("shopList");
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    // cell0.innerHTML = "NEW CELL1";
    cell0.innerHTML = getWindowStyle();
    cell1.innerHTML = calculateLength();
}