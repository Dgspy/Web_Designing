console.log('Hello World!');
var courses = new Array("HTML","CSS","JS");
var course = courses[0];
document.write(courses,"<br/>");
courses[1] = "Python";
document.write(course,"<br/>");
document.write(courses,"<br/>");
document.write(courses[10],"<br/>");

var boys = new Array();
boys[0] = "Girish"
boys[1] = "Sarvesh"
boys[2] = "Yash"
boys[3] = "Onkar"
document.write(boys,"<br/>");
document.write("length of boys array : ",boys.length,"<br/>");

var a = new Array(1,2,3,4,5);
var b = new Array(6,7,8,9,10);
var c = a.concat(b);
document.write(c,"<br/>");

var media = [];
media.name = "facebook";
document.write(media.name,"<br/>")
var media2 = [];
media2.name = "instagram";
document.write(media2.name,"<br/>");

//math object
document.write(Math.PI,"<br/>");
var a = Math.sqrt(4);
document.write(a,"<br/>")

var n = prompt("enter your value : ");
var answer = Math.sqrt(n);
alert("the square root of "+ n + "is " + answer);

function myfun(){
  alert("hii");
}
setInterval(myfun,30000);

var d = new Date();
document.write(d,"<br/>");
/*
new Date(millisecond);
new Date(dataString)
var c = new Date(year,month,day,hours,minutes,seconds,milliseconds)*/
var date = new Date();
var hours = date.getHours();
function PrintTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours +":"+mins+":"+secs;
}
setInterval(PrintTime,1000);