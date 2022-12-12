import solution from '../index.js';

test('test', () => {
  expect(solution('<a>foo</a>', '<a>', '</a>')).toEqual('foo');
  expect(solution("this is 'text'", "'", "'")).toEqual('text');
  expect(solution('xonix', 'x', 'x')).toEqual('oni');
  expect(solution('www.google.com', 'www.', '.com')).toEqual('google');
  expect(solution('oh wow such example', 'oh', 'such')).toEqual(' wow ');
});
