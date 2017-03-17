import capitalizefl from './capitalizefl';

test('single word', () => {
  expect(capitalizefl('renato')).toBe('Renato');
});

test('more words', () => {
  expect(capitalizefl('renato ribeiro')).toBe('Renato ribeiro');
});
