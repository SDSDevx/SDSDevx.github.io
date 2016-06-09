var question = $('#qname').html();



var mcVM_options={menuId:"menu-v",alignWithMainMenu:true};
init_v_menu(mcVM_options);function init_v_menu(a){if(window.addEventListener)window.addEventListener("load",function(){start_v_menu(a)},false);else window.attachEvent&&window.attachEvent("onload",function(){start_v_menu(a)})}function start_v_menu(i){var e=document.getElementById(i.menuId),j=e.offsetHeight,b=e.getElementsByTagName("ul"),g=/msie|MSIE 6/.test(navigator.userAgent);if(g)for(var h=e.getElementsByTagName("li"),a=0,l=h.length;a<l;a++){h[a].onmouseover=function(){this.className="onhover"};h[a].onmouseout=function(){this.className=""}}for(var k=function(a,b){if(a.id==i.menuId)return b;else{b+=a.offsetTop;return k(a.parentNode.parentNode,b)}},a=0;a<b.length;a++){var c=b[a].parentNode;c.getElementsByTagName("a")[0].className+=" arrow";b[a].style.left=c.offsetWidth+"px";b[a].style.top=c.offsetTop+"px";if(i.alignWithMainMenu){var d=k(c.parentNode,0);if(b[a].offsetTop+b[a].offsetHeight+d>j){var f;if(b[a].offsetHeight>j)f=-d;else f=j-b[a].offsetHeight-d;b[a].style.top=f+"px"}}c.onmouseover=function(){if(g)this.className="onhover";var a=this.getElementsByTagName("ul")[0];if(a){a.style.visibility="visible";a.style.display="block"}};c.onmouseout=function(){if(g)this.className="";this.getElementsByTagName("ul")[0].style.visibility="hidden";this.getElementsByTagName("ul")[0].style.display="none"}}for(var a=b.length-1;a>-1;a--)b[a].style.display="none"}


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


