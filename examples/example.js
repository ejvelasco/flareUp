import flareUp from '../lib/index';

function randomSubset(examples, fraction) {
  const length = Math.floor(fraction * examples.length);
  const subset = [];
  flareUp.range(length).forEach(() => {
    const randomIndex = Math.floor(Math.random() * length);
    subset.push(examples[randomIndex]);
  });
  return subset;
}

function onLoad(data) {
  data = data.filter(row => !row.some((value) => value === '?'));
  const numberOfColumns = data[0].length;
  const labels = flareUp.columns(data, numberOfColumns - 1, numberOfColumns);
  const features = flareUp.range(numberOfColumns - 1);
  let examples = flareUp.columns(data, numberOfColumns - 1);
  examples = flareUp.format(features, examples, labels);
  const splitOptions = {
    examples,
    fractionToTrain: 0.8, 
  };
  const [trainExamples, testExamples] = flareUp.split(splitOptions);
  const trainSets = [];
  flareUp.range(10).forEach(() => {
    trainSets.push(randomSubset(examples, .8));
  });
  const classifier = new flareUp.tree.DecisionTreeClassifier();
  const trees = trainSets.map((set) => {
    const trainOptions = {
      features,
      examples: set, 
    };
    const tree = classifier.fit(trainOptions);
    return tree;
  });
  let numRight = 0;
  testExamples.forEach((example) => {
    const predictions = trees.map((tree) => classifier.predict(tree, example));
    if (example['label'] === flareUp.mode(predictions)) {
      numRight++;
    }
  });
  console.log(numRight / testExamples.length);
}

flareUp.load('credit.csv', onLoad);

