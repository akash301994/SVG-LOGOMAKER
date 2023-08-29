const {Triangle, Circle, Square} = require('./shapes');

test('testing that i can assign test to triangle class', () => {
    let shape = new Triangle('abc', 'green', 'blue')
  expect(shape.text).toBe('abc');
});

//replicate for circle square
//test color, color for all 3 classes