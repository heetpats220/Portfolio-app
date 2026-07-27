const chat = document.querySelectorAll(".chat");
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

chat.forEach(post=>{
    observer.observe(post);
});
