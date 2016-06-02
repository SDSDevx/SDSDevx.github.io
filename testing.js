function prepareEventHandlers(){
	
	var myImage=document.getElementById("fork");
	var myButton=document.getElementById("ratButton");

	

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('AC_Word Identification.mp3');


	speaker.onclick=function(){
		audio.play();
	}

	myButton.onclick=function{
		myButton class="changeBackground";
	}


}

window.onload=function(){
	prepareEventHandlers();
}