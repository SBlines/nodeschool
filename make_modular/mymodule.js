
var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	fs.readdir(dir, callback)
}
