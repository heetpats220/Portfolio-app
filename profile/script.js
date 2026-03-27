

let cv_btn = document.querySelector("#cv_btn");
let share_pro = document.querySelector("#share_pro");
let email = document.querySelector("#email");
let pic = document.querySelector(".profile-pic");
let email_txt = document.querySelector("#email").innerHTML;
let phone = document.querySelector("#phone");
let phone_num = document.querySelector("#phone").innerHTML;


cv_btn.addEventListener('click', () => {
   let confirmation = confirm("Do you want to download CV?")

   if(confirmation){
    let pdf = document.createElement("a");
    console.log(pdf)
    pdf.href = "../static/Heet Patidar - resume (2).pdf"
    console.log(pdf)
    pdf.download = "Heet Patidar.pdf";
    pdf.click();
   }
   
});

share_pro.addEventListener('click', ()=>{
    let link = "https://www.instagram.com/heetpat_69/";

    copied = navigator.clipboard.writeText(link);
    if(copied){
        alert("Link copied")
    }
    
})

email.addEventListener('click', ()=>{
    navigator.clipboard.writeText(email_txt);
    alert("Email id copied")
    console.log(email_txt)

})

phone.addEventListener('click', ()=>{
    navigator.clipboard.writeText(phone_num);
    alert("Phone number copied")
    console.log(phone_num)
})

let tabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", function(){
        let constid = this.getAttribute("data-tab");
        // console.log(constid)
        tabs.forEach(t => t.classList.remove('active'));
        
        tab.classList.add("active")
        console.log(tabs)

        content.forEach(c=> c.classList.remove("active"))
        document.getElementById(constid).classList.add("active")


    })
});
