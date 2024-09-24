const getString = (strings: string) => {
  const stringArray = strings.split('');
  const uniqueArray = new Map(stringArray.map((item) => [item, 0]));
  for (const x of uniqueArray.keys()) {
    const length = stringArray.filter((item) => item === x).length;
    uniqueArray.set(x, length);
  }
  return uniqueArray.keys().reduce((init, current) => {
    return (init += uniqueArray.get(current));
  }, '');
};
const string = 'abfaaacbfakei';
const result = getString(string);
console.log(result);
