console.log('Hello World!');
/*
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "hii girish"
}
*/
var a = document.getElementById("demo");
var arr = a.childNodes;
for(var x = 0;x < arr.length;x++){
  arr[x].innerHTML = "new text"
}

var x = document.getElementById("gi");
x.style.color = "red";
x.style.width = "100px";
x.style.backgroundColor = "cyan";

//var node = document.createTextNodes("text node");
var p =document.createElement("p");
var node = document.createTextNode("some new text");
p.appendChild(node);
var div = document.getElementById("next");
div.appendChild(p);

var parent = document.getElementById("r");
var child = document.getElementById("p1");
parent.removeChild(child);

var p = document.createElement("p");
var node = document.createTextNode("this is new");
p.appendChild(p,node);
var parent = document.getElementById("gmu");
var child = document.getElementById("gg");
parent.replaceChild(p,child);