let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr[20] = 20;
console.log(arr.length); // 21 the middle blocks or indices of arraty are emplty but they are still counted as length of array
//array methods
let arr1=["audi",'bmw','benz','volvo','jaguar'];
console.log(arr1);
arr.length; //length property is used to get the length of the array
arr1.push('toyota'); //push method is used to add an element at the end of the array
console.log(arr1);
arr1.pop(); //pop method is used to remove the last element from the array and returns it
console.log(arr1);
arr1.shift(); //shift method is used to remove the first element from the array and returns it
console.log(arr1);
arr1.unshift('bmw'); //unshift method is used to add an element at the beginning of the array
console.log(arr1);      
arr1.includes('benz'); //includes method is used to check whether the element is present in the array or not and returns true or false
console.log(arr1);
arr1.indexOf('volvo'); //indexOf method is used to get the index of the element in the array
console.log(arr1);
arr1.reverse(); //reverse method is used to reverse the order of the elements in the array
console.log(arr1);
arr1.slice(1,3); //slice method is used to get the elements between the given indices
console.log(arr1);
arr1.slice(2); //slice method is used to get the elements from the given index to the end of the array
console.log(arr1);

let primary=['red', 'blue', 'green'];
let secondary=['yellow', 'orange', 'purple'];
let colors=primary.concat(secondary); //concat method is used to combine two arrays
console.log(colors);
colors.splice(2,0,'black'); //splice method is used to add an element at the given index
console.log(colors);
colors.splice(3,1); //splice method is used to remove the element at the given index
console.log(colors);
colors.splice(2,1,'white'); //splice method is used to replace the element at the given index
console.log(colors);
colors.splice(1,2); //splice method is used to remove the elements between the given indices
console.log(colors);

//sorting in arrays
let fruits=['apple','banana','mango','orange','grapes'];
console.log(fruits);
fruits.sort(); //sort method is used to sort the elements in the array
console.log(fruits);
 let numbers=[10, 5, 20, 15, 25];
 console.log(numbers);
 numbers.sort(); //sort method is used to sort the elements in the array
 console.log(numbers);

const arr7=[1,2,3,4,5,6,7,8,9,10];
console.log(arr7);
arr7=[10,20,30,40,50,60,70,80,90,100]; //TypeError: Assignment to constant variable.

//nested arrays
let arr8=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr8);
console.log(arr8[0]);
console.log(arr8[1]);
console.log(arr8[2]);
console.log(arr8[0][0]);
console.log(arr8[0][1]);
console.log(arr8[0][2]);
