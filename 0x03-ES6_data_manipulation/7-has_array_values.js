/* eslint-disable no-plusplus */
export default function hasValuesFromArray(maSet, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!maSet.has(arr[i])) {
      return false;
    }
  }
  return true;
}
