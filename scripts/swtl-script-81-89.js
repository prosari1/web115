// Chapter 81

function testForBlocker() {
  var testPop = window.open("", "", "width=100,height=100");
  if (testPop === null || typeof(testPop) === "undefined") {
    //alert("Please disable your popup blocker");
    document.getElementById("demo81").innerHTML = "Please disable your popup blocker.";	
	} else {
		document.getElementById("demo81").innerHTML = "Thank you for allowing PopUps.";
	}
  testPop.close();
}

// Chapter 82 

function chap82() {
	var orderOption = document.getElementById("order");
    if(order.value.length === 0) {
		document.getElementById("demo82").innerHTML= "Please enter your order here.";
		order.focus();
		return false;
	} else {
		document.getElementById("demo82").innerHTML = "Thank you for your order.";
	}
}

// Chapter 83 

function chap83(selectID) {
	var selectedMenu = document.getElementById(selectID);
	if(selectedMenu.selectedIndex === 0) {
    alert("Please select your side.");
		return false;
	} else {
    document.getElementById("demo83").innerHTML = `Your side number is ${selectedMenu.selectedIndex}. Thank you for your order.`;
	}
}

// Chapter 84 

function chap84(name) {
	var items = document.getElementsByName(name);
	for(var i=0;i<items.length;i++) {
		if(items[i].checked){
			document.getElementById("demo84").innerHTML = `Thank you for your order.`;
			return true;
		}
	}
	alert("Please select your side.");
	return false;
}

// Chapter 85 

function chap85() {
	var phoneField = document.getElementById("phone");
	var valueEntered = document.getElementById("phone").value;
	var numChars = document.getElementById("phone").value.length;
	if(numChars < 10) {
		document.getElementById("demo85").innerHTML = ("Please enter a 10-digit phone number.");
		phoneField.focus();
		return false;
	} 
	for(var i=0;i<=9;i++){
		var thisChar = parseInt(valueEntered[i]);
		if(isNaN(thisChar)){
			document.getElementById("demo85").innerHTML = ("Please only enter the numbers.");
			phoneField.focus();
  		return false;
		} else {
			document.getElementById("demo85").innerHTML = ("We'll call when your order is ready, thank you!");		
		}
	}
}

// Chapter 86 


function chap86() {
	var validateEmail = true;
	var emailField = document.getElementById("email");
	var eEntered =  document.getElementById("email").value; 
	if(eEntered.indexOf(" ") !== -1){
    alert("Please enter the email address without spaces.");
		emailField.focus();
		return false;
	}
	if (eEntered.indexOf("@")<1 || eEntered.indexOf("@") > eEntered.length-5) {
		validateEmail = false;
	}
	if(eEntered.indexOf(".") - eEntered.indexOf("@")<2 || eEntered.indexOf(".") > eEntered.length -3){
		validateEmail = false;
	}
	if(validateEmail === false){
    alert("Please enter a valid email.");
		emailField.focus();
		return false;
	} else {
		document.getElementById("demo86").innerHTML = "You entered a valid email. Thank you!"
	}
}

// Chapter 87 


function chap87() {
	try {
		var orderOption = "I won't display this message.";
		document.getElementById("demo87").innerHTML = (orderOp);
	}
	catch(error){
		document.getElementById("demo87").innerHTML = `${error}`;
	}
}

// Chapter 88 

function chap88() {
	try {
		var something = document.getElementById("userInput");
		something.style.background = "white";
		var addressIsLegal = true;
		var eEntered = document.getElementById("userInput").value;
		if(eEntered.indexOf(" ")!==-1){	
			something.focus();
			throw("There are one ore more spaces in the email address.");
			return false;
		}
		if (eEntered.indexOf("@")<1 || eEntered.indexOf("@")>eEntered.length-5) {
			addressIsLegal = false;
		}
		if(eEntered.indexOf(".")-eEntered.indexOf("@")<2 || eEntered.indexOf(".") > eEntered.length-3){
			addressIsLegal = false;
		}
		if(addressIsLegal === false){
			something.focus();
			throw("The format of the email is not correct.");
			return false;
		} else {
		document.getElementById("demo88").innerHTML = "Thank you. You form has been submitted."
		}	
	}
	catch(error) {
		document.getElementById("demo88").innerHTML = (error);		
	}	
}

// Chapter 89









