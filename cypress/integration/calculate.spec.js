/* eslint-disable */
describe("ui-counter", () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit("/");
  });

  it("사이트 렌더링 이후 초기 value 값은 '0'", () => {
    cy.get("#calculation").should("contain.value", "0");
  });

  it("value 값이 '0'일 때 (어느 상황에서든) '0'버튼을 누르면 value 값에 변화가 없다.", () => {
    cy.get(".number").contains("0").click();
    cy.get("#calculation").should("contain.value", "0");
  });

  it("value 값이 '0'일 때 0을 제외한 숫자를 누르면 숫자 값으로 변경 된다.", () => {
    cy.get(".number").contains("1").click();
    cy.get("#calculation").should("contain.value", "1");
  });

  it("value 값이 '1'이라면 '9'버튼을 누를 시 결과는 '19'이다.", () => {
    // cy.get(".number").contains("1").click().then(() => {
    //   const value = cy.get("#calculation")
    //   cy.get(".number").contains("9").click()
    //   value.should("contain.value", "19")
    // })
    cy.get(".number").contains("1").click();
    cy.get(".number").contains("9").click();
    cy.get("#calculation").should("contain.value", "19");
  });

  it("AC 버튼을 누르면 value = 0 그리고 연산식도 초기화 된다.", () => {
    cy.get(".number").contains("2").click();
    cy.get(".number").contains("3").click();
    cy.get(".all-clear").contains("AC").click();
    cy.get("#calculation").should("contain.value", "0");
  });

  it("숫자를 입력하고 연산자 버튼 Click 시 value 값에 변화가 없다.", () => {
    cy.get(".number").contains("5").click();
    cy.get(".number").contains("6").click();
    cy.get(".operator").contains("+").click();
    cy.get("#calculation").should("contain.value", "56");
  });

  it("20 + 70 * 2 = 180", () => {
    cy.get(".number").contains("2").click();
    cy.get(".number").contains("0").click();
    cy.get(".operator").contains("+").click();
    cy.get(".number").contains("7").click();
    cy.get(".number").contains("0").click();
    cy.get(".operator").contains("x").click();
    cy.get(".number").contains("2").click();
    cy.get(".operator").contains("=").click();
    cy.get("#calculation").should("contain.value", "180");
  });
});

// it("0으로 나누려고 하면 alert로 경고 메시지를 출력하고, 결과창에는 '오류'를 출력한다.", () => {
//     const stub = cy.stub();
//     cy.on("window:alert", stub);
//     cy.get(".digit").contains("3").click();
//     cy.get(".operation").contains("/").click();
//     cy.get(".digit").contains("0").click();
//     cy.get(".operation")
//       .contains("=")
//       .click()
//       .then(() => {
//         expect(stub.getCall(0)).to.be.calledWith("0으로 나눌 수 없습니다.");
//       });
//     cy.get("#total").should("have.text", `오류`);
//   });

// it("숫자를 클릭하고, 연산자를 클릭하고, 숫자를 클릭하고, =을 클릭하면 결과창에 연산 결과가 출력되어야 한다.", () => {
//     for (let i = 0; i < 5; i++) {
//       const num1 = Math.floor(Math.random() * 10);
//       const num2 = Math.floor(Math.random() * 10);
//       cy.get(".digit").contains(num1).click();
//       cy.get(".operation").contains("+").click();
//       cy.get(".digit").contains(num2).click();
//       cy.get(".operation").contains("=").click();
//       cy.get("#total").should("have.text", `${num1 + num2}`);
//       cy.get(".modifier").click();
//     }
//   });

// it("'오류'가 출력된 상태에서 숫자를 클릭하면 결과창에 그 숫자가 출력되고, 그 숫자로 연산이 가능하다.", () => {
//     const stub = cy.stub();
//     cy.on("window:alert", stub);
//     cy.get(".digit").contains("3").click();
//     cy.get(".operation").contains("/").click();
//     cy.get(".digit").contains("0").click();
//     cy.get(".operation")
//       .contains("=")
//       .click()
//       .then(() => {
//         expect(stub.getCall(0)).to.be.calledWith("0으로 나눌 수 없습니다.");
//       });
//     cy.get("#total").should("have.text", `오류`);
//     cy.get(".digit").contains("3").click();
//     cy.get("#total").should("have.text", `3`);
//     cy.get(".operation").contains("-").click();
//     cy.get(".digit").contains("1").click();
//     cy.get(".operation").contains("=").click();
//     cy.get("#total").should("have.text", `2`);
//   });

// it("'오류'가 출력된 상태에서 올클리어(.modifier)를 누르면 초기 상태로 돌아가고, 다음 연산을 수행할 수 있다.", () => {
//     const stub = cy.stub();
//     cy.on("window:alert", stub);
//     cy.get(".digit").contains("3").click();
//     cy.get(".operation").contains("/").click();
//     cy.get(".digit").contains("0").click();
//     cy.get(".operation")
//       .contains("=")
//       .click()
//       .then(() => {
//         expect(stub.getCall(0)).to.be.calledWith("0으로 나눌 수 없습니다.");
//       });
//     cy.get("#total").should("have.text", `오류`);
//     cy.get(".modifier").click();
//     cy.get("#total").should("have.text", `0`);
//     cy.get(".digit").contains("7").click();
//     cy.get(".digit").contains("7").click();
//     cy.get(".operation").contains("/").click();
//     cy.get(".digit").contains("1").click();
//     cy.get(".digit").contains("1").click();
//     cy.get(".operation").contains("=").click();
//     cy.get("#total").should("have.text", `7`);
//   });

// const inputNumber = (digits) => {
//     digits.split('').reduce((number, digit) => {
//       if (number.length > 2) return number;
//       if (digit === '-') {
//         cy.get('.operation').contains(digit).click();
//         return number;
//       }

//       cy.get('.digit').contains(digit).click();
//       if (number.length === 0 && digit === '0') return number;
//       cy.get('#total').should('have.text', number + digit);

//       return number + digit;
//     }, '');
//   };

//   const operateNumber = (num1, op, num2, eqaul, result) => {
//     inputNumber(num1);
//     cy.get('.operation').contains(op || '+').click();
//     inputNumber(num2 || '0');
//     cy.get('.operation').contains(eqaul).click();
//     cy.get('#total').should('have.text', result);
//   };

//   const clickAC = () => {
//     cy.get('.modifier').click();
//     cy.get('#total').should('have.text', '0');
//   };

//   describe('calculator-test', () => {
//     beforeEach(() => {
//       cy.visit('http://localhost:5500/');
//     });

//     it('숫자를 눌렀을 때 화면에 표시되고, 입력된 수는 누적된다.', () => {
//       inputNumber('123');
//     });

//     it('숫자가 3개이상 입력된 후에는 숫자가 더이상 입력되지 않는다.', () => {
//       inputNumber('12345');
//     });

//     it('두 수의 덧셈이 가능하다', () => {
//       operateNumber('999', '+', '51', '=', '1050');
//     });

//     it('두 수의 뺄셈이 가능하다', () => {
//       operateNumber('999', '-', '51', '=', '948');
//     });

//     it('두 수의 곱셈이 가능하다', () => {
//       operateNumber('654', 'X', '46', '=', '30084');
//     });

//     it('두 수의 나눗셈이 가능하다', () => {
//       operateNumber('654', '/', '46', '=', '14');
//     });

//     it('기존 total이 0일 때, 입력되는 0은 반영하지 않는다.', () => {
//       inputNumber('00123');
//     });

//     it('완성되지 않은 수식은 alert(완성되지 않은 수식입니다)로 경고하기.', () => {
//       const stub = cy.stub();

//       inputNumber('9');
//       cy.get('.operation').contains('X').click();
//       cy.on('window:alert', stub);
//       cy
//         .get('.operation').contains('=').click()
//         .then(() => {
//           expect(stub.getCall(0)).to.be.calledWith('완성되지 않은 수식입니다.');
//         });
//     });

//     it('사칙연산을 선택하지 않으면 처음에 입력한 숫자를 표시한다.', () => {
//       operateNumber('9', null, null, '=', '9');
//     });

//     it('두 수의 나눗셈에서 0으로 나눌 경우 결과에 \'오류\'를 출력한다.', () => {
//       operateNumber('6', '/', '0', '=', '오류');
//     });

//     it('첫번째 숫자로 음수를 입력할 수 있다.', () => {
//       operateNumber('-09', null, null, '=', '-9');
//     });

//     it('AC를 누르면 0으로 초기화된다.', () => {
//       inputNumber('12');
//       clickAC();
//       operateNumber('-999', '-', '51', '=', '-1050');
//     });
//   });
