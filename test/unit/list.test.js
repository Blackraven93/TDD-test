import Calculate from "../../src/js/Components/Calculate";

// 모듈 테스트
let list = new Calculate([1, 2, 3, 4, 5]);

describe("클래스 List 테스트", () => {
  beforeEach(() => {
    list = new Calculate([1, 2, 3, 4, 5]);
  });

  test("인스턴스 생성", () => {
    expect(list.getList).toEqual([1, 2, 3, 4, 5]);
  });

  test("_push method 확인", () => {
    jest.spyOn(list, "_push");
    list._push(6);
    expect(list.getList).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("_pop method 확인", () => {
    jest.spyOn(list, "_pop");
    list._pop();
    expect(list.getList).toEqual([1, 2, 3, 4]);
  });

  test("_pop method argument(2) 확인", () => {
    jest.spyOn(list, "_pop");
    list._pop(2);
    expect(list.getList).toEqual([1, 2, 3]);
  });

  test("empty property 확인", () => {
    expect(list.empty).not.toBe(true);
  });

  test("_clear method 작동 확인", () => {
    list._clear();
    expect(list.getList).toEqual([]);
  });
});
