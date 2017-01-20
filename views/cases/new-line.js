var fs = require("fs");
var path = require("path");

var fileName = null;

function start(){
	getFileName();
	
	if(fileName){
		fs.readFile(fileName, "utf-8", function(err, data){
			if(err)
				throw err;

			rewriteFile(addHtmlBreak(getEachLine(data)));

		});
	}

	console.log("Done");
}

function getEachLine(string){
	return string.split("\r\n");
}

function addHtmlBreak(array){
	return array.join("<br>\r\n");
}

function rewriteFile(string){
	fs.writeFile(fileName, string, function(err){
		if(err)
			throw err;
	});
}

function getFileName(){
	fileName = 	makeDirectory(process.argv[2]);
}

function makeDirectory(file){
	try{
		return path.resolve(__dirname, file);
	}
	catch(err){
		return null;
	}
}

start();