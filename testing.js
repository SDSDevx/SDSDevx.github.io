function prepareEventHandlers(){
	
	var forkButton=document.getElementById("fork");
	var myButton=document.getElementById("ratButton");

	

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('AC_Word Identification.mp3');


	speaker.onclick=function(){
		audio.play();
	}

	//forkButton.onclick=function(){
		//forkButton.style.backgroundColor = "red";
	//}

	function changeBack(){
		document.body.style.backgroundColor = "red";
		audio.play();
	}


}

window.onload=function(){
	prepareEventHandlers();
}