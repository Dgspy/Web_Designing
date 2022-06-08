console.log('Hello World!');
//for loop
for (i=1;i<=5;i++){
  document.write(i+"<br/>")
}
document.write("<br/>")
var i = 1;
for(;i<=3;i++){
  document.write(i+"<br/>");
}
for(i=1,text="";i<=5;i++){
  text = i;
  document.write(i+"<br/>");
}

var i = 1;
for(;i<10;){
  document.write(i);
  i++;
}
//while loop
var i = 0;
while(i<=10){
  document.write(i+"<br/>");
  i++
}
document.write("<br/>")
// do while loop
var i = 20;
do{
  document.write(i + "<br/>");
  i++;
}
while(i<=25);
//break statement
for (i = 0;i <= 10;i++){
  if(i == 5){
    break;
  }
  document.write(i+"<br/>")
}
// continue statement
for (i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  document.write(i + "<br/>")
}
var x = 0;
while(x < 6){
  x++;
}
document.write(x);