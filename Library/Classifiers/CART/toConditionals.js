const rel = '../../lib/';
const isObject = require(rel + 'isObject');
const range = require(rel + 'range');
const fs = require('fs');

function _if(condition = true, block= '', indent) {
	const conditional = `
${indent}if (${condition}) { 
${indent} ${block}`;
	return conditional; 
}

function _else(block = '', indent) {
	const conditional = `
${indent}} else {
${indent} ${block}
${indent}}`;
	return conditional;
}

function toConditionals(node, fileName = 'conditionalTreeClassifier.js', functionName = 'conditionalTreeClassifier') {
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

function conditionalTree(node, depth = 0) {
	let mainBlock = '';
	depth++;
	let indent = '';
	range(depth).forEach((num) => {
		indent += '  ';
	});
	if (isObject(node)) {
		const attrib = node['split']['attrib'];
		const val = node['split']['val'];
		const condition = `example['${attrib}'] <= ${val}`;
		mainBlock += _if(condition, conditionalTree(node['left'], depth), indent);
		const elseBlock = conditionalTree(node['right'], depth);
		const re = /^return/;
		if (re.test(elseBlock.trim())) {
				mainBlock += `
${indent}}
${indent}${elseBlock}`;
		} else {
			mainBlock += _else(elseBlock, indent);
		}
	} else {
		mainBlock += ` return '${node}';`;
	}
	return mainBlock.trim();
}

module.exports = toConditionals;