
var path = require('path');
var mymodule = require('./mymodule');
var dir = process.argv[2];
var ext = process.argv[3];


mymodule(dir, ext, function(err,returnArr){
	if(err){console.log(err);}
	else{
		for(i=0;i<returnArr.length;i++){
			console.log(returnArr[i]);
		}
	}

});

//this program calls the module. callback is the return of an array from module sorting out data. 