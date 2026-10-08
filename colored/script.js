//Available for reproduction under trademark law.
//Made by: Alexander Paniagua ~ Buzz Needs Bees
//Send me a serious inquiry for more code: @yungcollat or buzzsmusic@gmail.com
//Made this with HTML5, CSS3, and JavaScript, can be used offline.
//
//Not for Commercial use. For offline datasheets and accounting.

//Tags for SEO: #Code #Scripts #Datasheets #Data #Datatable #Table #Offline #Program #Excel #Azure #AWS #Forms #Sites #PaaS   
//#platform #collateral #yungcollat

var rows = null;
var columns = null;
var inputElement = document.getElementById("default");


function update() {
	var rows = document.getElementById("inputRows").value;
	var columns = document.getElementById("inputColumns").value;
	var createRows= "<tr></tr>";
	var createColumns= "<td></td>";


for(let i = 0;i<rows;i++)
	{
	let Table = document.getElementById("Table");
	Table.innerHTML= Table.innerHTML + createRows;
	}


for(let n = 0;n<rows;n++)
	{
	let row = document.getElementsByTagName("tr")[n];
		for(let x = 0; x<columns; x++)
		{	
			row.innerHTML = row.innerHTML + createColumns;
		}
	}

for(let script = 0; script<rows; script++)
	{
	let pointer = document.getElementsByTagName("tr")[script];
		for(let xy = 0; xy<columns; xy++)
		{
			let dataCell = pointer.getElementsByTagName("td")[script];
			dataCell.setAttribute("pointer", "${xy},${script}");
			//document.row.insertAdjacentHTML();
		}
	}


}
