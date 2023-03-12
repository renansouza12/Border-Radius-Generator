const topLeft = document.querySelector("#topLeft");
const bottomLeft = document.querySelector("#bottomLeft");
const topRight = document.querySelector("#topRight");
const bottomRight = document.querySelector("#bottomRight");
const box = document.querySelector(".box");
const sliders = document.querySelectorAll(".slider");
const css_code = document.querySelector(".css-code");
const btn_copyCss = document.querySelector("#copy-css");
const btn_reset = document.querySelector("#reset");

sliders.forEach((slider)=>{
    slider.addEventListener("input",()=>{
        changeBorderRadius();
    })
})

function changeBorderRadius(){
    box.style.borderTopLeftRadius = topLeft.value + '%';
    box.style.borderBottomLeftRadius = bottomLeft.value + '%';
    box.style.borderTopRightRadius = topRight.value + "%";
    box.style.borderBottomRightRadius = bottomRight.value + "%";
 
}