window.onload = function(){
	// setInterval(reload, 1000);

	//Set the height position of the jumbotron text
	placeJumboText();
	toggleNavigation();
	//centerTeamMembers();

	window.onresize = function(){
		placeJumboText();
		//centerTeamMembers();
	}
}

function placeJumboText(){
	try{
		var jumboText = document.querySelector(".jumbo-text");
		var jumbo = document.querySelector(".jumbotron img");
		var jumboHeight = Number(jumbo.height);
		jumboText.style.top = (jumboHeight / 2) + "px";
	}
	catch(err){
		console.log("Failed");
	}
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

function centerTeamMembers(){
	try{
		var width = Number(window.innerWidth);
		var more = document.querySelector(".more");
		more.style.maxWidth = "525px";
		console.log(width);
		if(width <= 950){
			more.style.maxWidth = "1200px";
			var memberImages = document.querySelectorAll(".more .member-image");
			for(var i = 0; i < memberImages.length; i++){
				var image = memberImages[i];
				image.style.width = (width / memberImages.length) - 35;
				image.style.height = image.style.width;
			}
			var totalOccupiedWidth = ((width / memberImages.length) - 35) * memberImages.length;
			totalOccupiedWidth = totalOccupiedWidth + (20 * memberImages.length);

			var remainingSpace = width - totalOccupiedWidth;
			console.log(remainingSpace);

			var margin = remainingSpace / 2;
			var firstElement = document.querySelector(".more .member-image");
			firstElement.style.marginLeft = (margin - 10) + "px";

			console.log("Centererd the team members");
		}
	}
	catch(err){
		console.log(err);
	}
}

function reload(){
	location.reload();
}
