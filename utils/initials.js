const initials = (string: string): string =>
  string.split(' ')
        .map(word => word[0])
        .join('')
        .slice(0, 2);

export default initials;
