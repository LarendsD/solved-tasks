export default (str) => {
  let result = 0;
  str.split('').forEach((word) => {
    result += word.charCodeAt(0);
  });
  return result;
};
