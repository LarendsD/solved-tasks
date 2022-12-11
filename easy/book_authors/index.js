export default (books) => {
  const result = [];
  books.forEach((book) => {
    result.push(book.authors);
  });
  return result;
};
