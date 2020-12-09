// Chapter 71 

function chap71(){
  var menu = {
    greeting: "Welcome to Wonder of the Seas!",
    displayGreet: function() {
      alert(this.greeting);
    }
  };
  menu.displayGreet();
}

// Chapter 72 

function chap72(fish, side){
  this.fish = fish;
  this.side = side;
}
//var chap72 = new Order("Salmon", "Rice");

// Chapter 73 

function chap73(message) {
  this.message = message;
  this.sayIt = function() {
    alert(this.message);
    
  };
}
var myObj = new chap73("I'm an alert from Chapter 73!");
myObj.sayIt();

// Chapter 75
function chap75(){

var menuOption = {
  fish: "Salmon"
}
alert(menuOption.hasOwnProperty("fish"));
}

// Chapter 76 

function chap76(){
  window.location.href = "http://students.cpcc.edu/~prosari1/web115/brand.html";
}

// Chapter 77 

function chap77() {
  window.location.assign("http://students.cpcc.edu/~prosari1/web115/");
}

// Chapter 78 

function chap78(){
	window.history.back();
}

// Chapter 79 

function chap79() {
	var popUp = window.open();
	popUp.document.write("<h1>Welcome to Wonder of the Seas!</h1><p>This is a new page.</p>");
}

// Chapter 80

function chap80(){
  var w = window.open("fly", "width=100,height=100,left=100,top=100");
  var greeting = "<link rel = 'stylesheet' type = 'text/css' href = 'styles/default.css'/> <h1>Welcome to Wonder of the Seas!</h1><p>This is a new page.</p>";
  w.document.write(greeting);
}