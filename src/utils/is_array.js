function is_array(structure) {
  return toString.call(structure) === '[object Array]';	
} 

export default is_array;