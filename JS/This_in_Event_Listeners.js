let btn=document.querySelector('button');
let h1=document.querySelector('h1');
let p=document.querySelector('p');

function changeColor(){
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);