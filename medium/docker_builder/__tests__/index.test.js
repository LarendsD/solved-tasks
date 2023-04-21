import solution from '../index.js';

test('test', () => {
  expect(solution('clojure', '1.1.2:slim', '')).toEqual('docker build -t codebattle/clojure:1.1.2:slim .');
  expect(solution('ruby', '3.0.2:latest', '')).toEqual('docker build -t codebattle/ruby:3.0.2:latest .');
  expect(solution('elixir', '1.12.2:alpine', './Some/Dockerfile')).toEqual('docker build -t codebattle/elixir:1.12.2:alpine -f ./Some/Dockerfile .');
});
