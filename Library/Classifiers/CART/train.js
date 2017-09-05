const CART = require('./CART');

function train(examples) {
	this.tree = CART(examples);
	return this.tree;
}

module.exports = train;
