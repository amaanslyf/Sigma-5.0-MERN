let nums=[1,2,3,4,5];
let square=nums.map(function(num){
    return num**2;
});
let sum=nums.reduce(function(acc,num){
    return acc+num;
});
console.log(square);
console.log(sum);
let avg=sum/nums.length;
console.log(avg);

[1,2,3,4,5].map((num) => num+5);


let strings=['tony','bruce','steve'];
let newstrings=strings.map((strings)=>{
    return strings.toUpperCase();
});
console.log(newstrings);

const doubleandReturnarguments=(arr,...args)=>[...arr,...args.map((el)=>el*2)];
console.log(doubleandReturnarguments([1,2,3],4,5));


const obj1={
    name:"Aman",
    age:20
};
const obj2={
    class:"10th",
    roll:1
};

const mergeobjects={
    ...obj1,
    ...obj2
};
console.log(mergeobjects);