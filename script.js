







//   drag and drop 

let f = document.querySelector(".f");
let initXdir;
let initYdir;
let newXdir;
let newYdir;



let btn=document.querySelector(".create");
btn.addEventListener("click",()=>{
   

    
    //   card 
    let  div = document.createElement("div");
   div.classList.add("f");
   document.body.appendChild(div);
  
   

   //    close btn 
   let  close = document.createElement("div");
   div.appendChild(close);
   close.classList.add("close","fa-solid","fa-xmark");
  
})

   
        // mousedown 
   document.body.addEventListener("mousedown", function(e){
          if(e.target.classList.contains("f")){        
            let div=e.target;
        initXdir= e.clientX;
        initYdir= e.clientY;

        //  mousemove
 function mouseMove(e){
    newXdir=initXdir-e.clientX;
    newYdir=initYdir-e.clientY;
    
    initXdir=e.clientX
    initYdir=e.clientY

    div.style.top=(div.offsetTop-newYdir)+"px"; 
    div.style.left=(div.offsetLeft-newXdir)+"px"; 

}


//    mouseup 
function mouseUp(){
document.removeEventListener("mousemove",mouseMove);
}

document.addEventListener("mouseup",mouseUp);
document.addEventListener("mousemove",mouseMove);
 }
});


     
   document.body.addEventListener("click",function(e){
     if(e.target.classList.contains("close")){
            e.target.parentElement.remove();
     }
   })
    