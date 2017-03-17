import initials from './initials';

test('single word', () => {
  expect(initials('Renato')).toBe('R');
});

test('two words', () => {
  expect(initials('Renato Ribeiro')).toBe('RR');
});

test('more than two words', () => {
  expect(initials('Renato Ribeiro Another Name')).toBe('RR');
});
