const numberDisplay = document.querySelector(".main-display");
// const controls = document.querySelector(".controls");
const btn = document.querySelectorAll(".btn");
const add = document.querySelector(".plus");
const subtract = document.querySelector(".minus");
const inputAmount = document.querySelector(".number");
let initialDisplay = 0;


numberDisplay.innerText = initialDisplay;

add.addEventListener('click', e => {
    initialDisplay += parseInt(inputAmount.value);
    numberDisplay.innerText = initialDisplay;
})

subtract.addEventListener('click', e => {
    initialDisplay -= parseInt(inputAmount.value);
    numberDisplay.innerText = initialDisplay;
})

add.addEventListener("mouseover", e =>{
    e.target.style.color = "#a9a9a9";
    e.target.style.backgroundColor = "#ffffff";
})
add.addEventListener("mouseout", e =>{
    e.target.style.color = "#ffffff";
    e.target.style.backgroundColor = "#a9a9a9";
})

subtract.addEventListener("mouseover", e =>{
    e.target.style.color = "#a9a9a9";
    e.target.style.backgroundColor = "#ffffff";
})
subtract.addEventListener("mouseout", e =>{
    e.target.style.color = "#ffffff";
    e.target.style.backgroundColor = "#a9a9a9";
})