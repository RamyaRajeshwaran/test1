const { add, subtract, multiply, divide } = require('./calc');

describe('some', ()=>{
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  
  test('subtracts 4 - 2 to equal 2', () => {
    expect(subtract(4, 2)).toBe(2);
  });
  
  test('multiplies 3 * 2 to equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
    // want sqrt of a*b;
  });
  
  test('divides 8 / 2 to equal 4', () => {
    expect(divide(8, 2)).toBe(4);
  });
  
  test('divides by zero throws an error', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero!');
  });
})
