export default (arr1, arr2) => {
  const result = [];
  arr1.forEach((element, index) => {
    if (arr2[index]) {
      result.push(element);
      result.push(arr2[index]);
    }
  });
  return result;
};
