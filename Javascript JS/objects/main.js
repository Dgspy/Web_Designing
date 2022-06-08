console.log('Hello World!');
var person = {name:"Girish",age:16,color:"bluegreen",height:156};
var x = person.name;
//var y = person["name"];
document.write(x,"<br/>");
document.write(person.name.length);
function person(name,age,color){
  this.name = name;
  this.age = age;
  this.color = color;
}
var p1 = new person("yash",16,"blue");
var p2 = new person("omkar",16,"orange");
document.write(p1.name);
var g = new person("girish",16,"blue")
document.write(g.name);

function girish(name,age){
  this.name = name;
  this.age = age;
}
var yash = new girish("yash",12);
document.write(yash,name);