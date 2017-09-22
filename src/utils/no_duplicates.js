function no_duplicates(array) {
  const result = [... new Set(array)];
  return result;
}

export default no_duplicates;