function prepareEventHandlers(){
	
	var myImage=document.getElementById("fork");
	var myButton=document.getElementById("ratButton");

	

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('WR_categorisation.mp3');

	speaker.onclick=function(){
		audio.play();
	}
}

window.onload=function(){
	prepareEventHandlers();
}
