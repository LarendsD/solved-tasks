# Anagram finder

Найдите все анаграммы в векторе слов. Функция должна возвращать вектор векторов, где каждый подвектор - это набор слов, которые являются анаграммой друг к другу. Слова без анаграмм не должны попадать в результат. Если анаграмм во входящем векторе нет - возвращается подвектор со строкой “anagrams not found!”

```js
[["veer","ever"],["lake","kale"],["item","mite"]]  == solution(["veer","lake","item","kale","mite","ever","rev"])
[["meat","team","mate","mate"]]  == solution(["meat","mat","team","mate","eat","mate"])
[["anagrams not found!"]]  == solution(["there","is","no","anagrams","foo","bar"])
[["guohc","guohc","cough"],["osls","osls"],["nitwer","trnwie"],["distribution","oriintdusbti"],["water","water"],["nuaegalg","gelugaan"]]  =
```