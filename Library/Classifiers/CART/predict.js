const methodsPath = require('./methodsPath');
const isObject = require(methodsPath + 'isObject');

function predict(node, example) {
	if (!isObject(node)) {
		return node;
	}
	const attrib = node['split']['attrib'];
	const val = node['split']['val'];
	const res = (example[attrib] <= val) ? predict(node['left'], example) : predict(node['right'], example);		
	return res;
}

module.exports = predict;