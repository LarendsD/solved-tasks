export default (quote) => {
  if (quote.trim() === '') {
    return 'Fine. Be that way!';
  }
  if (quote[quote.length - 1] === '!' || (quote.toUpperCase() === quote && quote.toLowerCase() !== quote)) {
    return 'Whoa, chill out!';
  }
  if (quote[quote.length - 1] === '?') {
    return 'Sure.';
  }
  return 'Whatever.';
};
