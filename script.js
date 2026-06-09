window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".splash").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
    }, 1500); // 2.5 seconds
});
