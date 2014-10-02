
var http = require('http');
var link = process.argv[2];

http.get(link, function(response){
	var combined = '';
	var count = 0;
	response.on("data", function(data){
		combined += data;
		count++;
		// console.log(combined);
	});
	response.on("end", function(){
		console.log(count);
		console.log(combined);

	})
});