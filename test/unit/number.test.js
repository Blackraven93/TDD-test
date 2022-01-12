import Number from "../../src/js/Components/Number";
import List from "../../src/js/Components/List";

let number = new Number([1,2,3,4,5]);

describe("클래스 Number 테스트", () => {
  beforeEach(() => {
    number = new Number([1, 2, 3, 4, 5]);
  });

  test("인스턴스 생성", () => {
    expect(number._merge()).toStrictEqual(["12345"]);
  })

});