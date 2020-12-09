// Chapter 41 

function chap41(){
  var i = 0;
  var text = "";
  while(i<3) {
    text += "How may I help you today?" + "<br>";		
    i++;
  }
  document.getElementById("chapter41").innerHTML = text;
}
  
// Chapter 42

function chap42(){
  var i = 1;
  var text = "";
  do{
    text += "How may I help you today?" + "<br>";		
    i++;
  } while(i<0);
  document.getElementById("chapter42").innerHTML = text;
}

// Chapter 46 

function chap46(){
  alert("Welcome! What would you like to order?")
}

// Chapter 49

function chap49() {
  if (document.getElementById("firstorder").value === "Salmon") {
    alert("Awesome! Great choice.");
  }
  else {
    alert("We ran out of it, sorry.");
  }
}

// Chapter 50

function chap50() {						
	document.getElementById("answer").value = "Nice choice.";
}