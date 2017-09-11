var arr = [4, 6, 23, 34, 76, 3, 1, 11, 2];

function arraySum(a) {
	j = 0;
	for (var i = 0; i < a.length; i++) {
		j += a[i];
	}
	return j;
}

var out = document.getElementById('out');
out.innerHTML = arraySum(arr);