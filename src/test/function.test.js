import "../function";

// toEqual : toBe X
test("return a user object", () => {
    expect(getUser(1)).toEqual({
        id: 1,
        email: `user1@test.com`
    });
});

// toBeFalsy & toBeTruthy
test("number 0 is falsy but string 0 is truthy", () => {
    expect(0).toBeFalsy();
    expect("0").toBeTruthy();
})

// toHaveLength & toContain
test("array", () => {
    const colors = ["Red", "Yellow", "Blue"];
    expect(colors).toHaveLength(3);
    expect(colors).toContain("Yellow");
    expect(colors).not.toContain("Green");
})

// toMatch()
test("string", () => {
    expect(getUser(1).email).toBe("user1@test.com");
    expect(getUser(2).email).toMatch(/.*test.com$/);
})

// toThrow() Error
test("throw when id is non negative", () => {
    expect(getUserId(-1).toThrow())
    expect(getUserId(-1).toThrow("Invalid ID"))
})