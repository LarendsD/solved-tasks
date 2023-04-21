# Check parantheses

Проверьте, сбалансированы ли скобки в выражении, то есть для каждой открывающей скобки есть закрывающая.

```js
false  == solution("( )  )")
true  == solution("()")
true  == solution(" ( )(  )")
true  == solution("(() )")
false  == solution(") ")
false  == solution("(")
false  == solution(") (")
false  == solution("(( )")
```