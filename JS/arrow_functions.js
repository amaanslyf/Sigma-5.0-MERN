const sum=(a,b)=>{
    return(a+b);
}
console.log(sum(5,7));
const hello=()=>{
    console.log("Hello");
}
hello();

const mul=(a,b)=>(
    a*b
);
console.log(mul(5,7));

const div=()=>(
    10/2
);
console.log(div());

//set timeout

console.log("hello");
setTimeout(() => {
    console.log("World");
},4000);
console.log("Bye");

let id=setInterval(() => {
    console.log("Hello");
},1000);

//clearInterval(id);   //----> to stop the interval


const student={
    name:"Aman",
    age:20,
    prop:this,

    getName: function(){
        console.log(this);  //here this keyword has the scope of object
        return this.name;
    },
    getage:()=>{
        console.log(this); //here this keyword has the scope of parent so it is undefined
        return this.age;
    }
}
console.log(student.getName());
console.log(student.getage());