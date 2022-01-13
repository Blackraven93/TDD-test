import "../scss/styles.scss";
import List from "./Components/List";
import Number from "./Components/Number"
/* eslint-disable */
// value
// const totalFomulaBox = document.querySelector(".total");

// keypad
const keyPad = document.querySelector(".buttons");
const calculationInput = document.getElementById("calculation");
// btns
const btns = keyPad.querySelectorAll(".btn");


// common variables
// let totalCalculation = "";
let currentNumber = "";
let previousNumber = "";
let operator = "";
let main = new List([])

export const isIncludes = (result) => {
    const _classList = Array.from(event.target.classList);
    return _classList.includes(result)
}


export const handleBtnClick = (event) => {
  event.preventDefault();
  const keyPadValue = event.target.innerText
  if (isIncludes("number")) {


    main._list.length === 0 ? (keyPadValue !== "0" && main._push(keyPadValue)) : main._push(keyPadValue);
    
    console.log(main)
    


    // 화면에 표시해주면 끝

    
    
  } else if (isIncludes("operator")) {
    main._push(keyPadValue)
  } else if (isIncludes("backspace")) {
    main._push(keyPadValue)
  } else if (isIncludes("dot")) {
    main._push(keyPadValue)
  } else if (isIncludes("all-clear")) {
    main._push(keyPadValue)
  }
  
  
  return ;
};

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
