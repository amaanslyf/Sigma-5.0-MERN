function poem() {
    console.log("Twinkle, twinkle, little star,\nhow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.");
}
poem();

function rolldice() {
    return Math.floor(Math.random() * 6) + 1;
}
for (let i = 0; i <= 5; i++) {
    console.log(rolldice());
}

function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(average(2, 4, 6));
console.log(average(10, 20, 30));


function multiplication(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${a} x ${i} = ${a * i}`);
    }
}
let a = prompt("Enter a number to generate multiplication table");
multiplication(a);

function sumofnums() {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
    }
    return sum;

}
console.log(sumofnums());

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * 1;
    }
    return fact;

}
console.log(factorial(5));

function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonacci(10));


let str = ['hello', 'world', 'how', 'are', 'you'];
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;

}
console.log(concat("Hello"));


//Scope global and function scope

let x = 10; //global scope

function scope() {
    let b = 20; //local scope or function scope
    console.log(b);
}
scope();
console.log(x);

//block scope

if (true) {
    let a = 10;
    console.log(a);
}
console.log(a); // a is not defined here because it is in block scope and it is not accessible outside the block

//lexical scope

function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();


//function expression

let sum = function (a, b) {
    return a + b;
}
console.log(sum(2, 3));


//higher order fumctions\
function multiplegreet(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}
let greet = function () {
    console.log("Hello");
}
multiplegreet(greet, 5);


//methods
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }

};
console.log(calculator.add(12, 3));
console.log(calculator.subtract(12, 3));
console.log(calculator.multiply1(2, 3));
console.log(calculator.divide(12, 3));

//another wayn to write methods without using function keyword

const calculator1 = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
};

console.log(calculator1.add(12, 3));
console.log(calculator1.subtract(12, 3));
console.log(calculator1.multiply(2, 3));
console.log(calculator1.divide(12, 3));
