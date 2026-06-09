window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".splash").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
    }, 500); // 2.5 seconds
});
