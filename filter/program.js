
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list){
	var arr = [];
	for(i=0;i<list.length;i++){
		// console.log("list " + i + " is: " + list[i]);
		// console.log("Extension is " + path.extname(list[i]));
		if(path.extname(list[i]).substr(1)==ext){
			console.log(list[i]);
			arr.push(list[i]);
		}
	}
	return(arr);
});

// console.log("And ext is " + ext);