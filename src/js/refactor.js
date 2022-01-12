import "../scss/styles.scss";
import Calculate from "./Components/Calculate";
import Operator from "./Components/Operator";
import Number from "./Components/Number";
/* eslint-disable */
// value
// const totalFomulaBox = document.querySelector(".total");

// keypad
const keyPad = document.querySelector(".buttons");
let calculationInput = document.getElementById("calculation");
// btns
const btns = keyPad.querySelectorAll(".btn");

let calculate = new Calculate([]);
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
    if (calculate.contextList.length === 0) {
      calculate._push(numberList);
      numberList = "";
      calculate._push(keyPadValue);
    }

    if (keyPadValue === "=") {
      calculate._push(numberList);
      let operator = new Operator(calculate.getList); // [15 + 20]
      console.log(operator);
      let result = String(operator.calculate());
      calculationInput.value = result;
      calculate._clear();
      numberList = [];
    }
  } else if (isIncludes("backspace")) {
    calculate._push(keyPadValue);
  } else if (isIncludes("dot")) {
    calculate._push(keyPadValue);
  } else if (isIncludes("all-clear")) {
    calculate._clear();
    numberList = [];
    calculationInput.value = "0";
  }

  return;
};

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
