export default (words) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  words.split('').forEach((word) => {
    const indexAlphabet = alphabet.indexOf(word);
    if (alphabet[indexAlphabet]) {
      alphabet[indexAlphabet] = '';
    }
  });
  return !alphabet.join('');
};
