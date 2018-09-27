
let i = 0;

let time = 3000;

// IMAGE LIST -- can just put all images in the array and forget about this piewce

images[0] = "../img/red-chair-shey.jpg";
images[1] = "../img/comfy-shey.jpg";


//FUNCTION TO CHANGE IMAGES

function changeImg(){
	document.slide.src = images[i]; //CONFUSED HERE
	if(i < images.length - 1) {
		i++;
	}
	else {
		i = 0;
	}
	setTimeout("changeImg()", time); //runs this function for amount of seconds we set
}


window.onload = changeImg; //causes slideshow to begin when page loads



<img name="slide" width="400" height="200">
