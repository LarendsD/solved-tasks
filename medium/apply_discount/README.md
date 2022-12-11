# Apply discount

Create a function that applies discounts to every price of the products in the array and calculate sum of whole payment. If after applying the discount to price intermediate result becames negative, consider intermediate result as zero.

Example:
```js
5  == solution([10,15], [10,10])
2  == solution([2,4,6,10], [1,5,7,9])
3  == solution([10,20,40,100], [9,18,40,200])
87  == solution([10,20,40,100], [1,2,30,50])
```