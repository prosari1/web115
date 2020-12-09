// Chapter 51

function chap51(){
  document.getElementById("chapter51").innerHTML = "Welcome to Wonder of the Seas!";
}

// Chapter 52 

function addBgColor(){
  document.getElementById("chapID").className += " chapter52b";
}

// Chapter 53

function chap53(){
  document.getElementById("before")
    .src="images/logo-initials.png";
}

// Chapter 54

function chap54(boat, initials) {
	var change = document.getElementById(boat);
	change.src = initials;
}

// Chapter 55

function chap55() {
	document.getElementById("chap55").style.border = "3px solid #FFFFFF";
}

// Chapter 56 

function chap56() {
  var pgraphs = document.getElementsByTagName("p");
  alert(pgraphs[11].innerHTML);
}


// Chapter 57

function chap57() {
  var targetDiv = document.getElementById("justRight");
  var pgraphs = targetDiv.getElementsByTagName("p");
  alert(pgraphs[0].innerHTML);
}

// Chapter 60 

function chap60() {
	var a = document.getElementById("Ch60");
	var imgs = a.childNodes[1];
	imgs.style.border = "5px solid #FFFFFF";	
}