console.log('Hello World!');
var t = setInterval(move,500);
var pos = 0;
var box = document.getElementById("box");
function move() {
  pos += 1;
  box.style.left = pos+"px";
}

var t = setInterval(move,10);
function move(){
  if(pos >= 150){
    clearInterval(t);
  }
  else{
    pos += 1;
    box.style.left = pos+"px";
  }
}


var pos = 0;
var box = document.getElementById("box");
var t = setInterval(move,10);
function move(){
  if(pos >= 150){
    clearInterval(t);
  }
  else{
    pos += 1;
    box.style.left = pos+"px"
  }
}

function show(){
  alert("click once")
}

var x = document.getElementById("giri");
x.onclick = function(){
  document.body.innerHtml = new Date();
}

window.onload = function(){
  //some code
}

function change(){
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}

var bt = document.getElementById("demo");
bt.addEventListener("click",myFunction);
function myFunction(){
  alert(Math.random());
  bt.addEventListener("click",myFunction);
}



var image = [
  "new.jpg",
  "old.png",
  "hii.png"
  ];
  var num = 0;
  function next(){
    var slider = document.getElementById("slider");
    num++;
    if(num<image.length){
      num = 0;
    }
    slider.src=image[num];
  }
  function prev(){
    var slider = document.getElementById("slider");
    num--;
    if(num < 0){
      num = image.length-1;
    }
    slider.src = image[num];
  }
  
  
function validate(){
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if(n1.value != "" && n2.value != ""){
    return true;
  }
  alert("the value should be equal and not blank");
  return false;
}