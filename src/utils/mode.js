function mode(array = []) {
  if (!array) {
    return null;
  } 
  if (array.length === 1) {
    return array[0];
  }
  const seen = {};
  let indexMode = 1;
  let countMode = 1;
  array.forEach((element, i) => {
    if (seen[element]) {
      seen[element]++;
      if (seen[element] > countMode) {
        indexMode = i;
        countMode = seen[element];
      }
    } else {
      seen[element] = 1;
    }
  });
  return array[indexMode];
}

export default mode;