// slider navbar video javascript bro
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".jjks");
var moonwalker = function(i){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    contents.forEach((content)=>{
        content.classList.remove("active");
    });
    btns[i].classList.add("active");
    slides[i].classList.add("active");
    contents[i].classList.add("active");
}
// now for the sliding part of various buttons

btns.forEach((btn,j)=>{
    btn.addEventListener("click",()=>{
        moonwalker(j);
    });
});