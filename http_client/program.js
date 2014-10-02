
var http = require('http');
var link = process.argv[2];

http.get(link, function(response){
	response.on("data", function(data){
		console.log(data.toString());
	})
});

// nodeschool solution:

// var http = require('http')
// http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     })