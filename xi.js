var question = document.getElementById("qname").innerHTML;
var correctimage = document.getElementById("correct");
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var SPname = document.getElementById("SPname");
var Pname = document.getElementById("Pname")
var loginButt = document.getElementById("loginButt");

correctimage.onclick = function() {
		localStorage.setItem(question, "correct");
	}
				
pic1.onclick = function() {
		localStorage.setItem(question, "incorrect");
	}
	
pic2.onclick = function() {
		localStorage.setItem(question, "incorrect");
	}
	
pic3.onclick = function() {
		localStorage.setItem(question, "incorrect");
	}
//loginButt.onclick=function(){
	//localStorage.setItem("SPname", SPname.value);
	//ocalStorage.setItem("Pname", Pname.value);
	//window.location.assign("https://sdsdevx.github.io/menu.html");
//
function save() {
	localStorage.setItem("SPname", SPname.value);
	localStorage.setItem("Pname", Pname.value);
	
	
}

//loginButton.onclick=function(){
	//localStorage.setItem("SPname", SPname.value);
	//localStorage.setItem("Pname", Pname.value);
////var incorrectimage = document.getElementByClass("incorrect")
//incorrectimage.onclick = localStorage.setItem("question", "incorrect")