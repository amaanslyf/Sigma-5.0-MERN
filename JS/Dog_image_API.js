let btn=document.querySelector("#getDogImage");
let url="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async()=>{
    let imgUrl=await getImg();
    let img=document.querySelector("#dogImage");
    img.setAttribute("src",imgUrl);
    console.log(imgUrl);
})



async function getImg(params) {
    try{
        let res=await axios.get(url);
        return res.data.message;
    }catch(err){
        console.log(err);
        return "Nothing Found";
    }
    
}