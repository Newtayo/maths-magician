import operate from '../logic/operate';

test('Return the summation of two numbers when + is pressed', () => {
  const result = operate(2, 3, '+');
  expect(result).toEqual('5');
});

test('Return the difference of two numbers when - is pressed', () => {
  const result = operate(2, 3, '-');
  expect(result).toEqual('-1');
});
test('Return the product of two numbers when x is pressed', () => {
  const result = operate(2, 3, 'x');
  expect(result).toEqual('6');
});
test('Return the division of two numbers when ÷ is pressed', () => {
  const result = operate(6, 3, '÷');
  expect(result).toEqual('2');
});
test('Return the modulus of two numbers when % is pressed', () => {
  const result = operate(7, 3, '%');
  expect(result).toEqual('1');
});
