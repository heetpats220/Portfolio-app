const more = document.querySelector(".mute-btn");
const info = document.querySelector(".bottom-info");
const details = document.querySelector(".details");
const down = document.querySelector(".down");
const follow = document.querySelector(".follow-btn");
let moreinfo = false;
more.addEventListener('click',()=>{
    moreinfo = !moreinfo;
    if(!moreinfo){
        info.classList.remove("top");
        details.style.display = "none";
        // moreinfo = true;
        down.innerHTML = "More";
        console.log("less");
        info.classList.remove("expanded");
        
    }
    else{
        // info.style.top = "120px";
        info.classList.add("top");
        details.style.display = "block";
        down.innerHTML = "Less";
        console.log("more");
        info.classList.add("expanded");
        
    }
})
follow.addEventListener('click',()=>{
    follow.innerHTML = "Following";
})
