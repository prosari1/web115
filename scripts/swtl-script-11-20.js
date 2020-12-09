// Chapter 11 - Comparison operators

function chap11(){
  var compareMe = 3;
  if(compareMe === 3){
    alert("The value is equal " + compareMe);
  }
}

function chap11b(){
  var compareMeToo = 3;
  if(compareMeToo !== 0){
    alert(`The value is not equal ${compareMeToo}`);
  }
}

// Chapter 12 - if...else and else if statements

function chap12(){
  var waiterQuestion = "What would you like for your order? ";
  var menuOption = "(Lobster)";
  var waiterAnswer = "We don't have Lobster anymore.";
  var waiterAnswer2 = "Thanks for your order.";
  var firstOrder = prompt(waiterQuestion + menuOption);
  if (firstOrder === "Lobster"){
    alert(waiterAnswer);
  } else {
    alert(waiterAnswer2);
  }
}

// Chapter 13 - Testing sets of conditions

function chap13() {
  var firstOrder = "Lobster";
  var secondOrder = "Salmon";
  var menuOption = "Lobster";
  var menuOption2 = "Salmon";
  if (menuOption === firstOrder && menuOption2 === secondOrder){
    alert(`Your first order is ${menuOption} and your second order is ${menuOption2}`);
  }
}

function chap13b() {
  var firstOrder = "Lobster";
  var secondOrder = "Tilapia";
  var menuOption = "Lobster";
  var menuOption3 = "Salmon";
  if (menuOption === firstOrder || menuOption3 === secondOrder){
    alert(`Your first order is ${firstOrder} or your second order is ${secondOrder}`);
  }
}

// Chapter 14 - if statement nested

function chap14(){
  var a = 2;
  var b = 2;
  var c = 4;
  var d = 5;

  if (a === b) {
    if (c !== d) {
      var g = "I'm inside 2 ifs statements!";
      alert(g);
    }
  }
}

// Chapter 15 - Arrays

function chap15(){
  var foodArray = ["Salmon", " Tilapia ", " Tuna ", " Lobster "];
  alert(foodArray);
}

// Chapter 16 - Arrays: adding and removing elements

function chap16(){
  var foodArray = ["Salmon", " Tilapia ", " Tuna ", " Lobster "];
  foodArray.pop(3);
  foodArray.push(" Shark");
  alert(foodArray);
}

// Chapter 17 - Arrays: removing, inserting, and extracting elements

function chap17(){
  var foodArray = ["Salmon", " Tilapia ", " Tuna ", " Lobster "];
  foodArray.shift();
  alert(foodArray);
}

function chap17b(){
  var foodArray = ["Salmon", " Tilapia ", " Tuna ", " Lobster "];
  foodArray.unshift();
  alert(foodArray);
}

function chap17c(){
  var foodArray = ["Salmon", " Tilapia ", " Tuna ", " Lobster "];
  foodArray.splice(1, 3);
  alert(foodArray);
}

function chap17d(){
  var foodArray = ["Salmon", " Tilapia ", " Tuna ", " Lobster "];
  foodArray = foodArray.slice(1);
  alert(foodArray);
}

//  Chapter 18 - for loops

function chap18(){
  var foodArray = ["Salmon", "Tilapia", "Tuna", "Lobster"];
  var customerOrder = prompt("What would you like?", "Look the menu");
  for (var i = 0; i <= 3; i++) {
    if (customerOrder === foodArray[i]) {
      alert("Thanks, I'll be right back with your food!");
    }
  }
}

// Chapter 19 - for loops: flags, Booleans, array length, and loopus interruptus

function chap19(){
  var wantChicken = false;
  var foodArray = ["Salmon", "Tilapia", "Tuna", "Lobster"];
  var customerOrder = prompt("What would you like?", "Look the menu");
  for (var i = 0; i <= 3; i++) {
    if (customerOrder === foodArray[i]) {
      wantChicken = true;
      alert("We have it on the menu!");
      break;
    }
  }
  if(wantChicken===false) {
		alert("We don't serve chicken here, sorry.");
	}
}

//  Chapter 20 - for loops nested

function chap20() {
  var i;
	var printText = "";
  var j;
  for (i = 0; i < 2; i++) {
    for (j = 0; j < 2; j++) {
      printText += "We're open!" + "<br>";
      document.getElementById("chapter20").innerHTML = printText;
    } 
  } 
}