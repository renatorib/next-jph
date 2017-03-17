// @flow

export default (string: string): string =>
  string.split(' ')
        .map(word => word[0])
        .join('')
        .slice(0, 2);
