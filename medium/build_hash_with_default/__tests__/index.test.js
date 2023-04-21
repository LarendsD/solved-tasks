import solution from '../index.js';

test('test', () => {
  expect(solution(['draft', 'completed'], 0)).toEqual({ draft: 0, completed: 0 });
  expect(solution(['one', 'two'], 4)).toEqual({ one: 4, two: 4 });
});
