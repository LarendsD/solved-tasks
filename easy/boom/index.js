export default (nums) => {
  const isExists = nums.find((num) => num === 7);
  return isExists ? 'Boom!' : 'There is no 7.';
};
