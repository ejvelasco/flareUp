function is_numbers_array(j) {
  return j.every(element => element == Number(element));
}

export default is_numbers_array;