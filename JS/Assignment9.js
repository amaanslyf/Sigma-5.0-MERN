let btn=document.createElement('button');
let ip=document.createElement('input');

btn.innerText="Click me!";
document.querySelector('body').append(btn);
document.querySelector('body').append(ip);

btn.setAttribute('id','button');
ip.setAttribute('placeholder','username');

btn.classList.add('#button');

let h1=document.createElement('h1');
h1.innerText="DOM practice";
document.querySelector('body').append(h1);
h1.classList.add('h1');

let p=document.createElement('p');
p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p);

