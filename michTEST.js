function prepareEventHandlers(){
	
	//var forkButton=document.getElementById("fork");
	//var myButton=document.getElementById("ratButton");
	var question = document.getElementById("question");

	

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('AC_Spanish_Spoken_1.mp3');
	var perro = new Audio('perro.mp3')


	question.onclick=function(){
		audio.play();
	}

}
	speaker.onclick=function(){
		perro.play();
	}

window.onload=function(){
	prepareEventHandlers();
}