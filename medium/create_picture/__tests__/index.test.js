import solution from '../index.js';

test('test', () => {
  expect(solution(['a', 'bc', 'def'])).toEqual(['*****', '*def*', '*****']);
  expect(solution(['some', 'word', 'foo', 'bar'])).toEqual(['******', '*some*', '*word*', '******']);
  expect(solution(['room', 'week', 'competition', 'week', 'credit', 'weather', 'room', 'competition'])).toEqual(['*************', '*competition*', '*competition*', '*************']);
  expect(solution(['pleasure', 'paint', 'middle'])).toEqual(['**********', '*pleasure*', '**********']);
  expect(solution(['regret', 'cough', 'payment', 'touch', 'room', 'regret', 'competition', 'friend', 'father', 'push', 'paint'])).toEqual(['*************', '*competition*', '*************']);
  expect(solution(['land', 'push', 'father', 'business', 'regret', 'touch', 'business', 'detail', 'room'])).toEqual(['**********', '*business*', '*business*', '**********']);
  expect(solution(['paint', 'paint'])).toEqual(['*******', '*paint*', '*paint*', '*******']);
});
