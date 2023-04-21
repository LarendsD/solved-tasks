export default (x) => {
  let result = 0;
  let startFrom = 0;

  for (let startDomino = 0; startDomino <= x; startDomino += 1) {
    for (let endDomino = startFrom; endDomino <= x; endDomino += 1) {
      result += startDomino + endDomino;
    }
    startFrom += 1;
  }
  return result;
};
