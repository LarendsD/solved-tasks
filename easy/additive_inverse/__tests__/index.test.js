import solution from '../index.js';

test('test', () => {
  expect(solution([-5, 25, 125])).toEqual([5, -25, -125]);
  expect(solution([1, 1, 1, 10])).toEqual([-1, -1, -1, -10]);
  expect(solution([1, -2, 3, -4, -5])).toEqual([-1, 2, -3, 4, 5]);
  expect(solution([-544, -80, -253, -818])).toEqual([544, 80, 253, 818]);
  expect(solution([-80, -282, 361, 422, 211, -89])).toEqual([80, 282, -361, -422, -211, 89]);
  expect(solution([-660, 891, 177, -662, -873, 506])).toEqual([660, -891, -177, 662, 873, -506]);
  expect(solution([855, 855, 241, -253])).toEqual([-855, -855, -241, 253]);
  expect(solution([890, -89, -875, 422])).toEqual([-890, 89, 875, -422]);
  expect(solution([0, 3, -6, 3, 141])).toEqual([0, -3, 6, -3, -141]);
});
