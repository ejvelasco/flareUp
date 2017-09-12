'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function gini(examples) {
	var labels = examples.map(function (example) {
		return example['label'];
	});
	var labelsNoDups = [].concat(_toConsumableArray(new Set(labels)));
	var sum = 0;
	labelsNoDups.forEach(function (label) {
		var P_i = examples.filter(function (example) {
			return example['label'] === label;
		}).length / examples.length;
		sum += P_i ** 2;
	});
	return 1 - sum;
}

module.exports = gini;