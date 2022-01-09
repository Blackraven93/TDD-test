import "../scss/styles.scss";
/* eslint-disable */
// value
// const totalFomulaBox = document.querySelector(".total");

// keypad
const keyPad = document.querySelector(".buttons");
const inputValue = document.getElementById(".calculation");
// btns
const btns = keyPad.querySelectorAll(".btn");

// common variables
// let totalCalculation = "";
let currentNumber = "";
let previousNumber = "";
let operator = "";

const init = (btn, input) => {
  const isNumber = btn.classList.contains("number");
  const isOperator = btn.classList.contains("operator");

  if (isNumber) {
    if (input.value === "0") {
      // 표시 값이 0이면
      input.value = btn.innerText;
      currentNumber = input.value;
    } else {
      // 표시 값이 0이 아니면
      if (operator === "") {
        input.value += btn.innerText;
        currentNumber = input.value;
      } else {
        // 여기까지가 무슨상황??
        // current에 원하는 숫자가 채워져 있고
        // operator에 연산자가 있는 상황
        if (previousNumber === "") {
          previousNumber = currentNumber;
          input.value = btn.innerText;
          currentNumber = input.value;
        } else {
          // 오퍼레이터도 있고 previous 넘버도 있고
          // current에 붙이면 된다~ <== 이게 오류인듯
          // 정확하게 어떤 오류가 나냐??
          input.value += btn.innerText;
          currentNumber = input.value;
        }
      }
    }
  } else if (isOperator) {
    // 첫단계에서는 오퍼레이터 처리 안해줘도 괜춘
    if (previousNumber === "") {
      // 첫단계
      if (btn.innerText === "=") {
        alert("숫자 입력 에러처리하기");
      } else {
        operator = btn.innerText;
      }
    } else {
      // previous가 있는 상태
      // 계산하기
      previousNumber = parseInt(previousNumber);
      currentNumber = parseInt(currentNumber);
      switch (operator) {
        case "+":
          input.value = previousNumber + currentNumber;
          currentNumber = input.value;
          previousNumber = "";
          operator = btn.innerText;
          break;
        case "-":
          input.value = previousNumber - currentNumber;
          currentNumber = input.value;
          previousNumber = "";
          operator = btn.innerText;
          break;
        case "x":
          input.value = previousNumber * currentNumber;
          currentNumber = input.value;
          previousNumber = "";
          operator = btn.innerText;
          break;
        case "÷":
          if (currentNumber !== "0") {
            input.value = Math.floor(previousNumber / currentNumber);
            currentNumber = input.value;
            previousNumber = "";
            operator = btn.innerText;
          } else {
            alert("0으로 나눌 수 없습니다.");
          }
          break;
        case "=":
          switch (operator) {
            case "+":
              previousNumber = previousNumber + currentNumber;
              input.value = previousNumber;
              currentNumber = "";
              previousNumber = "";
              break;
            case "-":
              previousNumber = previousNumber - currentNumber;
              input.value = previousNumber;
              currentNumber = "";
              previousNumber = "";
              operator = "";
              break;
            case "x":
              previousNumber = previousNumber * currentNumber;
              input.value = previousNumber;
              currentNumber = "";
              previousNumber = "";
              operator = "";
              break;
            case "÷":
              previousNumber = Math.floor(previousNumber / currentNumber);
              input.value = previousNumber;
              currentNumber = "";
              previousNumber = "";
              operator = "";
              break;
          }
      }
    }
  }
};

const handleBtnClick = (event) => {
  event.preventDefault();
  const { target } = event;
  return init(target, inputValue);
};

btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
