// Chapter 21 - Changing case

function chap21(){
  var menuOption = "Salmon";
  var menuOptionUpper = menuOption.toUpperCase();
  var menuOptionLower = menuOption.toLowerCase();
  alert(menuOptionUpper);
}

function chap21b(){
  var menuOption = "Salmon";
  var menuOptionLower = menuOption.toLowerCase();
  alert(menuOptionLower);
}

// Chapter 22 - Strings: measuring length and extracting parts

function chap22(){
  var order = prompt("Enter your order");
  var orderLength = order.length;
  alert("Your order has " + orderLength + " letters.");
}

// Chapter 23 - Strings: finding segments

function chap23(){
  var menuOption = "Salmon";
  alert("The segment 'o' has the index of: " + menuOption.indexOf("o"));
}

function chap23b(){
  var menuOption = "Salmon Tilapia";
  alert("The last 'a' in the segment has teh index of: " + menuOption.lastIndexOf("a"));
}

// Chapter 24 - Strings: finding a character at a location

function chap24(){
  var menuOption = "Salmon";
  alert(menuOption.charAt(0));
}

// Chapter 25 - Strings: replacing characters

function chap25(){
  var menuOption = "I'd like to have fried Salmon.";
  alert(menuOption);
}

function chap25b(){
  var menuOption = "I'd like to have fried Salmon.";
  var newOption = "grilled";
  menuOptionReplaced = menuOption.replace("fried", newOption);
  alert(menuOptionReplaced);
}

// Chapter 26 - Rounding numbers

function chap26(){
  var num = 704.352669;
  num = Math.round(num);
  alert(num);
}

function chap26b(){
  var num = 704.352669;
  num = Math.ceil(num);
  alert(num);
}

function chap26c(){
  var num = 704.352669;
  num = Math.floor(num);
  alert(num);
}

// Chapter 27 - Generating random numbers

function chap27(){
  var randomNum = Math.random();
  alert(randomNum);
}

// Chapter 28 - Converting strings to integers and decimals

function chap28(){
  var numOrders = "5";
  alert("number of orders: " + parseInt(numOrders));
}

function chap28b(){
  var numOrders = "5.5";
  alert("number of orders: " + parseFloat(numOrders));
}

// Chapter 29 - Converting strings to numbers, numbers to strings

function chap29(){
  var numOrderString = "5";
  var numOrders = Number(numOrderString);
  alert("This is the number of orders: " + numOrders);
}

// Chapter 30 - Controlling the length of decimals

function chap30(){
  var numOrders = 9.9584;
  alert("The number of orders: " + numOrders.toFixed());

}
