import "../scss/styles.scss";
import Queue from "./Components/Queue";
/* eslint-disable */
// value
// const totalFomulaBox = document.querySelector(".total");

// keypad
const keyPad = document.querySelector(".buttons");
const inputValue = document.getElementById("calculation");
// btns
const btns = keyPad.querySelectorAll(".btn");


// common variables
// let totalCalculation = "";
let currentNumber = "";
let previousNumber = "";
let operator = "";

const isIncludes = (result) => {
    const _classList = Array.from(event.target.classList);
    return _classList.includes(result)
}

const init = (btn, input) => {
    
};

const handleBtnClick = (event) => {
  event.preventDefault();
//   const _classList = Array.from(event.target.classList);
  
  if (isIncludes("number")) {
    
  } else if (isIncludes("operator")) {
    
  } else if (isIncludes("backspace")) {
    
  } else if (isIncludes("dot")) {
    
  } else if (isIncludes("all-clear")) {
    
  }
  
  return ;
};

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
