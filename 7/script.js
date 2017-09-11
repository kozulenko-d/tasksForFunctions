var out = document.getElementById('out');
function getRandomBetween(a, b) {
	if (a < b) {
		return Math.floor((Math.random() * (b - a) ) + a); 
	} else {
		return Math.floor((Math.random() * (a - b) ) + b);
	}
}
out.innerHTML = getRandomBetween(7, 10);