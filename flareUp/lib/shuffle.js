function shuffle(a) {
	let m = a.length, t = m, i = m;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = a[m];
		a[m] = a[i];
		a[i] = t;
	}
	return a;
}

module.exports = shuffle;