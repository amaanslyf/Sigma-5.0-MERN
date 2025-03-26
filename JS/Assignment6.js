let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 5;
function largerthannum(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;

}
console.log(largerthannum(arr, num)); // [6,7,8,9,10] 


let str = "abcdabcdefgggh";
function getunique(str) {
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        let currchar = str[i];
        if (ans.indexOf(currchar) === -1) {
            ans += currchar;
        }
    }
    return ans;
}
console.log(getunique(str)); // "abcdefg"


let country = ["Australia", "Germany", "United States of America", "India", "Canada"];
function getCountry(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(getCountry(country)); // "United States of America"


let str3 = "ajghjhcnehfgkjnfgjijhnfhnfohnhyu";
function getvowels(str3) {
    let count=0;
    for(let i=0;i<str3.length;i++){
        if(str3[i]==='a' || str3[i]==='e' || str3[i]==='i' ||str3[i]==='o' ||str3[i]==='u'){
            count++;

        }
        
    }
    return count;
   
}
console.log(getvowels(str3)); 

let start=parseInt(prompt("Enter starting number of range"));
let end=parseInt(prompt("Enter ending number of range"));

function rangeNum(start , end){
    let diff=end-start+1;
    return Math.floor(Math.random()*diff)+start;
}
console.log(rangeNum(start,end));