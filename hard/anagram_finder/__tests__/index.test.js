import solution from '../index.js';

test('test', () => {
  expect(solution(['veer', 'lake', 'item', 'kale', 'mite', 'ever', 'rev'])).toEqual([['veer', 'ever'], ['lake', 'kale'], ['item', 'mite']]);
  expect(solution(['meat', 'mat', 'team', 'mate', 'eat', 'mate'])).toEqual([['meat', 'team', 'mate', 'mate']]);
  expect(solution(['there', 'is', 'no', 'anagrams', 'foo', 'bar'])).toEqual([['anagrams not found!']]);
  expect(solution([
    'guohc', 'guohc', 'cough', 'morning', 'adigrne',
    'osls', 'sneeze', 'knowledge', 'nitwer', 'distribution',
    'water', 'ewvi', 'event', 'oriintdusbti', 'trnwie', 'water',
    'nuaegalg', 'osls', 'gelugaan', 'question',
  ]))
    .toEqual([
      ['guohc', 'guohc', 'cough'],
      ['osls', 'osls'],
      ['nitwer', 'trnwie'],
      ['distribution', 'oriintdusbti'],
      ['water', 'water'],
      ['nuaegalg', 'gelugaan'],
    ]);
});
