import Operator from "../../src/js/Components/Operator";
import Calculate from "../../src/js/Components/Calculate"




describe("클래스 Operator 테스트", () => {
  let testArray = ["15", "", "20"]
  describe("calculate 메소드 연산 정상 작동 테스트", () => {
    beforeEach(() => {
      testArray = ["15", "", "20"]
    })

    test("calculate 메소드를 이용해 더하기 연산자를 진행합니다.", () => {
      testArray[1] = "+"
      let calculate = new Calculate(testArray)
      let operator = new Operator(calculate.getList);
      expect(String(operator.calculate())).toBe('35')
    });

    test("calculate 메소드를 이용해 빼기 연산자를 진행합니다.(음수값)", () => {
      testArray[1] = "-"
      let calculate = new Calculate(testArray)
      let operator = new Operator(calculate.getList);

      try {
        String(operator.calculate())
      } catch (err) {
        expect(err).toEqual(new Error("뺄셈 결과 음수값 입니다."))
      }
    });

    test("calculate 메소드를 이용해 빼기 연산자를 진행합니다.", () => {
      testArray = ["20", "-", "10"]
      let calculate = new Calculate(testArray)
      let operator = new Operator(calculate.getList);
      
      expect(String(operator.calculate())).toBe("10")
    
    });

    
    test("calculate 메소드를 이용해 곱하기 연산자를 진행합니다.", () => {
      testArray[1] = "x"
      let calculate = new Calculate(testArray)
      let operator = new Operator(calculate.getList);
      
      expect(String(operator.calculate())).toBe('300')
    });

    test("calculate 메소드를 이용해 나누기 연산자를 진행합니다.", () => {
      testArray[1] = "÷"
      let calculate = new Calculate(testArray)
      let operator = new Operator(calculate.getList);
      expect(String(operator.calculate())).toBe('0')
    });

    test("calculate 메소드를 이용해 나누기 연산자를 진행합니다.(0값으로 나누기)", () => {
      testArray = ["20", "÷", "0"]
      let calculate = new Calculate(testArray)
      let operator = new Operator(calculate.getList);
      try {
        String(operator.calculate())
      } catch (err) {
        expect(err).toEqual(new Error("0으로 나눌 수 없습니다."))
      }
    });

    
  })
});
