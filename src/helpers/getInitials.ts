const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('');

export default getInitials;
