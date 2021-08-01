const ham = document.querySelector(".fa-bars");
const menu = document.querySelector(".logo__menu")
ham.addEventListener("click", function(){
    if(menu.style.left === "-100%"){
        menu.style.left = "50%";
    } else{
        menu.style.left = "-100%";
    }
})
console.log('hello')

var content1 = document.getElementById("cont1")
var content2 = document.getElementById("cont2")
var content3 = document.getElementById("cont3")
var content4 = document.getElementById("cont4")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

function openFirst(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(300%)";
    content3.style.transform = "translateX(300%)";
    content4.style.transform = "translateX(300%)";
    btn1.style.color = "orange";
    btn2.style.color = "rgb(85, 88, 71)";
    btn3.style.color = "rgb(85, 88, 71)";
    btn4.style.color = "rgb(85, 88, 71)";
}
function openSecond(){
    content1.style.transform = "translateX(300%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(300%)";
    content4.style.transform = "translateX(300%)";
    btn1.style.color = "rgb(85, 88, 71)";
    btn2.style.color = "orange";
    btn3.style.color = "rgb(85, 88, 71)";
    btn4.style.color = "rgb(85, 88, 71)";
}
function openThird(){
    content1.style.transform = "translateX(300%)";
    content2.style.transform = "translateX(300%)";
    content3.style.transform = "translateX(0)";
    content4.style.transform = "translateX(300%)";
    btn1.style.color = "rgb(85, 88, 71)";
    btn2.style.color = "rgb(85, 88, 71)";
    btn3.style.color = "orange";
    btn4.style.color = "rgb(85, 88, 71)";
}
function openFourth(){
    content1.style.transform = "translateX(300%)";
    content2.style.transform = "translateX(300%)";
    content3.style.transform = "translateX(300%)";
    content4.style.transform = "translateX(0)";
    btn1.style.color = "rgb(85, 88, 71)";
    btn2.style.color = "rgb(85, 88, 71)";
    btn3.style.color = "rgb(85, 88, 71)";
    btn4.style.color = "orange";
}