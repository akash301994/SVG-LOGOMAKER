const { Triangle, Circle, Square } = require("./shapes");

test("testing that i can assign test to triangle class", () => {
  let shape = new Triangle("abc", "green", "blue");
  expect(shape.text).toBe("abc");
});


test("testing that i can assign test to circle class", () => {
  let shape = new Circle("abc", "green", "blue");
  expect(shape.color).toBe("blue");
});



test("testing that i can assign test to square class", () => {
  let shape = new Square("abc", "green", "blue");
  expect(shape.textColor).toBe("green");
});





