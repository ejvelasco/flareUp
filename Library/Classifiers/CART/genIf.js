function genIf(condition = true, block= '', indent) {
	const conditional = `
${indent}if (${condition}) { 
${indent} ${block}`;
	return conditional; 
}

module.exports = genIf;