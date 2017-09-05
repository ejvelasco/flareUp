const fs = require('fs');
const conditionalTree = require('./conditionalTree');

function toConditionals(node, fileName = '', functionName = '') {
	const docs = 'Please review the CARTClassifier.toConditionals() documentation.';
	if (!fileName.length) {
		const msg = `No target file name was provided. ${docs}`;
		throw(new Error(msg));	
	} 
	if (!functionName.length) {
		const msg = `No function name was provided. ${docs}`;
		throw(new Error(msg));	
	} 
	const body = conditionalTree(node);
	const conditionalTreeClassifier = `function ${functionName}(example) {
  ${body}
}

module.exports = ${functionName};`;
	fs.writeFile(fileName, conditionalTreeClassifier, (err) => {
		if (err) throw err;
		console.log(`Conditional Tree Classifier saved as ${fileName}`);
	});
}

module.exports = toConditionals;