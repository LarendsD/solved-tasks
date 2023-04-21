import solution from '../index.js';

test('test', () => {
  expect(solution('1, 2, 3 GO!')).toEqual('Whoa, chill out!');
  expect(solution('ZOMBIES ARE COMING!!11!!1!')).toEqual('Whoa, chill out!');
  expect(solution('WHAT THE HELL WERE YOU THINKING?')).toEqual('Whoa, chill out!');
  expect(solution('It is OK.')).toEqual('Whatever.');
  expect(solution('Ending with ? means a question.')).toEqual('Whatever.');
  expect(solution('')).toEqual('Fine. Be that way!');
  expect(solution('    ')).toEqual('Fine. Be that way!');
  expect(solution('4?')).toEqual('Sure.');
});
