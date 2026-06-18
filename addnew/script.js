let comment = document.querySelector("#comment-text");
let post = document.querySelector("#post-comment");
let commentsPage = document.querySelector(".comments-container");
let named = "";
let userInfo = document.querySelector(".user-info");
comment.addEventListener('click',()=>{
    // named = prompt("Enter your name");
})





let now = new Date();
let day = now.getDate();
let month = now.toLocaleString('default', {month:'short'});
let year = now.getFullYear();
let hours = now.getHours();
let min = String(now.getMinutes()).padStart(2,'0');
let timestamp = `${day} ${month} ${year}, ${hours}:${min}`;
let text = comment.value;



let pfps = [
       "1014998834771516002.jpeg", "961518589165967786.jpeg", "928586016891806501.jpeg", "873698396436075757.jpeg", "1055531231391791336.jpeg", "931893347869292581.jpeg", "1093248878268057742.jpeg", "1074530792316165441.jpeg", "991988255420649750.jpeg", "631559547765099742.jpeg", "998814023587573529.jpeg", "download (2).jpeg", "1020769071765163152.jpeg" 
]


post.addEventListener('click',()=>{
    let randpfp = pfps[Math.floor(Math.random()*pfps.length)];
    let text = comment.value;
    let userid = Math.floor(Math.random()*100);
    named = prompt("Enter your name");
    if(named==""){
        named = "User" + userid;
    }
    console.log(text);
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = 
    `<img src="../static/pfps/${randpfp}" alt="">

    <div class="comment-body">
    <p>
    <span class="username">${named}</span>
    <span class="review">${text}</span>
    </p>
    
    <div class="comment-meta">
    <span>${timestamp}</span>
    <span>1 like</span>
    <span>Reply</span>
    <span class="delete">Delete</span>
    </div>
    </div>`;
    
    let commentData = {
        id: Date.now(),
        name: named,
        text: text,
        timestamp: timestamp,
        pfp: randpfp
    }
    commentDiv.dataset.id = commentData.id;
    console.log(commentData);
    let comments = JSON.parse(localStorage.getItem("comments"))||[];
    comments.push(commentData);
    localStorage.setItem("comments",JSON.stringify(comments));
    commentsPage.appendChild(commentDiv);
    comment.value = "";
    
})

function loadComments(){
    let comments =  JSON.parse(localStorage.getItem("comments"))||[];
    comments.forEach(comment => {
    // let text = comment.value;
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.dataset.id = comment.id;
    commentDiv.innerHTML = 
    `<img src="../static/pfps/${comment.pfp}" alt="">

    <div class="comment-body">
    <p>
    <span class="username">${comment.name}</span>
    <span class="review">${comment.text}</span>
    </p>
    
    <div class="comment-meta">
    <span>${comment.timestamp}</span>
    <span>1 like</span>
    <span>Reply</span>
    <span class="delete">Delete</span>
    </div>
    </div>`;
        commentsPage.appendChild(commentDiv);
    });
}

commentsPage.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        let commentDiv = e.target.closest(".comment");
        let id = Number(commentDiv.dataset.id);
        let comments =  JSON.parse(localStorage.getItem("comments"))||[];
        comments = comments.filter(comment => comment.id !==id);
        localStorage.setItem("comments", JSON.stringify(comments));
        commentDiv.remove();
    }
})


let follow = document.querySelector(".follow");
follow.addEventListener("click",()=>{
    let following = document.createElement("span");
    following.classList.add("following");
    following.innerHTML = `• Following`;
    userInfo.appendChild(following);
    userInfo.removeChild(follow);

})
loadComments();