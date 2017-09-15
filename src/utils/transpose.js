function transpose(array) {
  const result = array[0].map((column, i) => array.map(row => row[i]));
  return result;
}

export default transpose;