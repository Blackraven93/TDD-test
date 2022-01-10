const { exportAllDeclaration } = require("@babel/types");

const sum = (a, b) => {
    return a + b;
}

test("add 1 + 2 to be 3", () => {
    expect(sum(1, 2)).toBe(3)
})


