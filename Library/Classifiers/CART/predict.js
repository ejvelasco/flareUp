const methodsPath = require('./methodsPath');
const isObject = require(methodsPath + 'isObject');

function predict(node, example) {
	if (!isObject(node)) {
		return node;
	}
	const attrib = node['split']['attrib'];
	const val = node['split']['val'];
	return (example[attrib] <= val) ? this.predict(node['left'], example) : this.predict(node['right'], example);		
}

module.exports = predict;