function pretty() {
	if (this.tree === null) {
		const msg = 'Classifier is not trained. Please review the CARTClassifier documentation.';
		throw(new Error(msg));
	}
	const prettyTree = JSON.stringify(this.tree, null, '  '); 
	return prettyTree;
}

module.exports = pretty;