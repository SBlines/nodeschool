
var fs = require('fs');

// To read a file, you'll need to use fs.readFileSync('/path/to/file')

path = process.argv[2];

var file = fs.readFileSync(path).toString();

var amount = file.split(/\n/).length;

amount--;

console.log(amount);