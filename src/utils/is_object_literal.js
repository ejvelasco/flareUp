function is_object_literal(structure) {
  return (!!structure) && (structure.constructor === Object); 
}

export default is_object_literal;