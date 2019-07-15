const numberDisplay = document.querySelector(".main-display");
const btn = document.querySelectorAll(".btn");
const inputAmount = document.querySelector(".number");
let initialDisplay = 0;


numberDisplay.innerText = initialDisplay;

btn[0].addEventListener('click', e => {
    initialDisplay += parseInt(inputAmount.value);
    checkForZero();
    numberDisplay.innerText = initialDisplay;
})

btn[1].addEventListener('click', e => {
    initialDisplay -= parseInt(inputAmount.value);
    checkForZero();
    numberDisplay.innerText = initialDisplay;
})

const checkForZero = () => {
    if (initialDisplay < 0){
        numberDisplay.style.color = "red";
    } else {
        numberDisplay.style.color = "black";
    }
}

const hoverListener = (node, e) => {
    for (let i = 0; i < node.length; i ++){
        node[i].addEventListener("mouseover", e =>{
            e.target.style.color = "#a9a9a9";
            e.target.style.backgroundColor = "#ffffff";
        })
        node[i].addEventListener("mouseout", e =>{
            e.target.style.color = "#ffffff";
            e.target.style.backgroundColor = "#a9a9a9";
        })
    }
}

hoverListener(btn);