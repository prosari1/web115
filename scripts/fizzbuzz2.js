function fizzBuzz2() {
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
	var lastName  = document.getElementById("last-name").value;
	document.getElementById("greeting").innerHTML =  `Welcome to Wonder Of The Seas, ${firstName} ${middleInitial}. ${lastName}!`;
		
	// LOOP MESSAGE - EVEN or ODD Number printed - with parameters and function checkDivision()
	var displayMessage = "";
  var i;
  var firstNumber = 3;
  var secondNumber = 5;

  var word1 = "Fizz";
  var word2 = "Buzz";
  var wordCombo = word1 + word2;


  for (i = 1; i <= 140; i++) 
  {
    displayMessage += `${i}. `
    if (checkDivision(i, firstNumber)  && checkDivision(i, secondNumber)) 
    { 
      displayMessage += wordCombo;
    } 
    else if (!checkDivision(i, firstNumber)  && checkDivision(i, secondNumber)) 
    {
			displayMessage += word1;
    }	
    else if (checkDivision(i, firstNumber)  && !checkDivision(i, secondNumber))
    {
      displayMessage += word2;
    } 
    else 
    {
      displayMessage += " ";
    }
    displayMessage += "<br>";
	}
	document.getElementById("demoTwo").innerHTML = displayMessage;
}

function checkDivision(num1, num2) { 
  if(num1 % num2 === 0) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}