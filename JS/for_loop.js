for(let i=1;1<=5;i++){
    console.log(i);
}
for(let i=5;i>=1;i--){
    console.log(i);
}
for(let i=1;i<=15;i=i+2) {//odd numbers from 1 to 15
    console.log(i);
}
for(let i=2;i<=10;i=i+2) {//even numbers from 1 to 10
    console.log(i);
}

//Multiplication table of your choice
let n=prompt("Enter a number");
for(let i=n;i<=10;i++){
    console.log(n,"*",i,"=",n*i);
}

//nested loops
for(let i=1;i<=5;i++){
    console.log("outer loop iteration number",i);
    for(let j=1;j<=5;j++){
        console.log(j);
    }
}

//while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
//do while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);


//favMovie guessing game
const favMovie="avatar";

let guess=prompt("Guess my favourite movie");
while((guess!==favMovie)&&(guess!=="exit")){
    guess=prompt("Wrong! Guess again");
}
if(guess===favMovie){
    console.log("You guessed it right!");
}
else if(guess==="exit"){
    console.log("You exited the game")
}

//break statement
let x=1;
while(x<=5){
    console.log(i);
    if(x===3){
        break;
    }
    x++;
}

//loops with arrays
const colors=["red","blue","green","yellow"];
for(let i=0;i<colors.length;i++){
    console.log(i,colors[i]);
}

//loops with nested arrays
let heroes=[
    ["batman","superman","wonderwoman"],
    ["ironman","thor","captain america"],
    ["hulk","black widow","spiderman"]
];
for(let i=0;i<heroes.length;i++){
    console.log(`List ${i+1}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

//for of loops
const fruits=["apple","banana","mango"];
for(let fruit of fruits){
    console.log(fruit);
}
for(char of "hello"){
    console.log(char);
}

//nested for of loops
const heroes1=[
    ["batman","superman","wonderwoman"],
    ["ironman","thor","captain america"],
    ["hulk","black widow","spiderman"]
];
for(let List of heroes1){
    for(let hero of List){
        console.log(hero);
    }
}