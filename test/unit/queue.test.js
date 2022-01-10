import Queue from "../../src/js/Components/Queue";

jest.mock("../../src/js/Components/Queue");
beforeEach(() => {
    Queue.mockClear()
})


it('클래스 호출 체크', () => {
    const queue = new Queue();
    expect(Queue).toHaveBeenCalledTimes(1);
});

it('클래스 생성 확인', () => {
    const mockedClassQueue = new Queue([]);
    expect(mockedClassQueue).toBeTruthy()
});

it('클래스 호출 확인 및 값 확인', () => {
    expect(Queue).not.toHaveBeenCalled()
    const queue = new Queue([1, 2])
    expect(Queue).toHaveBeenCalled()

    expect(Queue.mock.calls[0][0]).toEqual([1, 2])
});

// it("클래스 메소드 확인", () => {
//     const queue = new Queue([1, 2])
//     expect(Queue.mock.calls[0][0]).toEqual([1, 2])
// })



