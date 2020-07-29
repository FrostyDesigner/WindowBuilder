function getWindowStyle() {
    var e = document.getElementById("windowStyle");
    var result = e.options[e.selectedIndex].text;
    return (result);
  }

  function getFrameColor() {
    var e = document.getElementById("frameColor");
    var result = e.options[e.selectedIndex].text;
    return (result);
  }

  function getGlassStyle() {
    var e = document.getElementById("glassStyle");
    var result = e.options[e.selectedIndex].text;
    return (result);
  }

  function getIgThickness() {
    var e = document.getElementById("igThickness");
    var result = e.options[e.selectedIndex].text;
    return (result);
  }

  function getScreen() {
    var e = document.getElementById("screen");
    var result = e.options[e.selectedIndex].value;
    return (result);
  }

  function getBarStyle() {
    var e = document.getElementById("barStyle");
    var result = e.options[e.selectedIndex].text;
    return (result);
  }
  
  function addSpecs() {
    document.getElementById("windowSpecsTitle").innerHTML = "Window Specs";
    var table = document.getElementById("windowSpecs");
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    // cell0.innerHTML = "NEW CELL1";
    cell0.innerHTML = getWindowStyle();
    cell1.innerHTML = getFrameColor();
    cell2.innerHTML = getGlassStyle();
    cell3.innerHTML = getIgThickness();
    cell4.innerHTML = getScreen();
    cell5.innerHTML = getBarStyle();
  }