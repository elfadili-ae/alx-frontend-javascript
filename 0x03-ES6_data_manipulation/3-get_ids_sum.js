export default function getStudentIdsSum(list) {
  const initValue = 0;
  return list.reduce((accumulator, element) => element.id + accumulator, initValue);
}
