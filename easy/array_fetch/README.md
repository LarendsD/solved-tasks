# Array fetch

Given an array of integers, an index, and a default value as input, return the element by that index; if no element exists with given index then return the default value. Index can be a negative integer, which means going over the array backwards from the end.

Example
```js
2  == solution([1,2,3], 1, 10)
10  == solution([1,2,3], 5, 10)
3  == solution([1,2,3], -1, 10)
10  == solution([1,2,3], -5, 10)
1  == solution([1,-5,4,2], 0, 0)
0  == solution([8,0,6,7], -3, -8)
```