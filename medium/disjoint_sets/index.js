export default (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const unitedSet = new Set([...arr1, ...arr2]);

  return unitedSet.size === set1.size + set2.size;
};
