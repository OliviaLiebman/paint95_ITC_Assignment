var selectedColor = 0;

var welcome = document.createElement("h1");
var textNode = document.createTextNode("Welcome to Paint 95");
welcome.className = "welcomeClass";
document.body.appendChild(welcome);
welcome.appendChild(textNode);

var inputField = document.createElement("input");
inputField.id = "userInput";
inputField.setAttribute("type", "number");

var colors = ["#F012BE", "#85144b", "#FF4136", "#FF851B", "#FFDC00", "#01FF70", "#3D9970", "#39CCCC", "#0074D9"];
/////////////////////////////////////////////////
function queryUser() {
	var inputP = document.createElement("p");
	document.body.appendChild(inputP);
	inputP.className = "inputFieldClass";
	var inputFieldText = document.createTextNode("Please enter the dimension you would like for your canvas (less than 100):");
	inputP.appendChild(inputFieldText);

	inputP.appendChild(inputField);

	var submit = document.createElement("BUTTON");
	submit.id = "submitId";
	var submitText = document.createTextNode("submit");
	submit.appendChild(submitText);
	inputP.appendChild(submit);

	document.getElementById("submitId").onclick = gridGenerator;
}
queryUser();

/////////////////////////////////////////////////
for (var m = 0; m < colors.length; m++) {
	var colorsDiv = document.createElement("div");
	colorsDiv.id = colors[m];
	colorsDiv.className = "colorsClass";
	colorsDiv.style.backgroundColor = colors[m];
	colorsDiv.addEventListener("click", colorPicker);
	document.body.appendChild(colorsDiv);
}
/////////////////////////////////////////////////
var divContainer = document.createElement("div");
divContainer.id = "container";
document.body.appendChild(divContainer);

//make grid canvas to draw:
function gridGenerator() {

var x = document.getElementById("userInput").value;

	if (x < 100) {

		for (var i = 0; i < x; i++) {

			var row = document.createElement("div");

			for (var j=0; j < x; j++) {

				var makeDiv = document.createElement("div");
				makeDiv.className = "boxClass";
				makeDiv.addEventListener("mouseover", draw);
				row.appendChild(makeDiv);
			}
		divContainer.appendChild(row);
		}
	}

	else {
		var tryAgain = document.createElement("p");
		tryAgain.className = "tryAgainClass";
		document.body.appendChild(tryAgain);
		var tryAgainText = document.createTextNode("Please make sure your canvas size is less than 100");
		tryAgain.appendChild(tryAgainText);
		queryUser;

	}

//Clear canvas button:		
		var eraserButton = document.createElement("BUTTON");
		eraserButton.id = "eraserId";
		var eraserText = document.createTextNode("eraser");
		eraserButton.appendChild(eraserText);
		document.body.appendChild(eraserButton);
		eraserButton.addEventListener("click", draw);
}
/////////////////////////////////////////////////
//have selected color be ready to draw:
function colorPicker(e) {
	selectedColor = e.target.id;//selectedColor is now the id of the color we wish to color the divs with
}
function draw(e) {
	// var drawColor = e.target;
	if (selectedColor==0) {
		selectedColor = "#F012BE";
	}
	else if (this.id == "eraserId") {
		selectedColor = "white";
	}
	e.target.style.backgroundColor = selectedColor;
}
