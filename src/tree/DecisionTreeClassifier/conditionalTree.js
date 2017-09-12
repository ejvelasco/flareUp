const genIf = require('./genIf');
const genElse = require('./genElse');
const methodsPath = require('./methodsPath');
const isObject = require(methodsPath + 'isObject');
const range = require(methodsPath + 'range');

function conditionalTree(node, depth = 0) {
	let mainBlock = '';
	let indent = '';
	depth++;
	range(depth).forEach(() => {
		indent += '  ';
	});
	if (isObject(node)) {
		const attrib = node['split']['attrib'];
		const val = node['split']['val'];
		const condition = `example['${attrib}'] <= ${val}`;
		mainBlock += genIf(condition, conditionalTree(node['left'], depth), indent);
		const elseBlock = conditionalTree(node['right'], depth);
		const re = /^return/;
		if (re.test(elseBlock.trim())) {
			mainBlock += `
${indent}}
${indent}${elseBlock}`;
		} else {
			mainBlock += genElse(elseBlock, indent);
		}
	} else {
		mainBlock += ` return '${node}';`;
	}
	return mainBlock.trim();
}

module.exports = conditionalTree;