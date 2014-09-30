
var total = 0;
var len = process.argv.length;

for(i=2;i<len;i++){
	total += Number(process.argv[i]);
}
console.log(total);
