import solution from '../index.js';

test('test', () => {
  expect(solution('test')).toEqual(448);
  expect(solution('clojure')).toEqual(756);
  expect(solution('frontend')).toEqual(864);
  expect(solution('competition')).toEqual(1195);
  expect(solution('reading')).toEqual(730);
  expect(solution('sneeze')).toEqual(650);
});
