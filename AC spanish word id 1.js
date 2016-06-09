function prepareEventHandlers(){
	
	//var forkButton=document.getElementById("fork");
	//var myButton=document.getElementById("ratButton");
	var question = document.getElementById("question");
	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('spanish wrod identification 1.mp3');
	var perro = new Audio('perro.mp3');
	
	var skip = document.getElementById("skip");
	skip.onclick=function(){
		window.location.assign("https://sdsdevx.github.io/menuSpanish.html")
	}
	var submit=document.getElementById("submit");
	submit.onclick=function(){
		window.location.assign("https://sdsdevx.github.io/menuSpanish.html")
	}

	question.onclick=function(){
		audio.play();
	}

	
	speaker.onclick=function(){
		perro.play();
	}
}

window.onload=function(){
	prepareEventHandlers();
}