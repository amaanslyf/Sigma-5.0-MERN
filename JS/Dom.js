let para1 = document.createElement("p");
para1.innerText = "Hey, I am red!";
document.querySelector('body').append(para1);
para1.classList.add('red');


let h3 = document.createElement("h3");
h3.innerText = "Hey, I am blue h3!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('para2');

h1.innerText = 'i am in a div';
div.append(h1);

para2.innerText = 'ME TOO!';
div.append(para2);

div.classList.add('div');
document.querySelector('body').append(div);
