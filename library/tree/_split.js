function split(examples = [], fraction = .8) {
	const i = Math.floor(examples.length * fraction);
	return [examples.slice(0, i), examples.slice(i, examples.length)];
}

module.exports = split;