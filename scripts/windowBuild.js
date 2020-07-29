function getQuantity() {
    var e = document.getElementById("qty");
    // var result = e.options[e.selectedIndex].text;
    var result = e.value;
    return (result);
}

function getWidth() {
    var e = document.getElementById("window_width");
    var result = e.value;
    return (result);
}

function getHeighth() {
    var e = document.getElementById("window_height");
    var result = e.value;
    return (result);
}

function getLongPoint() {
    // Get the checkbox
    var checkBox = document.getElementById("longpoint");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        var result = "True";
    } else {
        var result = "False";
    }
    return result;
}

function getFlatSill() {
    // Get the checkbox
    var checkBox = document.getElementById("flatsill");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        var result = "True";
    } else {
        var result = "False";
    }
    return result;
}

function getWindowType() {
    var e = document.getElementById("windowType");
    var result = e.options[e.selectedIndex].text;
    return result;
}

function getTempered() {
    var e = document.getElementById("temp_glass");
    var result = e.options[e.selectedIndex].text;
    return result;
}

function getObscure() {
    var e = document.getElementById("obscure_glass");
    var result = e.options[e.selectedIndex].text;
    return result;
}

function getMulled() {
    var e = document.getElementById("mulled_unit");
    var result = e.options[e.selectedIndex].text;
    return result;
}

function getTopBars() {
    var e = document.getElementById("top_bars");
    var result = e.value;
    return (result);
}

function getBottomBars() {
    var e = document.getElementById("bottom_bars");
    var result = e.value;
    return (result);
}

function addWindowBuild() {
    document.getElementById("windowBuildTitle").innerHTML = "Window Build";
    var table = document.getElementById("windowBuild");
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);
    var cell9 = row.insertCell(9);
    var cell10 = row.insertCell(10);
    // cell0.innerHTML = "NEW CELL1";
    cell0.innerHTML = getQuantity();
    cell1.innerHTML = getWidth();
    cell2.innerHTML = getHeighth();
    cell3.innerHTML = getLongPoint();
    cell4.innerHTML = getFlatSill();
    cell5.innerHTML = getWindowType();
    cell6.innerHTML = getTempered();
    cell7.innerHTML = getObscure();
    cell8.innerHTML = getMulled();
    cell9.innerHTML = getTopBars();
    cell10.innerHTML = getBottomBars();

    // call function from shopList.js
    addToShopList();
}