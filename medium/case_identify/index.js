export default (string) => {
  if (string.includes('_')) {
    return 'snake case';
  }
  if (string.includes('-')) {
    if (string.toLowerCase() === string) {
      return 'kebab case';
    }
    return 'train case';
  }
  if (string.toLowerCase() === string) {
    return 'flat case';
  }
  return 'camel case';
};
