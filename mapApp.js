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

var color = "#F3E2A9";

var terrainSelector_Click = function(event)
{
   
    var selector= $("terrainSelector");
    var picked = selector.options[selector.selectedIndex].text;
    if(picked=="Free"){
        color= "#F3E2A9";
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

var creatureSelector_Click = function(event)
{
   
    var selector= $("terrainSelector");
    var picked = selector.options[selector.selectedIndex].text;
    if(picked=="Free"){
        color= "#F3E2A9";
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



    
     var terrainOptionHelper = function(optionNameList, selector)
     {
               
         var terrainLabel = document.createElement("LABEL"); 
         terrainLabel.setAttribute("for", selector);
         terrainLabel.innerHTML= "Terrain";
         document.body.appendChild(terrainLabel);
         
         
           
         
         for (var index = 0; index < optionNameList.length; index++) {
             
             var terrainNew = document.createElement("option");
             terrainNew.id= "terrain" + optionNameList[index];
             terrainNew.text = optionNameList[index];
             selector.options.add(terrainNew);
             
         }
         
         
         
         
     }
    

      var creatureOptionHelper = function(optionNameList, selector)
     {
               
         var creatureLabel = document.createElement("LABEL"); 
         creatureLabel.setAttribute("for", selector);
         creatureLabel.innerHTML= "Creatures";
         document.body.appendChild(creatureLabel);
              
         
         for (var index = 0; index < optionNameList.length; index++) {
             
             var creatureNew = document.createElement("option");
             creatureNew.id= "creature" + optionNameList[index];
             creatureNew.text = optionNameList[index];
             selector.options.add(creatureNew);
             
         }
         
     }

    

 

var MakeMap_Click = function()
{
    var terrainSelector = document.createElement("select");
    terrainSelector.id="terrainSelector";
    
    
    
    var creatureSelector = document.createElement("select");
    creatureSelector.id = "creatureSelector"
    
    var brk = document.createElement("br");
    
    
    
    terrainOptionHelper(["Free","Difficult","Impassable"], terrainSelector);
    document.body.appendChild(terrainSelector);
    
    $(terrainSelector.id).onchange = terrainSelector_Click;
    
    creatureOptionHelper(["Striker","Defender","Leader","Controller","MONSTER"], creatureSelector);
    document.body.appendChild(creatureSelector);
    document.body.appendChild(brk);
    $(creatureSelector.id).onChange = creatureSelector_Click;
    
    
    
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
            
            var img = document.createElement("IMG");
            img.setAttribute("src", "cthulhu.png");
            img.setAttribute("width", "100");
            img.setAttribute("height", "100");
            
            cell.appendChild(img);          
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
