const findLongestWordLength = (words) => {
  let max = 0;

  words.forEach((word) => {
    if (word.length > max) {
      max = word.length;
    }
  });

  return max;
};

export default (words) => {
  const longestWordLength = findLongestWordLength(words);
  const asteriskBorder = '*'.repeat(longestWordLength);
  const result = [];

  words.forEach((word) => {
    if (word.length === longestWordLength) {
      result.push(`*${word}*`);
    }
  });

  result.unshift(`*${asteriskBorder}*`);
  result.push(`*${asteriskBorder}*`);

  return result;
};
