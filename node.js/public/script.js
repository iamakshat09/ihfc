const btn=document.querySelector(".btn")
const content=document.querySelector(".content")

btn.addEventListener("click",function(){
    getdata();
})

async function getdata(){
    const url="http://localhost:3000/";

    const res=await fetch(url)
    const data=await res.json();
    content.textContent=data.data;
}