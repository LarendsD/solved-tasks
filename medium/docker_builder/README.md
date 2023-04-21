# Docker builder
Создайте функцию, которая генерирует команду сборки docker образа для codebattle с помощью language, version и path (который может быть пустой строкой).

Examples:
```js
"docker build -t codebattle/clojure:1.1.2:slim ."  == solution("clojure", "1.1.2:slim", "")
"docker build -t codebattle/ruby:3.0.2:latest ."  == solution("ruby", "3.0.2:latest", "")
"docker build -t codebattle/elixir:1.12.2:alpine -f ./Some/Dockerfile ."  == solution("elixir", "1.12.2:alpine", "./Some/Dockerfile")
```
