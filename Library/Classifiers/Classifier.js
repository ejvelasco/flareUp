class Classifier {
	constructor(methods) {
		Object.keys(methods).forEach((method) => {
			this[method] = methods[method];
		});
	}
}

module.exports = Classifier;

