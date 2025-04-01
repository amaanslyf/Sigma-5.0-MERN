
const arrayaverage=(arr)=>{
    let total=0;
    for(let i=0;i<arr.length;i++){
        total=total+arr[i];
    }
    return total/arr.length;
}
let arr=[1,2,3,4,5];
console.log(arrayaverage(arr));


const iseven=(num)=>{
    if (num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
let num=2;
iseven(num);