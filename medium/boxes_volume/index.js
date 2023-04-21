export default (boxes) => {
  let result = 0;
  boxes.forEach((box) => {
    const [length, width, height] = box;
    result += length * width * height;
  });
  return result;
};
