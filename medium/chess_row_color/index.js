export default (word, number) => {
  if (word.charCodeAt(0) % 2 === 0) {
    if (number % 2 === 0) {
      return 'black';
    }
    return 'white';
  }
  if (number % 2 === 0) {
    return 'white';
  }
  return 'black';
};
