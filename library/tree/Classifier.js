class Classifier {
	constructor(members) {
		members.forEach((member) => {
			this[member['name']] = member['method'];
		});
	}
}

module.exports = Classifier;

