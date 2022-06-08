console.log('Hello World!');
/*document.body.innerHTML = "<i>welcome to html</i>"
document.getElementById(id)
document.getElementsByClassName(name)
document.getElementsByTagName(name)
*/
var e = document.getElementById("girish");
e.innerHTML = "hello world";
var arr = document.getElementsByClassName("girish");
arr[1].innerHTML = "Hiiiiiiiiiiiiiiii";
var arr = document.getElementsByClassName("demo");
arr[1].innerHTML = "hiii"

var arr = document.getElementsByTagName("p");
for (var x = 0;x<arr.length;x++) {
  arr[x].innerHTML = "hii girish"
}