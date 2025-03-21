let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.slice(0,3)); // [1,2,3]
console.log(arr.slice(arr.length-3)); // [8,9,10]

let str='';
if(str.length==0){
    console.log('String is empty');
}else{
    console.log('String is not empty');
}

let str1='aMaNSHaikH';
let idx=prompt('Enter the index to check the character');
if(idx<0 || idx>=str1.length){
    console.log('Invalid index');
}else{
    if (str1[idx]===str1[idx].toLowerCase()) {
        console.log('Character is lowercase');
    }else{
        console.log('Character is uppercase');
    }
}

let str2='    aMaNSHaikH     ';
console.log(`Original String${str2}`);
console.log(`After removing whitespaces: ${str2.trim()}`);

let arr2=['hello', 64, 'world', 81, 'java', 100];
console.log(arr2);
let item= prompt('Enter the item to find');
if(arr2.indexOf(item)!=-1){
    console.log('Item not found');
}else{
    console.log('Item found');
}