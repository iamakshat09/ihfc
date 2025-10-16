const status1=document.querySelector("#carstatus")
const btn=document.querySelector("#btn")

btn.addEventListener("click",function(){
    status1.textContent="Car is on";
    status1.style.backgroundColor="blue";
})