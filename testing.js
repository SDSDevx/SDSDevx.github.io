function prepareEventHandlers(){
	
	var forkButton=document.getElementById("fork");
	var myButton=document.getElementById("ratButton");

	var question=document.getElementById("question");
	var perro=new Audio("perro.mp3");

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('spanish spoken word.mp3');


	speaker.onclick=function(){
		audio.play();
	}

	question.onclick=function(){
		perro.play();
	}

}

window.onload=function(){
	prepareEventHandlers();
}