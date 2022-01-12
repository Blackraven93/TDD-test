import Queue from "../../src/js/Components/Queue";

// 모듈 테스트
let queue = new Queue([1, 2, 3, 4, 5]);

describe("클래스 Queue 테스트", () => {
  beforeEach(() => {
    queue = new Queue([1, 2, 3, 4, 5]);
  });

  test("인스턴스 생성", () => {
    expect(queue.getList).toEqual([1, 2, 3, 4, 5]);
  });

  test("_push method 확인", () => {
    jest.spyOn(queue, "_push");
    queue._push(6);
    expect(queue.getList).toEqual([6, 1, 2, 3, 4, 5]);
  });

  test("_pop method 확인", () => {
    jest.spyOn(queue, "_pop");
    queue._pop();
    expect(queue.getList).toEqual([1, 2, 3, 4]);
  });

  test("_pop method argument(2) 확인", () => {
    jest.spyOn(queue, "_pop");
    queue._pop(2);
    expect(queue.getList).toEqual([1, 2, 3]);
  });

  test("length property 확인", () => {
    expect(queue.length).toBe(5);
  });

  test("empty property 확인", () => {
    expect(queue.empty).not.toBe(true);
  });

  test("_clear method 작동 확인", () => {
    queue._clear()
    expect(queue.getList).toEqual([]);
  })
  test("_show method 작동 확인 (숫자값 끼리 결합해서 출력)", () => {
    let value = queue._combine();
    expect(value).toEqual(["54321"]);
  })
});
