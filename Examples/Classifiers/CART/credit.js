const flareUp = require('../../../Library/index');

function onEnd(data) {
	console.log(data);
}

flareUp.load('credit.csv', onEnd);
