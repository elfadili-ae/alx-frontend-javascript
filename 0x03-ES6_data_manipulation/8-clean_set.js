export default function cleanSet(mySet, startString) {
  let res = '';
  if (!startString || !startString.length) {
    return '';
  }
  for (const element of mySet) {
    if (element && element.startsWith(startString)) {
      res += `${element.slice(startString.length)}-`;
    }
  }
  return res.slice(0, -1);
}
