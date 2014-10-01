
var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	var arr = [];
	fs.readdir(dir,function(err, list){
		if(err){
			return callback(err);
		}
		else{
			for(i=0;i<list.length;i++){
				if(path.extname(list[i]).substr(1)==ext){
					arr.push(list[i]);
				}
			}
		return callback(null, arr);
		}
	})
}



// var fs = require('fs');
// var path = require('path');

// module.exports = function (dir, ext, callback){
// 	fs.readdir(dir, function (err, list){
//     	if(err){
//         	return callback (err);
//         	}
//     	else{
//     		var result = [];
//         	for(var i=0;i<list.length;i++){
//         		if(path.extname(list[i]).substr(1)==ext){
//     				result.push(list[i]);
//   				}
//         	};
//         }
//     })
// };