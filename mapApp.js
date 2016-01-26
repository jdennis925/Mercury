
var $ = function(id){
	return document.getElementById(id);
}
var AddOneButton_Click = function()
{
	var cur2 = parseFloat($("AddOneButton").value);
	var cur = cur2 + 1;
	$("AddOneButton").value = cur.toFixed();
	
    if(!$("myTable"))
    {
        var x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.body.appendChild(x);
    }
    
	var y = document.createElement("TR");
    y.setAttribute("id", "myTr"+ cur);
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    z.setAttribute("id", "myTd"+ cur);
    
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById(y.id).appendChild(z);
}

var MapMap_Click = function()
{
    if($("mapTable"))
    {
	   document.body.removeChild($("mapTable"))
    }
    var mapTable = document.createElement("TABLE");
	mapTable.setAttribute("id", "mapTable")
	document.body.appendChild(mapTable);
    
	var rowCount = parseInt($("txtRowCount").value);
	var colCount = parseInt($("txtColCount").value);
	
    for(var rowIndex = 0; rowIndex < rowCount; rowIndex++)
    {
        var row = document.createElement("TR");
        row.setAttribute("id", "row_" + rowIndex);
        document.getElementById(mapTable.id).appendChild(row);
	
        for(var colIndex = 0; colIndex < colCount; colIndex++)
        {
            var col = document.createElement("TD");
            col.setAttribute("id", "col_" + colIndex);
    
            var text = document.createTextNode("X");
            col.appendChild(text);
            document.getElementById(row.id).appendChild(col);        
        }
    }
}

window.onload = function()
{
	$("AddOneButton").onclick = AddOneButton_Click;
	$("btnMakeMap").onclick = MapMap_Click;
}
