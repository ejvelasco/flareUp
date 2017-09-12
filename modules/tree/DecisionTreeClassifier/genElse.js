function genElse(block = '', indent) {
	const conditional = `
${indent}} else {
${indent} ${block}
${indent}}`;
	return conditional;
}

module.exports = genElse;