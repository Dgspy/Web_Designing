function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}
var p1 = new person("yash", 16, "blue");
var p2 = new person("omkar", 16, "orange");
document.write(p1.name);
var g = new person("girish", 16, "blue")
document.write(g.name);

function girish(name, age) {
  this.name = name;
  this.age = age;
}
var yash = new girish("yash", 12);
document.write(yash, name)
// objects
document.write("<br/>")
var girish = {name:"girish",age:16};
var yash = {name:"yash",age:17};
document.write(girish.name,"\n");
document.write(yash.name);
document.write("<br/>")
function boy(name,_class){
  this.name = name;
  this._class = _class;
  this.changeName = function(name){
    this.name = name;
  }
}
var p = new boy("girish",11);
document.write("before changing name : ",p.name,"<br/>");
p.changeName("yash");
document.write("after changing name : ",p.name);
 document.write("<br/>")
function boss(name,age){
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornyear;
}
function bornyear(){
  return 2005 - this.age;
}
var p = new boss("girish",16);
document.write(p.yearOfBirth)