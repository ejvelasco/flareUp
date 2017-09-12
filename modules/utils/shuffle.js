import range from './range';

function shuffle(array) {
  let m = array.length;
  let t = m;
  let i = m;
  range(1, m).forEach(() => {
    m -= 1;
    i = Math.floor(Math.random() * m);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  });
  return array;
}

export default shuffle;