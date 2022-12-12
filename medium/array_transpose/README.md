# Array transpose

Implement the matrix transposition function.

Matrices are presented as arrays of arrays, where internal arrays are rows of the matrix.
There are different ways to transpose a matrix:
1) reflect the array over its main diagonal (which runs from top-left to bottom-right);
2) write the rows of the original matrix as columns of the new one;
3) write the columns of the original matrix as rows of the new one.

Examples:
```js
[[1,10],[2,20],[3,30]]  == solution([[1,2,3],[10,20,30]])
[[1,3,5],[2,4,6]]  == solution([[1,2],[3,4],[5,6]])
[[1,2,3]]  == solution([[1],[2],[3]])
```