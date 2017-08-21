const flareUp = require('../src/index');
// data
const attribs = ['Alt', 'Bar', 'Fri', 'Hun', 'Pat', 'Price', 'Rain', 'Res', 'Type', 'Est', 'WillWait'];
const examples = [
	[true, false, false, true, 'Some', 3, false, true, 'French', '0-10', true],
	[true, false, false, true, 'Full', 1, false, false, 'Thai', '30-60', false],
	[false, true, false, false, 'Some', 1, false, false, 'Burger', '0-10', true],
	[true, false, true, true, 'Full', 1, true, false, 'Thai', '10-30', true],
	[true, false, true, false, 'Full', 3, false, true, 'French', '>60', false],
	[false, true, false, true, 'Some', 2, true, true, 'Italian', '0-10', true],
	[false, true, false, false, 'None', 1, true, false, 'Burger', '0-10', false],
	[false, false, false, true, 'Some', 2, true, true, 'Thai', '0-10', true],
	[false, true, true, false, 'Full', 1, true, false, 'Burger', '>60', false],
	[true, true, true, true, 'Full', 3, false, true, 'Italian', '10-30', false],
	[false, false, false, false, 'None', 1, false, false, 'Thai', '0-10', false],
	[true, true, true, true, 'Full', 1, false, false, 'Burger', '30-60', true]
];
// build model
const classifier = new flareUp.classifiers.ID3Classifier();
const examplesProcessed = classifier.processData(attribs, examples, 'WillWait');
const tree = classifier.fit(examplesProcessed);
classifier.print();
