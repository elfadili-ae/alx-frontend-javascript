const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  const total = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, total + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  return total;
};

export { weakMap, queryAPI };
