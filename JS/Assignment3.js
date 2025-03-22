 let arr=[1,2,3,4,5,6,2,3];
 let num=2;
 for(let i=0;i<arr.length;i++){
     if (arr[i]===num){
         arr.splice(i,1);    
     }
    }
    console.log(arr);
// Output: [1,3,4,5,6,3]
   
//No. of digits in a number
let num1=287152;

let count=0;
while(num1>0){
    num1=num1/10;
    num1=parseInt(num1);  //as javascript takes into account only decimals too we converted it into integer
    count++;
}
console.log(count);
// Output: 6

//Sum of digits in a number
let num2=287152;
let sum=0;
while(num2>0){
    sum=sum+num2%10;
    num2=num2/10;
    num2=parseInt(num2);
}
console.log(sum);
// Output: 25


//factorial of number
let num3=prompt("Enter a number");
let fact=1;
for(let i=1;i<=num3;i++){
    fact*=i;
}
console.log(fact);
 

//largest number in array
let arr2=[5,1,3,7,9,2,8,4,6];
let largest=0;
for(let i=0;i<arr2.length;i++){
    if (arr2[i]>largest){
        largest=arr2[i];
    }
}
console.log(largest);
        