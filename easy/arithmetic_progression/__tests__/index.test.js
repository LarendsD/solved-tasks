import solution from '../index.js';

test('test', () => {
  expect(solution(1)).toEqual(1);
  expect(solution(5)).toEqual(15);
  expect(solution(50)).toEqual(1275);
  expect(solution(24)).toEqual(300);
  expect(solution(9)).toEqual(45);
  expect(solution(26)).toEqual(351);
  expect(solution(20)).toEqual(210);
});
