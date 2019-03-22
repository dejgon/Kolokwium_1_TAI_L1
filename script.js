let box = document.querySelector('.box');

let button = document.querySelector('.button');

button.addEventListener('click', changeColor);

function changeColor(){
    box.style.backgroundColor = "red";
    console.log("clicked");
}