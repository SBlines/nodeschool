
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list){
	for(i=0;i<list.length;i++){
		console.log("list " + i + " is: " + list[i]);
		console.log("Extension is " + path.extname(list[i]));
		if(path.extname(list[i])==ext){
			console.log(list[i]);
		}
	}
});

