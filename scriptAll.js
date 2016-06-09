function prepareEventHandlers(){
	
	//var forkButton=document.getElementById("fork");
	//var myButton=document.getElementById("ratButton");-->
	var quest=document.getElementById("question");
	var speaker = document.getElementById("speakerIcon");
	var menu=document.getElementById("menu");
	var skipSpanishSpoken1=document.getElementById("skip");
	var submit=document.getElementById("submit");
	var eng=document.getElementById("eng");
	var span=document.getElementById("span");
	var login=document.getElementById("storage");

	var audio=new Audio('AC_Spanish_Spoken_1.mp3');
	var perro=new Audio('perro.mp3');


	login.onclick=function(){
		if(span.checked){
			window.location.assign("https://sdsdevx.github.io/menuSpanish.html")
		
		} else {
			window.location.assign("https://sdsdevx.github.io/menu.html")
			}
		}


	speaker.onclick=function(){
		
		perro.play();
	}

	quest.onclick=function(){
		audio.play();
	}
	
	menu.onclick=function(){
		window.location.assign("https://sdsdevx.github.io/menuSpanish.html")
	}

	skipSpanishSpoken1.onclick=function(){
		window.location.assign("https://sdsdevx.github.io/menu.html")
	}



}

window.onload=function(){
	prepareEventHandlers();
}