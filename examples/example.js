import flareUp from '../lib/index';

function randomSubset(examples) {
  const options = {
    examples,
    fractionToTrain: Math.random()
  };
  const [subset1, subset2] = flareUp.split(options);
  return subset1;
}

function onLoad(data) {
  data = data.filter(row => !row.some((value) => value === '?'));
  const numberOfColumns = data[0].length;
  const labels = flareUp.columns(data, numberOfColumns - 1, numberOfColumns);
  const features = flareUp.range(0, numberOfColumns - 1);
  let examples = flareUp.columns(data, numberOfColumns - 1);
  examples = flareUp.format(features, examples, labels);
  const splitOptions = {
    examples,
    fractionToTrain: 0.8, 
  };
  const classifier = new flareUp.tree.DecisionTreeClassifier();
  const trainOptions = {
    features,
    examples: examples, 
  };
  const tree = classifier.fit(trainOptions);
  console.log(JSON.stringify(tree, null, '\t'));
}

flareUp.load('iris.csv', onLoad);

