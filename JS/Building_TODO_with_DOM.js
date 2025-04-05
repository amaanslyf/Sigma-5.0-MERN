let ip=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=ip.value;

    
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add('delete');
    li.appendChild(delbtn);

    ul.appendChild(li);
    ip.value="";  //to clear textbox after adding task

});

ul.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove(); //removes the li element
    }
});