export default function updateUniqueItems(mapu) {
  if (!(mapu instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of mapu) {
    if (value === 1) {
      mapu.set(key, 100);
    }
  }
  return mapu;
}
