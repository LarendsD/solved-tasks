export default (word1, word2) => {
  let result = '';

  const longestWordLength = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < longestWordLength; i += 1) {
    result += word1[i] ?? '';
    result += word2[i] ?? '';
  }

  return result;
};
