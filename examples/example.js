import flareUp from '../lib/index';


function isNumbersArray(j) {
  return j.every(element => element == Number(element));
}

function format(X, label_encoder) {
  const first_row = X[0];
  const result = first_row.map((values, i) => {
    const j = flareUp.columns(X, i, i + 1);
    const j_processed = isNumbersArray(j) ? j : label_encoder.fit_transform(j);
    return j_processed; 
  });
  return flareUp.transpose(result);
}

function on_load(data) {
  const label_encoder = new flareUp.preprocessing.LabelEncoder();
  const classifier = new flareUp.tree.DecisionTreeClassifier();
  const data_non_empty = data.filter(row => !row.some((value) => value === '?'));
  const data_encoded = format(data_non_empty, label_encoder);
  const n_features = data_encoded[0].length;
  let X = flareUp.columns(data_encoded, 0, n_features - 1);
  let y = flareUp.columns(data_encoded, n_features - 1, n_features);
  console.log(X)
  console.log(y)
}

flareUp.load('iris.csv', on_load);

    