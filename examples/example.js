import flareUp from '../lib/index';


function onLoad(data) {
  const firstRow = data[0];
  const features = flareUp.range(firstRow.length);
  const label = features[features - 1];
  const examples = flareUp.format(data, features, label);
  const options = {
    examples,
    fractionToTrain: 0.8,
    stratified: true, 
  };
  const [trainExamples, testExamples] = flareUp.split(options);
  const classifier = new flareUp.tree.DecisionTreeClassifier();
  // const tree = classifier.fit(trainExamples, )
  console.log(classifier);
}

flareUp.load('credit.csv', onLoad);

