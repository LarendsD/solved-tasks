export default (numbers) => numbers.sort((a, b) => {
  const num1 = a.toString() + b.toString();
  const num2 = b.toString() + a.toString();
  if (num1 > num2) {
    return -1;
  } if (num1 < num2) {
    return 1;
  }
  return 0;
}).join('');
