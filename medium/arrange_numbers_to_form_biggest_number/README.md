# Arrange numbers to form biggest number

Construct the largest possible number by arranging the integers from the given array.

Since the resulting number can be very large and out of int range, you have to represent it as string.
For example, from [3, 24, 4] we can construct 6 different numbers: 3244, 3424, 2434, 2443, 4324, 4243
and the largest of them is 4324.

Examples:
```js
"998764543431"  == solution([1,34,3,98,9,76,45,4])
"654321"  == solution([1,2,3,4,5,6])
"481428385220219710610"  == solution([481,428,385,202,2,197,106,10])
"6054854654"  == solution([54,546,548,60])
"9908988444332412"  == solution([43,44,12,324,90,9,88,89])
"1"  == solution([1])
"11"  == solution([1,1])
"22321"  == solution([1,2,223])
```