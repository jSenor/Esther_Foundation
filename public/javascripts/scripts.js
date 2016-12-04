window.onload = function(){
	// setInterval(reload, 1000);

	//Set the height position of the jumbotron text
	placeJumboText();

	window.onresize = function(){
		placeJumboText();
	}

	toggleNavigation();
}

function placeJumboText(){
	var jumboText = document.querySelector(".jumbo-text");
	var jumbo = document.querySelector(".jumbotron img");
	var jumboHeight = Number(jumbo.height);
	jumboText.style.top = (jumboHeight / 2) + "px";
}

function toggleNavigation(){
	var navicon = document.querySelector(".nav-toggle");
	navicon.addEventListener("click", function(event){
		var currentClassName = event.target.parentElement.className;
		if(currentClassName == "navigation inactive"){
			event.target.parentElement.className = "navigation active";
			return;
		}
		event.target.parentElement.className = "navigation inactive";
	});
}

function centerMapAndAddress(){
	var map = document.querySelector(".map");
	var info = document.querySelector(".location-info");
}

function reload(){
	location.reload();
}
