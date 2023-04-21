export default (parenthes) => {
  if (parenthes[0] === ')') {
    return false;
  }
  const result = {};
  parenthes.trim().split('').forEach((parenth) => {
    if (!result[parenth]) {
      result[parenth] = 0;
    }
    result[parenth] += 1;
  });
  return result['('] === result[')'];
};
