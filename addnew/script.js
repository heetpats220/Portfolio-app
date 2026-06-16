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
post.addEventListener('click',()=>{
    let text = comment.value;
    named = prompt("Enter your name");
    console.log(text);
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = 
    `<img src="progile.jpg" alt="">

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
        timestamp: timestamp
    }
    commentDiv.dataset.id = commentData.id;
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
    commentDiv.dataset.id = commentData.id;
    commentDiv.innerHTML = 
    `<img src="progile.jpg" alt="">

    <div class="comment-body">
    <p>
    <span class="username">${comment.named}</span>
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