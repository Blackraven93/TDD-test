import Calculate from "./Calculate";
/* eslint-disable */
export default class Operator extends Calculate {
  constructor(operatorList) {
    super(operatorList);
    this.operator = operatorList[1];
  }

  calculate() {
    const [num1, num2] = [
      Number(this.contextList[0]),
      Number(this.contextList[2]),
    ];
    
    switch (this.operator) {
      case "+":
        return this.plus(num1, num2);
      case "-":
        if ((num1 - num2) < 0 ) return new Error("뺄셈 결과 음수값 입니다. ");
        return this.subtract(num1, num2);
      case "x":
        return this.multiply(num1, num2);
      case "÷":
        if (num2 !== 0) return Math.floor(this.divide(num1, num2));
        return new Error("0으로 나눌 수 없습니다.")
      case "=":
        return this.equal();
      default:
        return "Done";
    }
  }

  plus(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

  equal() {
    return num1 === undefined || num2 === undefined ? this.calculate() : new Error("정확한 값을 전달해주세요")
  }
}
