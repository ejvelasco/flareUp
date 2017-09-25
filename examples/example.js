import fu from '../lib/index';

function on_load(data) {
  const label_encoder = new fu.preprocessing.LabelEncoder();
  const classifier = new fu.tree.DecisionTreeClassifier();
  const data_non_empty = data.filter(row => !row.some((value) => value === '?'));
  const data_encoded = label_encoder.transform_2d(data_non_empty);
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
  console.log(accuracy);
}

fu.load('credit.csv', on_load);

    