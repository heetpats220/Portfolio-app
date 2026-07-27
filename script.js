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
