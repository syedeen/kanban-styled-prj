







//   drag and drop 

let f = document.querySelector(".f");
let initXdir;
let initYdir;
let newXdir;
let newYdir;



let btn=document.querySelector(".create");
btn.addEventListener("click",()=>{
    let  div = document.createElement("div");
   div.classList.add("f");
   document.body.appendChild(div);


   div.addEventListener("mousedown", function(e){

    
        initXdir= e.clientX;
        initYdir= e.clientY;


function mouseMove(e){
    newXdir=initXdir-e.clientX;
    newYdir=initYdir-e.clientY;
    
    initXdir=e.clientX
    initYdir=e.clientY

    div.style.top=(div.offsetTop-newYdir)+"px"; 
    div.style.left=(div.offsetLeft-newXdir)+"px"; 

}

function mouseUp(){
document.removeEventListener("mousemove",mouseMove);
}

document.addEventListener("mouseup",mouseUp);
document.addEventListener("mousemove",mouseMove);
});
})

