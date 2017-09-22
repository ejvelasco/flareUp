import no_duplicates from './no_duplicates';

function difference(array_a, array_b, unique = true) {
  const long = (array_a >= array_b) ? array_a : array_b;
  const short = (array_a >= array_b) ? array_b : array_a;
  const set_short = new Set(short);
  const result = long.filter(element => !(set_short.has(element)));
  return unique ? no_duplicates(result) : result;
}

export default difference;