// function myFunction(){
//     console.log("you are welcome");
// }
// var button=document.querySelector("button");
// button.addEventListener("mouseenter", function(){
//     console.log("JavaScript")
// })
//EventListener
// var button=document.querySelector("button");
// button.addEventListener("click", myFunction);
// function myFunction(){
//     var listItem=document.getElementsByClassName("list-item");
// console.log(listItem);
// for (i=0; i<listItem.length; i++){
//     listItem[i].style.backgroundColor="orange";
//     listItem[i].style.margin="3px";
//     listItem[i].innerHTML="borocoli";
// };
// }
//Event Parameters
// var button=document.querySelector("button");
// button.addEventListener("click", myFunction);
// function myFunction(event){
//     console.log(event);

// }
// var h1=document.createElement("h1");
// var text=document.createTextNode("This is new heading");
// h1.appendChild(text);
// console.log(h1);
// h1.id="title"
// var body=document.querySelector("body");
// body.appendChild(h1);
// var button=document.querySelector("button");
// button.addEventListener("click", myFunction);
// function myFunction(e){
//     var title=document.getElementById('title');
//     title.innerHTML=e.clientX;
//     console.log(e.clientX);
// }
// var newElement=document.getElementById("newElement");
// newElement.addEventListener("mouseleave", myFunction);
// function myFunction(e){
//     var body=document.querySelector("body");
//     body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",23)";
//     console.log(e.offsetY);
//     console.log(e.offsetY);
// }
//input event
// var input=document.querySelector('input [type="email"]');
// console.log(input);
// input.addEventListener("keydown", myFunction);
// function myFunction(e){
//     console.log(e.type);
// }
var select=document.querySelector("select");
select.addEventListener("change", myFunction);
function myFunction(e){
console.log(e.type);
}