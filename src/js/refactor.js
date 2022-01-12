import "../scss/styles.scss";
import Calculate from "./Components/Calculate";
import Number from "./Components/Number";
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
let calculate = new Calculate([]);
let number = new Number(calculate.contextList);
export const isIncludes = (result) => {
  const _classList = Array.from(event.target.classList);
  return _classList.includes(result);
};

export const handleBtnClick = (event) => {
  event.preventDefault();

  const keyPadValue = event.target.innerText;
  if (isIncludes("number")) {
    if (number.numberList.length === 0 && calculationInput.value === "0") {
      if (keyPadValue !== "0") {
        number.numberList = keyPadValue;
        calculationInput.value = number.numberList;
      }
    } else {
      number.numberList += `${keyPadValue}`;
      calculationInput.value = number.numberList;
    }
    // 화면에 표시해주면 끝
  } else if (isIncludes("operator")) {
    liscalculate._push(keyPadValue);
  } else if (isIncludes("backspace")) {
    liscalculate._push(keyPadValue);
  } else if (isIncludes("dot")) {
    liscalculate._push(keyPadValue);
  } else if (isIncludes("all-clear")) {
    liscalculate._push(keyPadValue);
  }

  return;
};

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
