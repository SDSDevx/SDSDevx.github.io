function prepareEventHandlers(){
	
	var forkButton=document.getElementById("fork");
	var myButton=document.getElementById("ratButton");

	

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('AC_Spanish_Spoken_1.mp3');


	speaker.onclick=function(){
		audio.play();
	}

}

window.onload=function(){
	prepareEventHandlers();
}