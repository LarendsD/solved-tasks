# Array interleave
Construct a new array by interleaving two input arrays.

Interleaving is achieved by taking values from each array consecutively:
1st value from the 1st array, then 1st value from the 2nd array, then 2nd value from the
1st array, then 2nd value from the 2nd array, etc. Arrays can be of different lengths,
so if one arrays ends before the other, stop adding new values and return.

Examples:
```js
[5,4,1,9]  == solution([5,1,3], [4,9])
[1,2,3,4,5,6]  == solution([1,3,5], [2,4,6])
[1,2,3,4]  == solution([1,3,5], [2,4])
```