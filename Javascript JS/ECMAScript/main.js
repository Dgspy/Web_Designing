console.log('Hello World!');
/*
var p = 10;
const b = "hello";
let c = true;

if (true){
  let name = "girish";
}
document.write(name);

//var & let
function varTest(){
  var x = 1;
  if (true){
    var x = 2;
    document.write(x,"<b/>");
  }
  document.write(x,"<b/>");
}
function lettext(){
  let a = 1;
  if(true){
    let a = 2;
    document.write(a);
  }
  document.write(a);
}

const a = "hello";
a = "byte";

let name = "girish";
let msg = "welcome" + name+ "!";

let name = "girish";
let msg = 'welcome ${name}!';
document.write(msg);
let m = 8;
let f = 34;
let msg = 'the sum is  ${m+f}';
*/

let arr = [1,2,3,4];
for (let k = 0;k < arr.length;k++){
  document.write(arr[k],"\n");
}

let obj = {a:1,b:2,c:3,d:4};
for (let v in obj){
  document.write(v,"\n");
}

let list = ["x","y","z"];
for (let i of list){
  document.write(i,"\n");
}

for (let i of "hello"){
  document.write(i);
}

document.write("<br/>")
//javascript function
function add(x,y){
  var sum = x + y;
  document.write(sum,"<br/>");
}
add(23,34);

const ad = (x,y) => {
  let sum = x + y;
  document.write(sum,"<br/>");
}
ad(143,143)

//const great = x => "hello" + x;
//const x = () => alert("hi");
/*
var ar = [2,3,4,5];
ar.foreach(function(i){
  document.write(i * 2);
});
*/

function test(a,b = 3,c = 42){
  return a + b + c;
}
document.write(test(23),"<br/>");
//arrow function
const text = (a,b = 143,c = 15) => {
  return a + b + c;
}
document.write(test(143),"<br/>");

let tree = {
  height:10,
  color:"green",
  grow() {
    this.height += 2;
  }
};
tree.grow();
document.write(tree.height);