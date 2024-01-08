export default function cleanSet(mySet, startString) {
  const res = [];
  if (startString && startString !== '') {
    mySet.forEach((element) => {
      if (element && element.startsWith(startString)) {
        res.push(element.slice(startString.length));
      }
    });
  }
  return res.join('-');
}
