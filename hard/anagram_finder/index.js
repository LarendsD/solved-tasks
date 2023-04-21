const calculateStatOfWord = (targetWord) => {
  let result = 0;
  targetWord?.split('').forEach((word, index) => {
    result += targetWord.charCodeAt(index);
  });
  return result;
};

export default (words) => {
  const result = [];
  for (let k = 0; k < words.length; k += 1) {
    const firstWord = words.shift();
    const statTargetWord = calculateStatOfWord(firstWord);
    const anagram = [];
    for (let i = 0; i < words.length; i += 1) {
      const statWord = calculateStatOfWord(words[i]);
      if (statTargetWord === statWord) {
        anagram.push(words[i]);
        words.splice(i, 1);
        i -= 1;
        k -= 2;
      }
    }
    if (anagram.length) {
      result.push([firstWord, ...anagram]);
    }
  }
  if (!result.length) {
    return [['anagrams not found!']];
  }
  return result;
};
