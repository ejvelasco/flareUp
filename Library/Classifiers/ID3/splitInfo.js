function splitInfo(set, subset) {
	const S = set.length;
	const T = subset.length;
	return -(S/T)*Math.log2(S/T);
}

module.exports = splitInfo;