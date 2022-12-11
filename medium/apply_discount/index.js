export default (prices, discounts) => {
  let result = 0;
  prices.forEach((price, index) => {
    if (price > discounts[index]) {
      result += price - discounts[index];
    }
  });
  return result;
};
