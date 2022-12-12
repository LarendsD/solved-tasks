export default (bytes, mask) => {
  const result = bytes.split('').map((byte, index) => (byte === '0' && mask[index] === '0' ? '0' : '1'));
  return result.join('');
};
