export default (array) => array.map((element, index) => {
  let count = 0;

  for (let i = index + 1; i < array.length; i += 1) {
    if (element > array[i]) {
      count += 1;
    }
  }

  return count;
});
