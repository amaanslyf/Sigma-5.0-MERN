//forEach array method
let arr=[1,2,3,4,5,6];
arr.forEach(function(el){
    console.log(el)
});

//map array method
let arr1=[1,2,3,4,5,6];
let double=arr1.map(function(el){   //returns mew array of same size
    return el*el;
    
})
console.log(double);

//filter array method
let arr2=[1,2,3,4,5,6];
let even=arr2.filter(function(el){  //returns new array containing only even elements
    return el%2==0;
})
console.log(even);

//reduce array method
let arr3=[1,2,3,4,5,6];
let sum=arr3.reduce(function(acc,el){
    return acc+el;
})
console.log(sum);

//maximum in array using reduce method
let arr4=[1,2,3,4,5,6];
let max=arr4.reduce(function(acc,el){
    if(acc>el){
        return acc;
    }
    else{
        return el;
    }
})
console.log(max);

//minimum in array using reduce method
let arr5=[1,2,3,4,5,6];
let min=arr5.reduce(function(acc,el){
    if(acc<el){
        return acc;
    }
    else{
        return el;
    }
})
console.log(min);

//spread
let arr6=[1,2,3,4,5,6];
console.log(...arr6);

let even11=[2,4,6,8,10];
let odd1=[1,3,5,7,9];
console.log(...even1,...odd1);

let data={
    email:'aman',
    password:'abcd'
};
let datacopy={
    ...data,id:123
};
console.log(datacopy);

//rest
let arr7=[1,2,3,4,5,6];
console.log(...arr7); 

//destructuring
let arr8=['tony','steve','bruce','peter'];
let [a,b,c,d]=arr8;
console.log(a,b,c,d);


const student={
    name:'aman',
    age:20,
    marks:90,
    id:'aman123',
    password:'abcd'
};

let {id:id1,password:secret}=student;
console.log(id1,secret);