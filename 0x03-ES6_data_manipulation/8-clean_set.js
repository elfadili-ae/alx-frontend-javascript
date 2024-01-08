export default function cleanSet(mySet, startString) {
  const res = [];
  if (startString !== '') {
    mySet.forEach((element) => {
      if (element.startsWith(startString)) {
        res.push(element.slice(startString.length));
      }
    });
  }
  return res.join('-');
}
