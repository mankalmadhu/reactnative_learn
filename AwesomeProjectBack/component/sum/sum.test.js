const sum = require('./sum');

test("add two digits", () => {
    expect(sum(1,2)).toBe(3);
});