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
        return this.subtract(num1, num2);
      case "x":
        return this.multiply(num1, num2);
      case "÷":
        if (num2 !== 0) return Math.floor(this.divide(num1, num2));
        else throw new Error("0으로 나눌 수 없습니다.");
      case "=":
        return this.equal();
      default:
        return "Done";
    }
  }

  plus(num1, num2) {
    console.log(num1, num2);
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
    return this.calculate();
  }
}
