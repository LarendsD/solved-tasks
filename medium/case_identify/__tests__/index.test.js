import solution from '../index.js';

test('test', () => {
  expect(solution('somevar')).toEqual('flat case');
  expect(solution('some_var')).toEqual('snake case');
  expect(solution('someVar')).toEqual('camel case');
  expect(solution('some-var')).toEqual('kebab case');
  expect(solution('Some-Var')).toEqual('train case');
});
