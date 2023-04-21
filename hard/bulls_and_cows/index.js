export default (player1, player2) => {
  let bulls = 0;
  let cows = 0;
  const stringP2 = player2.toString();
  player1.toString().split('').forEach((number, index) => {
    if (number === stringP2[index]) {
      bulls += 1;
    } else if (stringP2.includes(number)) {
      cows += 1;
    }
  });
  return [bulls, cows];
};
