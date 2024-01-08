export default function updateUniqueItems(mapu) {
  for (const [key, value] of mapu) {
    if (value === 1) {
      mapu.set(key, 100);
    }
  }
  return mapu;
}
