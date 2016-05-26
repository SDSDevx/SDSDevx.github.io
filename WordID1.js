//var newHeading = document.createElement("h1");
//var h1Text = document.createTextNode("This is a test");


//newHeading.appendChild(h1Text);	
//document.getElementById("test").appendChild(newHeading);

function prepareEventHandlers(){
	document.onclick=function(){
		alert("You have clicked anywhere on screen");
	}

	var myImage=document.getElementById("fork");
	var myButton=document.getElementById("ratButton");

	myImage.onclick=function(){
		alert("you clicked an IMAGE!!");
	}
	myButton.onclick=function(){
		alert("you clicked the BUTTON :)");

	}	

	var speaker = document.getElementById("speakerIcon");
	var audio=new Audio('AC_Word Identification.mp3');

	speaker.onclick=function(){
		audio.play();
	}
}

window.onload=function(){
	prepareEventHandlers();
}
