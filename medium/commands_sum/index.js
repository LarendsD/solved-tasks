export default (weights) => {
  let team1 = 0;
  let team2 = 0;
  weights.forEach((weight, index) => {
    if (index % 2 === 0) {
      team1 += weight;
    } else {
      team2 += weight;
    }
  });
  return [team1, team2];
};
