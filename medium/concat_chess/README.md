# Concat chess

Соедините 2 строки посимвольно.

Другими словами, возьмите 1-й символ из 1-й строки, затем 1-й символ из 2-й, далее 2-й символ из 1-й строки, потом 2-й символ из 2-й строки и т.д.
Если одна строка закончится раньше другой, просто продолжайте с оставшимися символами.

Examples:
```js
"awbxcydz"  == solution("abcd", "wxyz")
"axbyczd"  == solution("abcd", "xyz")
"wdoorudbleword"  == solution("word", "doubleword")
"abcdefgh"  == solution("aceg", "bdfh")
```