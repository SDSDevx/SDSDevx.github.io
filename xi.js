var question = $('#qname').html();
//var correctimage = document.getElementById("correct");
//var pic1 = document.getElementById("pic1");
//var pic2 = document.getElementById("pic2");
//var pic3 = document.getElementById("pic3");
//var SPname = document.getElementById("SPname");
//var Pname = document.getElementById("Pname");
//var loginButt = document.getElementById("loginButt");

$('#report').click(function() {
var output = "";
for(var key in sessionStorage) { 
    output += key+"\n";
    output += sessionStorage[key] +"\n";
    output += "\n";
}

var keyvalue = output.split(";");
var email = 'xi_zhong@live.com';
//document.write(keyvalue.length)
//for (var i = 1; i < keyvalue.length; i++) {
  for (var i = keyvalue.length - 1; i >= 0; i--) {
  document.getElementById("test").innerHTML += keyvalue[i] + "<br />";
 }
//document.write(output.split("\;"));
//for (var i=0; i<output.length; i++) {
  //document.write("<tr><td>Number " + i + " is:</td>");
  //document.write("<td>" + output[i] + "</td></tr>");
//}

});

$('#mail').click(function() {
var output = "";
for(var key in sessionStorage) { 
    output += key+"\n";
    output += sessionStorage[key] +"\n";
    output += "\n";
}

var keyvalue = output.split(";");

document.location.href = "mailto:?body=" + encodeURIComponent(keyvalue);
});

/**$('#sendmail').click(function() {
	var output = "";
for(var key in sessionStorage) { 
    output += key+"\n";
    output += sessionStorage[key]+"\n";
    output += "\n";
	
	var link = "mailto:xi_zhong@live.com"
	+ "?cc="
	+ "&subject=testing"
	+ "&body=" + output;
}); **/

//<a href='mailto:user@domain?subject=[subject here]&body=[email body here]'></a>

//<a href='javascript:sendLocalStorageByEmail(prompt("Please enter your e-mail address"))'>
   //Send Email
//</a>


/**function sendLocalStorageByEmail(recipient) {
    // create localstorage string
    var output = "";
    for(var key in sessionStorage) { 
        output += key+"\n";
        output += sessionStorage[key]+"\n";
        output += "\n";
    }

    // create temporary anchor to emulate mailto click in new tab
    var anchor = document.createElement("a");
    anchor.href = "mailto:"+recipient+"?subject=Local+Storage+Data&body="+encodeURIComponent(output);
    anchor.style.display = "none"; 
    anchor.setAttribute("target","_blank");
    anchor.appendChild(document.createTextNode(""));
    document.body.appendChild(anchor);

    if (anchor.click) {
        return anchor.click();
    }

    // some browsers (chromium/linux) have trouble with anchor.click
    var clickEv = document.createEvent("HTMLEvents");
    clickEv.initEvent("click", true, true);
    anchor.dispatchEvent(clickEv)
}**/
$('#correct').click(function(){
	sessionStorage.setItem(question, "correct" + ";");
});

$('#pic1').click(function(){
	sessionStorage.setItem(question, "incorrect" + ";");
});

$('#pic2').click(function(){
	sessionStorage.setItem(question, "incorrect" + ";");
});

$('#pic3').click(function(){
	sessionStorage.setItem(question, "incorrect" + ";");
});

$('#storage').click(function(){
	var SPname = $('#SPname');
	var Pname = $('#Pname');
	sessionStorage.setItem("SP NAME", SPname.val() + ";");
	sessionStorage.setItem("PATIENT NAME", Pname.val() + ";");
	window.location.href = 'menu.html';
});


