function shuffle(a) {
	let m = a.length;
	let t = m;
	let i = m;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = a[m];
		a[m] = a[i];
		a[i] = t;
	}
	return a;
}

module.exports = shuffle;