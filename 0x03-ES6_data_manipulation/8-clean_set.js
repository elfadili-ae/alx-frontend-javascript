export default function cleanSet(mySet, startString) {
  const res = [];
  if (startString && startString !== '') {
    for (const element of mySet) {
      if (typeof element !== 'string') {
        return '';
      }
      if (element && element.startsWith(startString)) {
        res.push(element.slice(startString.length));
      }
    }
  }
  return res.join('-');
}
