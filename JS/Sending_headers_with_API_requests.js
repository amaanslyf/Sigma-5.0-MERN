const config={header:{Accept:'application/json'}};
const url='https://api.example.com/data';

let res=await axios.get(url,config);
console.log(res.data);