function prepareEventHandlers(){
	
	var forkButton=document.getElementById("fork");
	var myButton=document.getElementById("ratButton");

	var question=document.getElementById("question");
	var taza=new Audio("taza.mp3");

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('spanish spoken word.mp3');


	speaker.onclick=function(){
		audio.play();
	}

	question.onclick=function(){
		taza.play();
	}

}

window.onload=function(){
	prepareEventHandlers();
}