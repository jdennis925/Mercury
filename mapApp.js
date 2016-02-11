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
    $("myTable").appendChild(y);

    var z = document.createElement("TD");
    z.setAttribute("id", "myTd"+ cur);
    
    var t = document.createTextNode("cell");
    z.appendChild(t);
    $(y.id).appendChild(z);
}

var MakeMap_Click = function()
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
	
    for (var colIndex = 0; colIndex < colCount; colIndex++) 
    {
        var col = document.createElement("col");
        col.setAttribute("width", "100");
        $(mapTable.id).appendChild(col);      
    }
    
    for(var rowIndex = 0; rowIndex < rowCount; rowIndex++)
    {
        var row = document.createElement("TR");
        row.setAttribute("id", "row_" + rowIndex);
        $(mapTable.id).appendChild(row);
        row.setAttribute("height", "100");
        
	
        for(var colIndex = 0; colIndex < colCount; colIndex++)
        {
            var col = document.createElement("TD");
            var colId = "cell_" + rowIndex + "_" + colIndex;
            col.setAttribute("id", colId);
            $(row.id).appendChild(col);
            $(colId).onclick = btnImpassableTerrain_Click;
        }
    }
}

var btnImpassableTerrain_Click = function()
{
    var cell = $("cell_2_2");
    cell.setAttribute("bgcolor", "#FFFF00")
    var text = document.createTextNode("X");
    cell.appendChild(text);
}

window.onload = function()
{
	$("btnMakeMap").onclick = MakeMap_Click;
	// $("btnImpassableTerrain").onclick = btnImpassableTerrain_Click;
}
