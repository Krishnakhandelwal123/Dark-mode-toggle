const inputel=document.querySelector(".input");
const bodyel=document.querySelector("body");
inputel.checked=JSON.parse(localStorage.getItem("mode"));
updatebody();
function updatebody(){
if(inputel.checked){
bodyel.style.backgroundColor="black";
}
else{
    bodyel.style.backgroundColor="white"; 
}
}
inputel.addEventListener("input",()=>{
    updatebody();
    updatelocal();
})

function updatelocal(){
    localStorage.setItem("mode",JSON.stringify(inputel.checked))
}