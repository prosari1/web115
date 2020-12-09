// Chapter 61

function chap61() {
  var c = document.getElementById("myDIV").childNodes.length;
  document.getElementById("demo61").innerHTML = c + " options.";
}

// Chapter 62 

function chap62() {
  var b = document.getElementById("myDIV2").lastChild.nodeName;
  document.getElementById("demo62").innerHTML = b; 
}

// Chapter 63 

function chap63() {
  var a = document.getElementById("myDIV3");
  var ab = a.firstElementChild;
  var elementName = ab.nodeName;
  document.getElementById("demo63").innerHTML = "The first element of the div is " + elementName;
}

// Chapter 64 

function chap64() {
	var d = document.getElementById("myDIV4");
	var countList = d.childNodes;
	var number = 0;
	var i; 
	for (i=0; i < countList.length; i++) {
 		if(countList[i].nodeName.toLowerCase() === "ul") {
      number++;
 		}
	}
	document.getElementById("demo64").innerHTML = "The number of unorder list: " + number;
}

// Chapter 65 

function chap65() {
  document.getElementsByTagName("INPUT")[0].setAttribute("type", "button"); 
}

function chap65b(){
  document.getElementsByTagName("INPUT")[0].setAttribute("class", "swtlbutton");
}

// Chapter 66 

function chap66() {
	var e = document.getElementById("myButton").getAttribute("onclick");
  document.getElementById("demo66").innerHTML = e;
}

// Chapter 67 

function chap67() {
  var myBtn = document.createElement("BUTTON"); //create <button> element
  myBtn.innerHTML = "I'm new!"; //insert text
  document.getElementById("myDIV5").appendChild(myBtn); //Append <button> to <div> with id="myDIV5"
}

// Chapter 69 

function chap69() {
	var menu = {
 		mainCourse: "Salmon",
    side: "Rice",
    drink: "White wine"
  };	
  var myMenu = "<li>" + menu.mainCourse + "</li>" + "<li>" + menu.side + "</li>" + "<li>" + menu.drink + "</li>";
	document.getElementById("demo69").innerHTML = myMenu;
}

// Chapter 70

function chap70() {
	var menu = {
 		mainCourse: "Salmon",
    side: "Rice",
    drink: "White wine"
  };	
  menu.drink = "Water";
  var myMenu = "<li>" + menu.mainCourse + "</li>" + "<li>" + menu.side + "</li>" + "<li>" + menu.drink + "</li>";
	document.getElementById("demo70").innerHTML = myMenu;
}