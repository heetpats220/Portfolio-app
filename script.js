window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".splash").style.display = "none";
        document.querySelector(".main-content").style.display = "flex";
    }, 500);
});

const stories = document.querySelectorAll(".story");
const viewer = document.getElementById("storyViewer");
const frame = document.getElementById("storyFrame");

stories.forEach(story => {

    story.addEventListener("click", () => {
        frame.src = story.dataset.story;

        viewer.classList.add("active");

    });

});

document.getElementById("back").onclick = ()=>{
    viewer.classList.remove("active");
};

const posts = document.querySelectorAll(".post");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

posts.forEach(post=>{
    observer.observe(post);
});

const mode = document.querySelector(".edit");
const layout_main = document.querySelector(".layout_main");
const header = document.querySelector(".header");
const splash = document.querySelector(".splash");
// let dark = true;
function toggleTheme(){
    if(!dark){
    mode.innerHTML = `<img src="./static/svgviewer-output (14).svg" alt="">`;
    console.log(dark);
    layout_main.classList.add("light");
    posts.forEach(post=>{
        post.classList.add("post-light");
    })
    header.style.borderWidth = "0px";
    header.style.color = "#962fbf";
    // console.log(splash.innerHTML);
    splash.innerHTML = `<img src="static/instagram (1).png" alt="">`

    }
    else{
    mode.innerHTML = `<img src="./static/svgviewer-output (13).svg" alt="">`;
    console.log(dark);
    layout_main.classList.remove("light");
    posts.forEach(post=>{
        post.classList.remove("post-light");
    })
    header.style.borderWidth = "1px";
    header.style.color = "White";
    splash.innerHTML = `<img src="static/downloadlogoinsta.png" alt="">`

    }
}
let dark = localStorage.getItem("theme") === "dark";
toggleTheme();
mode.addEventListener('click',()=>{
    dark = !dark;
    localStorage.setItem("theme", dark ? "dark" : "light");
  
    toggleTheme();


});