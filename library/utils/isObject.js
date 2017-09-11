/*
	* Checks if input was constructed by the Object constructor.
 	*
 	* @memberOf flareUp
 	* @since 1.0.0
 	*
 	* @param {object} [a] Object to be analyzed.
 	*
 	* @returns {boolean} 
 	*
 	* @example 
 	*
 	* const cat = {
	*		name: 'Kitty',
	*		color: 'Brown'
 	* }
 	*
 	* isObject(cat); // => true
*/
function isObject (a) {
	return (!!a) && (a.constructor === Object);
}

module.exports = isObject;