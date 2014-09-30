
var fs = require('fs');

path = process.argv[2];

fs.readFile(path, 'utf8', function(err, str){
	var amount = str.split(/\n/).length;
	amount--;
	console.log(amount);
});