export default (keys, value) => {
  const result = {};
  keys.forEach((key) => {
    result[key] = value;
  });
  return result;
};
