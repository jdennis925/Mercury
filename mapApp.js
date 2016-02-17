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

var color = "#FFFFFF";

var selector_Click = function(event)
{
   
    var selector= $("terrainSelector");
    var picked = selector.options[selector.selectedIndex].text;
    if(picked=="Free"){
        color= "#FFFFFF";
    }
    else if(picked=="Difficult"){
        color="#FF0000";
    }
    else if(picked=="Impassable"){
        color="#000000";
    }
    else{
        alert("NONE PICKED")
    }
    
    
}


var terrainSelector = document.createElement("select");
    
     var terrainOptionHelper = function(optionName)
     {
         var terrainNew = document.createElement("option");
         terrainNew.id= "terrain" + optionName;
         terrainNew.text = optionName;
         terrainSelector.options.add(terrainNew);
     }
    
    

    

 

var MakeMap_Click = function()
{
    terrainSelector.id="terrainSelector"
    terrainOptionHelper("Free");
    terrainOptionHelper("Difficult");
    terrainOptionHelper("Impassable"); 
    
    
    
       document.body.appendChild(terrainSelector);
       $(terrainSelector.id).onchange = selector_Click;
    
    
    
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
            var cell = document.createElement("TD");
            var colId = "cell_" + rowIndex + "_" + colIndex;
            cell.setAttribute("id", colId);
            $(row.id).appendChild(cell);
            $(colId).onclick = btnCell_Click;
            
        }
    }
    
    
    
}

    
    
   
    
    

    
    
    






var btnCell_Click = function(event)
{ 
    var cell = event.target;
    cell.setAttribute("bgcolor", color)
}

window.onload = function()
{
	$("btnMakeMap").onclick = MakeMap_Click;
	// $("btnImpassableTerrain").onclick = btnImpassableTerrain_Click;
}
