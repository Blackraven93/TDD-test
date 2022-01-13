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
    
    if (calculate.empty) {
      // 실행 컨텍스트가 비어있다면?? (초기상황)
      if (keyPadValue !== "=") {
        calculate._push(numberList);
        calculate._push(keyPadValue);
        numberList = "";
      } else throw new Error("숫자와 연산식을 입력하고 '=' 연산을 해주세요  ")
    } else {
      // 다른 연산식일 경우

      if ( keyPadValue !== "=") {

        calculate._push(numberList)
        
        let operator = new Operator(calculate.getList);
        
        calculationInput.value = String(operator.calculate()); // 연산식의 결과를 화면에 출력하고
        calculate._clear() // 리스트 초기화
        
        calculate._push(calculationInput.value) // 계산식과
        calculate._push(keyPadValue) // 연산자를 다시 넣어주기
  
        
        numberList = "";
      } else {
        calculate._push(numberList);
        let operator = new Operator(calculate.getList); // [15 + 20]
        calculationInput.value = String(operator.calculate())
        calculate._clear();
        numberList = [];
      }
    }
      
  } else if (isIncludes("backspace")) {
    // 0일 때 체크
    calculate._push(keyPadValue);
  } else if (isIncludes("dot")) {
    calculate._push(keyPadValue);
  } else if (isIncludes("all-clear")) {
    calculate._clear();
    numberList = [];
    calculationInput.value = "0";
  }

  
};

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
