
var http = require('http');
var link = process.argv[2];

http.get(link, function(response){
	var combined = '';
	response.on("data", function(data){
		combined += data;
	});
	response.on("end", function(){
		console.log(combined.split("").length);
		console.log(combined);
	})
});

//nodeschool's answer (the second way):

// var http = require('http')
// var bl = require('bl')
    
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })

