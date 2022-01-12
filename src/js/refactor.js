import "../scss/styles.scss";
import Calculate from "./Components/Calculate";
import Number from "./Components/Number";
/* eslint-disable */
// value
// const totalFomulaBox = document.querySelector(".total");

// keypad
const keyPad = document.querySelector(".buttons");
let calculationInput = document.getElementById("calculation");
// btns
const btns = keyPad.querySelectorAll(".btn");

// common variables
// let totalCalculation = "";
let currentNumber = "";
let previousNumber = "";
let operator = "";

let { contextList } = new Calculate([]);
let { numberList } = new Number("");
export const isIncludes = (result) => {
  const _classList = Array.from(event.target.classList);
  return _classList.includes(result);
};

export const handleBtnClick = (event) => {
  event.preventDefault();
  const keyPadValue = event.target.innerText;
  if (isIncludes("number")) {
    if (numberList.length === 0 && calculationInput.value === "0") {
      if (keyPadValue !== "0") {
        numberList = keyPadValue;
        calculationInput.value = numberList;
      }
    } else {
      if (numberList !== "") {
        numberList += `${keyPadValue}`;
        calculationInput.value = numberList;
      } else {
        if (keyPadValue === "0") {
          calculationInput.value = keyPadValue;
        } else {
          numberList = keyPadValue;
          calculationInput.value = numberList;
        }
      }
    }
    // 화면에 표시해주면 끝
  } else if (isIncludes("operator")) {
    if (contextList.length === 0) {
      contextList.push(numberList);
      numberList = "";
      contextList.push(keyPadValue);
    }
  } else if (isIncludes("backspace")) {
    contextList.push(keyPadValue);
  } else if (isIncludes("dot")) {
    contextList.push(keyPadValue);
  } else if (isIncludes("all-clear")) {
    contextList = [];
    numberList = [];
    calculationInput.value = "0";
  }

  return;
};

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
