import fu from '../lib/index';


function isNumbersArray(j) {
  return j.every(element => element == Number(element));
}

function encode(X, label_encoder) {
  const first_row = X[0];
  const result = first_row.map((values, i) => {
    const j = fu.columns(X, i, i + 1);
    const j_processed = isNumbersArray(j) ? j : label_encoder.fit_transform(j);
    return j_processed; 
  });
  return fu.transpose(result);
}

function on_load(data) {
  const label_encoder = new fu.preprocessing.LabelEncoder();
  const classifier = new fu.tree.DecisionTreeClassifier();
  const data_non_empty = data.filter(row => !row.some((value) => value === '?'));
  const data_encoded = encode(data_non_empty, label_encoder);
  const data_shuffled = fu.shuffle(data_encoded);
  const n_features = fu.length(data_shuffled[0]);
  let X = fu.columns(data_shuffled, n_features - 1);
  let y = fu.columns(data_shuffled, n_features - 1, n_features);
  const [X_train, X_test, y_train, y_test] = fu.split_train_test({
    X, 
    y, 
    train_size: 0.8,
  });
  classifier.fit({ 
    X: X_train, 
    y: y_train, 
  }); 
  const accuracy = classifier.score(X_test, y_test); 
}

fu.load('mushrooms.csv', on_load);

    