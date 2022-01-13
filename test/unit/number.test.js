import Number from "../../src/js/Components/Number";

let number = new Number([1, 2, 3, 4, 5]);

describe("클래스 Number 테스트", () => {
  beforeEach(() => {
    number = new Number([1, 2, 3, 4, 5]);
  });

  test("numberlist를 get으로 호출 합니다", () => {
    expect(number.getNumberList).toEqual([1,2,3,4,5])
  })
});
