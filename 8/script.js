var out = document.getElementById('out');
function showMax(a, b) {
	console.log(b);
	if (b === undefined) {
		return 'ERROR! Задано одно число';
	} else {
		return Math.max(a, b);
	}
}

out.innerHTML = showMax(12);