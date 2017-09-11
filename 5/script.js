var arr = [4, 6, 23, 34, 76, 3, 1, 11, 2];
var out = document.getElementById('out');

function masOut(a, b) {
	var q = '';
	for (var i = 0; i < a.length; i++) {
		q += a[i] + '; ';
	}
	return b.innerHTML = q;
}

masOut(arr, out);