import flareUp from '../lib/index';

function on_load(data) {
  data = data.filter(row => !row.some((value) => value === '?'));
  const n_features = data[0].length;
  const X = flareUp.columns(data, 0, n_features - 1);
  const y = flareUp.columns(data, n_features - 1, n_features);
  console.log(X);
  console.log(y);
}

flareUp.load('iris.csv', on_load);

