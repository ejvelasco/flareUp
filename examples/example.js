import flareUp from '../lib/index';

function randomSubset(examples) {
  const options = {
    examples,
    fractionToTrain: Math.random(), 
  };
  const [subset1, subset2] = flareUp.split(options);
  return subset1;
}

function onLoad(data) {
  data = data.filter(row => !row.some((value) => value === '?'));
  const numberOfColumns = data[0].length;
  const labels = flareUp.columns(data, numberOfColumns - 1, numberOfColumns);
  const features = flareUp.range(numberOfColumns - 1);
  let examples = flareUp.columns(data, 0, numberOfColumns - 1);
  examples = flareUp.format(features, examples, labels);
  const classifier = new flareUp.tree.DecisionTreeClassifier();
  const splitOptions = {
    examples,
    fractionToTrain: 0.8,
  };
  const [examplesTrain, examplesTest] = flareUp.split(splitOptions);
  const trainOptions = {
    features,
    examples: examplesTrain,
    stratified: true, 
  };
  classifier.fit(trainOptions);
  let correct = 0;
  examplesTest.forEach((example) => {
    if (example['label'] === classifier.predict(example)) {
      correct++;
    }
  });
  console.log(correct / examplesTest.length);
}

flareUp.load('iris.csv', onLoad);

