export default (numbers) => {
  const result = [];
  numbers.forEach((number) => {
    if (number <= 0) {
      result.push(Math.abs(number));
    } else {
      result.push(-number);
    }
  });
  return result;
};
