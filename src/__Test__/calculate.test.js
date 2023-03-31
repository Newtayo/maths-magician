import calculate from '../logic/calculate';

test('Return an empty string if AC button is pressed', () => {
  const result = calculate({ total: '1', next: '2', operation: '+' }, 'AC');
  expect(result).toEqual({ total: null, next: null, operation: null });
});

test('Return an empty string when 0 as the first number', () => {
  const result = calculate({ total: '1', next: '0', operation: '0' }, '0');
  expect(result).toEqual({});
});

test('Add a dot to the nextnumber  when a . button is clicked', () => {
  const result = calculate({ total: '4', next: '1', operation: '.' }, '.');
  expect(result).toEqual({ total: '4', next: '1.', operation: '.' });
});

test('Add a number to the next number when a number button is clicked', () => {
  const result = calculate({ total: '2', next: '3', operation: '+' }, '4');
  expect(result).toEqual({ total: '2', next: '34', operation: '+' });
});

test('Carry out addition operation when the equal to button is clicked', () => {
  const result = calculate({ total: '5', next: '8', operation: '+' }, '=');
  expect(result).toEqual({ total: '13', next: null, operation: null });
});

test('Toggles the sign of next or total when +/- button is clicked', () => {
  const result = calculate({ total: '6', next: '1', operation: '+' }, '+/-');
  expect(result).toEqual({ total: '6', next: '-1', operation: '+' });
});
test('Provides subtraction operation when the equal sign is pressed', () => {
  const result = calculate({ total: '5', next: '8', operation: '-' }, '=');
  expect(result).toEqual({ total: '-3', next: null, operation: null });
});
