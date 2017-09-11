var arr = [4, 6, 23, 34, 76, 3, 1, 11, 2, 44, 656, 0, 23, 12, 32, 4, 7, 54, 65, 99, 95, 1, 23, 24];
var out = document.getElementById('out');

function getArrayAverage(a) {
	var q = 0;
	for (var i = 0; i < a.length; i++) {
		q += a[i];
	}
	return q / i;
}

out.innerHTML = getArrayAverage(arr);