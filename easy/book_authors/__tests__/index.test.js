import solution from '../index.js';

test('test', () => {
  expect(solution([
    {
      name: 'Some book',
      authors: 'Some authors',
      pages: '123',
    }, {
      name: 'Sample',
      authors: 'Authors',
      pages: '321',
    }]))
    .toEqual(['Some authors', 'Authors']);

  expect(solution([{
    name: 'SICP',
    authors: 'Harold Abelson, Gerald Jay Sussman, Julie Sussman',
    pages: '657',
  }, {
    name: 'Ruby Under a Microscope: An Illustrated Guide to Ruby Internals',
    authors: 'Pat Shaughnessy',
    pages: '360',
  }, {
    name: 'How to Design Programs.',
    authors: 'Matthias Felleisen, Robert Bruce Findler, Matthew Flatt, Shriram Krishnamurthi',
    pages: '720',
  }]))
    .toEqual([
      'Harold Abelson, Gerald Jay Sussman, Julie Sussman',
      'Pat Shaughnessy',
      'Matthias Felleisen, Robert Bruce Findler, Matthew Flatt, Shriram Krishnamurthi',
    ]);
});
