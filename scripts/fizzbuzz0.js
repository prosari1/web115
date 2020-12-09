//Function to Greeting by name

function fizzBuzz0() {	
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
	var lastName  = document.getElementById("last-name").value;
	// Display Welcome to User Input
	document.getElementById("greeting").innerHTML =  `Welcome to Wonder Of The Seas, ${firstName} ${middleInitial}. ${lastName}!`;
	
		
	// Create loop which prints 125 identical lines
	var displayMessage = "";
	var i;
	for (i = 1; i <= 125; i++) {
		displayMessage += `${i}. We are here to serve the best Seafood!` + "<br>";
	}		
	document.getElementById("demoZero").innerHTML = displayMessage;
}

// FIZZBUZZ ZERO PART 2 /////////////////////////////////////////////
function fizzBuzz02() {
	var first = document.getElementById("first-name").value;
	var mid   = document.getElementById("middle-initial").value;
	var last  = document.getElementById("last-name").value;
	document.getElementById("greeting").innerHTML =  `Welcome to Wonder Of The Seas, ${first} ${mid}. ${last}!`;
			
	var numberMax = prompt(`How high do you want to count, ${first} ?`); //Ask for number
	var inputNum = parseInt(numberMax);
		
	// LOOP MESSAGE - EVEN or ODD Number printed
	var displayMessage = "";
	var i;
	for (i = 1; i <= inputNum; i++) {
		if (i % 2 == 0) {
			displayMessage += `${i}. We are here to serve the best Seafood! - The number is even` + "<br>";
		} else {
			displayMessage += `${i}. We are here to serve the best Seafood! - The number is odd` + "<br>";
		}	
	}
	document.getElementById("demoZero2").innerHTML = displayMessage;
	
}