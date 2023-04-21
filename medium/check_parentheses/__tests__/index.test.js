import solution from '../index.js';

test('test', () => {
  expect(solution('( )  )')).toEqual(false);
  expect(solution('()')).toEqual(true);
  expect(solution(' ( )(  )')).toEqual(true);
  expect(solution('(() )')).toEqual(true);
  expect(solution(') ')).toEqual(false);
  expect(solution('(')).toEqual(false);
  expect(solution(') (')).toEqual(false);
  expect(solution('(( )')).toEqual(false);
});
