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
        showBorderRadiusCode();
    })
})

btn_copyCss.addEventListener("click",copyCodeCss);
btn_reset.addEventListener("click",resetBorderRadius);
btn_reset.addEventListener("click",resetCodeCss);

function changeBorderRadius(){
    box.style.borderTopLeftRadius = topLeft.value + '%';
    box.style.borderBottomLeftRadius = bottomLeft.value + '%';
    box.style.borderTopRightRadius = topRight.value + "%";
    box.style.borderBottomRightRadius = bottomRight.value + "%";
}

function showBorderRadiusCode(){
    css_code.innerHTML = `border-radius: ${topLeft.value}% ${topRight.value}% ${bottomLeft.value}% ${bottomRight.value}%`
}

async function copyCodeCss(){
    const code = css_code.innerHTML;
    await navigator.clipboard.writeText(code);
}

function resetBorderRadius(){
    box.style.borderTopLeftRadius = 0;
    box.style.borderBottomLeftRadius = 0;
    box.style.borderTopRightRadius = 0;
    box.style.borderBottomRightRadius = 0;
}
function resetCodeCss(){
    css_code.innerHTML = "border-radius: 0% 0% 0% 0%";
}