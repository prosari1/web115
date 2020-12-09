// Chapter 1 - Alerts 

function chap1(){
  alert("Welcome to the best seafood restaurant!")
}

// Chapter 2 - Variables for Strings

function chap2(){
  var food = "Lobster";
  alert(food);
}

// Chapter 3 - Variables for Numbers

function chap3(){
  var menuOptions = 10;
  alert(menuOptions);
}

// Chapter 4 - Variable Names Legal and Illegal

function chap4(){
  var illegalName = "_123test";
  alert(illegalName);
}
function chap4b(){
  var legalName = "camelCase23";
  alert(legalName);
}

// Chapter 5 - Math Expressions: familiar operators

function chap5(){
  var number = 100;
  var dividend = 2;
  var result = number / dividend;
  alert(result);
}

// Chapter 6 - Math Expressions: unfamiliar operators

function chap6(){
  var numberToIncrease = 1;
  numberToIncrease++;
  alert(numberToIncrease);
}

function chap6b(){
  var numberToDecrease = 1;
  numberToDecrease--;
  alert(numberToDecrease);
}

// Chapter 7 - Math Expressions: eliminating ambiguity

function chap7(){
  var mathEquation = (10-5)*5;
  alert(mathEquation);
}

function chap7b(){
  var mathEquation2 = 10-(5*5);
  alert(mathEquation2);
}

// Chapter 8 - Concatenating text strings

function chap8(){
  var firstName = "This is my first string ";
  var lastName = "and this is the last string";
  alert(firstName + lastName);
}

// Chapter 9 - Prompts

function chap9(){
  var askQuestion = prompt("Do you like seafood?","Maybe...");
}

// Chapter 10 - if statement

function chap10() {
	var seafood = prompt("Do you like uncooked fish?", "Yes!");
	if(seafood === "Yes!") {
	alert("Yay! We love it too!");
  } else {
    alert("Hmm, too bad then!")
  }
}