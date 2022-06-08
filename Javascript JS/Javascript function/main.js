console.log('Hello World!');
function myfun(){
  document.write("<h1><i>javascript function</i></h1>")
}
myfun()
//function parameter
function hello(name){
  document.write("<i>hello</i>, " + name,"<br/>");
}
hello("Girish");
hello("yash");
hello("onkar");
//multiple parameters
function add(x,y){
  document.write('addition of::',x + y,"<br/>");
}
add(3,5);
add(143,15);
function patient(name,age,roll_no){
  document.write(name+' is '+age+'year old & '+'his roll_no is=  '+roll_no,"<br/>");
}
patient("girish",16,68);
patient("yash",17,1);
document.write("<br/>");
//return statement
function addition(x,y){
  return x + y;
}
var a = addition(143,143);
document.write("sum of two product = ",a,"<br/>");
function multiply(a,b){
  var g = a*b;
  return g;
}
g = multiply(143,143);
document.write("multiplication of two product = ",g,"<br/>");
//alert
alert("hii\n i'am a alert box");
//prompt
var user = prompt("please enter your userID : ");
alert(user);
//confirm
var result = confirm("do you really want a leave this page");
if(result == true){
  alert("thanks for visiting");
}
else{
  alert("thank for stay withus")
}

