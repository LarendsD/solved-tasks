export default (bitString, bitmask) => {
  const result = bitString.split('').map((element, index) => (element === bitmask[index] ? element : '0'));
  return result.join('');
};
