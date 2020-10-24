function getFirstName() {
    var e = document.getElementById("name_first");
    var result = e.value;
    return (result);
}

function getLastName() {
    var e = document.getElementById("name_last");
    var result = e.value;
    return (result);
}

function getAddress() {
    var e = document.getElementById("address");
    var result = e.value;
    return (result);
}

function getCity() {
    var e = document.getElementById("city");
    var result = e.value;
    return (result);
}

function getState() {
    var e = document.getElementById("state");
    var result = e.value;
    return (result);
}

function getZip() {
    var e = document.getElementById("zip");
    var result = e.value;
    return (result);
}

function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return (today);
}

function getPhone() {
    var e = document.getElementById("phone");
    var result = e.value;
    return (result);
}

function getEmail() {
    var e = document.getElementById("email"); 
    var result = e.value;
    return (result);
}

function addCustomerToDatabase() {
    document.getElementById("customerDatabase").innerHTML = "Customer Database";
    var table = document.getElementById("custInfo");
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    // cell0.innerHTML = "NEW CELL1";
    cell0.innerHTML = getFirstName();
    cell1.innerHTML = getLastName();
    cell2.innerHTML = getAddress();
    cell3.innerHTML = getCity();
    cell4.innerHTML = getState();
    cell5.innerHTML = getPhone();
    cell6.innerHTML = getEmail();
}