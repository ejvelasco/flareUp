import no_duplicates from './no_duplicates';

function difference(array_a, array_b, unique = true) {
  const set_b = new Set(array_b);
  const result = array_a.filter(element => !(set_b.has(element)));
  return unique ? no_duplicates(result) : result;
}

export default difference;