module.exports = function reverse (n) {
	var str = Math.abs(n).toString(),
		arr = str.split('');

		return arr.reverse().join('');
}