var fs = require("fs");
var path = require("path");

var custom, fileName, top, bottom;

function start(){
	getFileName();
}

function getFileName(){

	custom = process.argv[2];
	fileName = path.resolve(__dirname, process.argv[3]);
	top = process.argv[4];
	bottom = process.argv[5];

	if(custom === "false"){
		getFileContents();
	}
	else{
		useDefault();
	}

}

function useDefault(){
	if(fileName){

		fs.readFile(fileName, "utf-8", function(err, data){
			console.log(fileName);
			if(err) throw err;
			
			var front = "<% include ../header %><div class=\"case-content\"><div class=\"title\"><%= title %></div>";
			var back = "</div><% include ../footer %>";
			rewriteFile(addLines(data, front, back));
		});

	}
}

function getFileContents(){
	if(fileName){

		fs.readFile(fileName, "utf-8", function(err, data){
			if(err) throw err;
			
			rewriteFile(addLines(data, top, bottom));
		});

	}
}

function addLines(currentString, front, back){
	var newString = front + currentString + back;
	return newString; 
}

function rewriteFile(string){

	if(string){
		fs.writeFile(fileName, string, function(err){
			if(err) throw err;
		});
	}

}

start();