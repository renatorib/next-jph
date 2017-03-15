import test from 'ava';
import initials from './initials';

test('single word', t => {
  t.expect(initials('Renato')).toBe('R');
});

test('two words', t => {
  t.expect(initials('Renato Ribeiro')).toBe('RR');
});

test('more than two words', t => {
  t.expect(initials('Renato Ribeiro Another Name')).toBe('RR');
});
