import range from './range';
import each from './each';
import length from './length';

function shuffle(array) {
  const copy = array.slice();
  let m = length(copy);
  let t = m;
  let k = m; 
  each(range(1, m), () => {
    m -= 1;
    k = Math.floor(Math.random() * m);
    t = copy[m];
    copy[m] = copy[k];
    copy[k] = t;
  });
  return copy;
}

export default shuffle;