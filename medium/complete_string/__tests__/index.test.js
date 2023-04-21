import solution from '../index.js';

test('test', () => {
  expect(solution('wyyga')).toEqual(false);
  expect(solution('qwertyuioplkjhgfdsazxcvbnm')).toEqual(true);
  expect(solution('ejuxggfsts')).toEqual(false);
  expect(solution('qpwoeirutyalskdjfhgmznxbcv')).toEqual(true);
  expect(solution('0123456789abcdefghijklmnop')).toEqual(false);
});
