export default (matrix) => {
  const lengthNewMatrix = matrix[0].length;
  const result = [];
  for (let i = 0; i < lengthNewMatrix; i += 1) {
    const elementOfMatrix = [];
    matrix.forEach((element) => {
      elementOfMatrix.push(element[i]);
    });
    result.push(elementOfMatrix);
  }
  return result;
};
