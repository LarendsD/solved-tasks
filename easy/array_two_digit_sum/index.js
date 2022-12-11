export default (nums) => {
  let result = 0;
  nums.forEach((num) => {
    const [num1, num2] = num.toString();
    result += Number(num1) + Number(num2);
  });
  return result;
};
