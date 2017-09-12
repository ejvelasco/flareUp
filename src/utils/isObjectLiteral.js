function isObjectLiteral(item) {
  const result = (!!item) && (item.constructor === Object); 
  return result;
}

export default isObjectLiteral;