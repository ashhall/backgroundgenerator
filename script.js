var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function generateGradient() {
	 // body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	 // css.textContent = body.style.background;
	 // css.textContent = "right color: " + color1.value +
	 // 					" left color: " + color2. value; 
	setGradientColors(color1.value, color2.value);
	displayColorHex(color1.value, color2.value);
}

function generateRandomGradient() {
	var randColor1 = generateRandomColor();
	var randColor2 = generateRandomColor();
	setGradientColors(randColor1, randColor2);
	displayColorHex(randColor1, randColor2);
}

function setGradientColors(color1, color2) {
	body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}

function displayColorHex(color1, color2) {
	css.textContent = "right color: " + color1 +
	 					" left color: " + color2; 
}

function generateRandomColor() {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

// 3. BONUS: Add a random button which generates 
// two random numbers for the colour inputs.

color1.addEventListener("input", generateGradient);
color2.addEventListener("input", generateGradient);
randomButton.addEventListener("click", generateRandomGradient);


















































// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);
