// Chapter 31 

function chap31() {
  var todayDate = new Date();	
    document.getElementById("time31").innerHTML = "Today is " + todayDate;
}

// Chapter 32

function chap32() { 
	var today = new Date();
	var todaysYear = today.getFullYear();
	alert("The year is: " + todaysYear + ".");
}

function chap32b() { 
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var today = new Date();
	var date = today.getMonth();
	var todaysMonth = months[date];
	alert("This month is: " + todaysMonth + ".");
}

function chap32c() {
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var today = new Date();
	var date = today.getDay();
	var todaysName = days[date];
	alert("The week day is: " + todaysName + ".");
}

function chap32d() {
	var today = new Date();
	var hour = today.getHours();
	alert("Right now, it's " + hour + ".");
}

function chap32e(){
  var today = new Date();
  var minutes = today.getMinutes();
  alert("Right now, the minutes: " + minutes + ".");
}

function chap32f(){
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  document.getElementById("time32").innerHTML = "Right now is " + hour + ":" + minutes + ":" + seconds;
}

// Chapter 33 

function chap33(){
	var today = new Date();
	var dateOpening = new Date("March 31, 2021");
	var msToday = today.getTime();
	var msEndOfYear = dateOpening.getTime();
	var msDiff = msEndOfYear - msToday;	
	var days = msDiff / (1000 * 60 * 60 * 24);
	days = Math.floor(days);
	alert("We will reopen in " + days + " !!");	

}

// Chapter 34 

function chap34(){
	var dateOpening = new Date();
	dateOpening.setDate(30);
	dateOpening.setMonth(1);
	dateOpening.setFullYear(2021);
	dateOpening.setHours(13);
	dateOpening.setMinutes(0);
	dateOpening.setSeconds(0);
	document.getElementById("chapter34").innerHTML = dateOpening;
}

// Chapter 35

function chap35() {
	var insideTheFunction = "I'm a string inside the function chap35()!";
	document.getElementById("chapter35").innerHTML = insideTheFunction;
}

// Chapter 36

var num1 = 10;
var num2 = 15;

function chap36() {
  var sum = num1 + num2;
	//alert("The sum is " + sum);
	document.getElementById("chapter36").innerHTML = "The sum is " + num1 + " + " + num2 + " = " + sum;
}

// Chapter 37 

function chap37(){
	var first = prompt("How many shrimps? ", "10");
	var second = prompt ("How many sauces?", "3");
	var firstNum = parseInt(first);
	var secondNum = parseInt(second);
	
	function addNumbers(firstNum, secondNum) {
		return firstNum + secondNum;
	}
	var orderNum = addNumbers(firstNum, secondNum);
	document.getElementById("chapter37").innerHTML = "You ordered a total of : " + orderNum + " items.";
}

// Chapter 38 
	var global = "Global Scope";

function chap38(){
	var local = "local scope";
	alert("I display because I'm the " + local);	
}

function chap38b() {
	var global = "global scope";
	function chap38a() {
		var local = "Local Scope";
	}
	alert("I display because I'm the " + global);
}

// Chapter 39 

function chap39() {
	var orderOption = prompt("What would you like to eat?", "Salmon");
	switch(orderOption) {
		case "Salmon":
			document.getElementById("chapter39").innerHTML = "Your " + orderOption + " will be ready soon.";
			break;
		case "Tilapia":
		document.getElementById("chapter39").innerHTML = "Your " + orderOption + " will be ready soon.";
			break;
		case "Shrimp":
		document.getElementById("chapter39").innerHTML = "Your " + orderOption + " will be ready soon.";
			break;
		case "Shark":
		document.getElementById("chapter39").innerHTML = "Your " + orderOption + " will be ready soon.";
			break;
		default:
			document.getElementById("chapter39").innerHTML = "Sorry, we don't serve it.";
			break;
	}			
}

