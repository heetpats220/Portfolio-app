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

// let down = document.getElementById("down");
// down.addEventListener('click', () => {
//    let confirmation = confirm("Do you want to download CV?")

//    if(confirmation){
//     let pdf = document.createElement("a");
//     console.log(pdf)
//     pdf.href = "../static/Heet Patidar - resume (2).pdf"
//     console.log(pdf)
//     pdf.download = "Heet Patidar.pdf";
//     pdf.click();
//    }
   
// });
