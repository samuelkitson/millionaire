function fixPrizeHighlight(){
  for (i = 0; i < 15; i++) {
    if ((String(i+1))=="5"||(String(i+1))=="10"||(String(i+1))=="15") {
      document.getElementById("prizes"+String(i+1)+"A").style.color = "white";
      document.getElementById("prizes"+String(i+1)+"B").style.color = "white";
      document.getElementById("prizes"+String(i+1)+"C").style.color = "white";
    } else {
      document.getElementById("prizes"+String(i+1)+"A").style.color = "orange";
      document.getElementById("prizes"+String(i+1)+"B").style.color = "orange";
      document.getElementById("prizes"+String(i+1)+"C").style.color = "orange";
    };
    document.getElementById("prizes"+String(i+1)+"A").parentElement.parentElement.style.backgroundColor = "transparent";
  };
};

function highlightCurrentPrize(current){
  fixPrizeHighlight();
  document.getElementById("prizes"+String(current)+"A").style.color = "white";
  document.getElementById("prizes"+String(current)+"B").style.color = "white";
  document.getElementById("prizes"+String(current)+"C").style.color = "white";
  document.getElementById("prizes"+String(current)+"A").parentElement.parentElement.style.backgroundColor = "orange";
};

function fillPrizesTable(values) {
  document.getElementById("prizes15A").innerHTML = "15";
  document.getElementById("prizes15B").innerHTML = "~";
  document.getElementById("prizes15C").innerHTML = values[14];
  for (i = 0; i < (values.length)-1; i++) {
    var dataTable = document.getElementById("prizestable");
    var dataRow = dataTable.insertRow(1);
    var dataCell1 = dataRow.insertCell(0);
    var dataCell2 = dataRow.insertCell(1);
    var dataCell3 = dataRow.insertCell(2);
    dataCell1.innerHTML = "<a class='prizesA' id='prizes"+String(i+1)+"A'>"+String(i+1)+"</a>";
    dataCell2.innerHTML = "<a class='prizesB' id='prizes"+String(i+1)+"B'>~</a>";
    dataCell3.innerHTML = "<a class='prizesC' id='prizes"+String(i+1)+"C'>"+values[i]+"</a>";
  };
  var table = document.getElementById("prizestable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
};
