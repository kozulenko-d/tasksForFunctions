var arras = {
	"first" : 1,
	"second" : "TWO",
	"third" : {
		"firstName" : "Homer",
		"lastName" : "Simpson"
	},
	"fourth" : "May the FOURTH be with you",
	"fifth" : 0
}

function makeCopy(a) {
	return Object.assign({}, a);
}
var copy = makeCopy(arras);

console.log(copy);