console.log('This is a log from the GPRB home js file')

//GP Racing Bois homepage JavaScript file, 2018-2019 GP Racing Bois, modified for use on the Showcase-page.
//This file creates the content seen on the homepage based on a simple set of arrays, paired with the required image(s).
//Dynamic addition of content onto the website means hardcoding can be minimized in index.html, it'll simply be moved here instead.
//At this point the only hardcoded parts of the homepage are the framework of it (header and main content area) and the main structure of the content area.

var urlParams = new URLSearchParams(window.location.search); //Allows us to find URL parameters
	pCollectionStored = [];
	counter = 0;
	j = 1;
	
pleaseAddDetails();

for(i=0; i<photoCollection.length; i++) {
	if(brandCollection[i].indexOf(urlParams.get('brand')) != -1) { //We only want material of our current brand
		if(photoCollection[i].indexOf("_highlight") != -1) {	//Removing highlights
			photoCollection[i] = photoCollection[i].substring(0, photoCollection[i].indexOf("_highlight"));
		}
		
		//Creating the set of elements that makes up an article
		var newArticle = document.createElement('article');
			newPhoto = document.createElement('img');
			newContainer = document.createElement('div');
			newH1 = document.createElement('h1');
			newH4 = document.createElement('h4');
			newH2 = document.createElement('h2');
			newP = document.createElement('p');
			newButton = document.createElement('a');
			
			//Setting the attributes for current article based on the information found in the data arrays
			newArticle.className = "grid_12";
			newPhoto.setAttribute("src", "img/"+photoCollection[i]+".png");
			newPhoto.setAttribute("alt", h1Collection[i]);
			newPhoto.className = "photo grid_5";
			newContainer.className = "paragraphs grid_7";
			newH1.textContent = h1Collection[i];
			newH4.textContent = h4Collection[i];
			newH2.textContent = h2Collection[i];
			newP.textContent = pCollection[i];
			pCollectionStored.push(pCollection[i]); //As the if-statement skips IDs, we need to store the used data in a new array
			newButton.className = "button";
			newButton.textContent = "Read More";
		
			//And finally, appending the children to the article and lastly appending the article into the webpage
			newArticle.appendChild(newPhoto);
			newContainer.appendChild(newH1);
			newContainer.appendChild(newH4);
			if(newH2.innerHTML != "") { newContainer.appendChild(newH2); } //Rare h2 element only if it contains something
			newP.innerHTML = newP.innerHTML.replace(new RegExp('/r/n', 'g'), '<br><br>'); //Global replace /r/n with <br><br> in the inner HTML for line breaks
			newContainer.appendChild(newP);
			newArticle.appendChild(newContainer);
			newArticle.appendChild(newButton);
			document.getElementById("main").appendChild(newArticle);
	}
}
	
//Since the content is created dynamically on load, we have to wait for the browser window to fully load first
window.onload = function() {
	var paragraphs = document.getElementsByClassName("paragraphs");
		photos = document.getElementsByClassName("photo");
		buttons = document.getElementsByClassName("button");
		mainDiv = document.getElementsByClassName("main");
		paragraphHeight = [];
		photo = null;
	
	//This code takes all the articles and sets the text's maximum height based on its picture
	//The loop also displays or hides the Read More-button based on whether the text surpasses the photo or not
	//It also adds IDs to the main elements of each article
	for(i=0; i<paragraphs.length; i++) {
	
		paragraphs[i].id = "p"+i;
		photos[i].id = "photo"+i;
		buttons[i].id = "b"+i;
		
		paragraphHeight.push(paragraphs[i].clientHeight);
		photo = photos[i].clientHeight;
		paragraphs[i].style.maxHeight = photo+'px';
		
		if(paragraphs[i].clientHeight < photo) {	//If the photo is taller than the text, the button dissapears
			hideButton(i);
		}
	}

	//Addition of event listeners for both Read More buttons and all article photos (for use in modals)
	for(i=0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", readMoreRelay);
	}
	
	for(i=0; i<photos.length; i++) {
		photos[i].addEventListener("click", showModalRelay);
	}
	
	//Sets the modal picture height based on user's screen height
	document.getElementsByClassName("modalPhoto")[0].style.maxHeight = screen.height*0.8-50 + "px";
	
	//These two functions have to be created inside this window.onload code bracket, else they will have no access to the paragraphs-property.
	//Functions as a relay between event listener and the readMore-function, figures out which button was pushed (this)
	function readMoreRelay() {
		readMore(this.id.charAt(1));
	}

	function readMore(i) {
		photo = photos[i].clientHeight;
	
		if(buttons[i].innerHTML == "Minimize") {
			paragraphs[i].style.maxHeight = photo+'px';
			buttons[i].innerHTML = 'Read More';
		} else {
			paragraphs[i].style.maxHeight = paragraphHeight[i]+'px';
			buttons[i].innerHTML = 'Minimize';
		}
	}
	
	//Setting up the scrolling showcase pictures
	setTimeout(changePicture, 10000);
};

function hideButton(i) {
	buttons[i].style.opacity = "0";
	buttons[i].style.display = "none";
}

//Passes off the ID of the clicked picture to the showModal function.
function showModalRelay() {
	showModal(this.id.charAt(5));
}

//Loads all the variables needed to present a modal
function showModal(i) {
	var modalBG = document.getElementById("modal");
		modalShowcaseText = document.getElementById("showcaseText");
		showcaseP = pCollectionStored[i];
		photo = document.getElementById("photo"+i);
		oldsrc = photo.getAttribute("src");
		id = "showcase" + oldsrc.substring(oldsrc.indexOf("/"), oldsrc.indexOf("."));
		counter = 0; //Zeroes the counter for current amount of slideshow pictures
	
	//Loads all three shots into memory and also remembers how many exist (incase a car only has 0, 1 or 2 shots).
	for(i=0; i<3; i++) {
		var j = i+1;
			modal = document.getElementsByClassName("modalPhoto")[i];
		
		modal.setAttribute("src", id + "_s" + j + ".jpg");
				
		modal.onload = function() {
			console.log("Success");
			counter++;
		}
	}
	
	//If after this load counter is less than j (current slideshow image index), set opacity of first image to 1(else we will see nothing)
	if(counter < j) {
		document.getElementsByClassName("modalPhoto")[0].style.opacity = 1;
	}
	
	modalBG.style.visibility = "visible";
	modalShowcaseText.textContent = showcaseP;
	modalShowcaseText.innerHTML = modalShowcaseText.innerHTML.replace(new RegExp('/r/n', 'g'), ' '); //Global replace /r/n with <br><br> in the inner HTML for line breaks
	
	//It seems the picture opacity transition requires some preload time to work properly
	setTimeout(finalizeModal, 50);
}

function finalizeModal() {
	document.getElementsByClassName("modalWrap")[0].style.opacity = "1";
	document.getElementById("modal").addEventListener("click", hideModal);
	document.getElementById("showcaseText").className = "animated";
	document.body.style.overflow = "hidden";
}

function hideModal() {
	document.getElementsByClassName("modalWrap")[0].style.opacity = "0";
	setTimeout(finalizeHideModal, 550);
	
	document.getElementById("modal").removeEventListener; //The modal background won't be clickable when it's hidden
}

function finalizeHideModal() {
	document.getElementById("modal").style.visibility = "hidden";
	document.getElementById("showcaseText").className = null;
	document.body.style.overflow = null;
	j = 2;
}

//This function handles the slideshow in showcase mode, as well as its timers
function changePicture() {
	var modal = document.getElementsByClassName("modalPhoto")[0];
		oldsrc = modal.getAttribute("src");
	
	if(j == counter) {
		j = 1;
	} else {
		j++;
	}
	
	//If there's more than one shot available, we'll slideshow, else we'll simply keep the process running
	if(counter > 1) {
		console.log("Changing picture to " + j);	
		swapOpacity();
		setTimeout(changePicture, 10000);
	} else {
		setTimeout(changePicture, 10000);
	}
}

function swapOpacity() {
	document.getElementsByClassName("modalPhoto")[0].style.opacity = 0;
	document.getElementsByClassName("modalPhoto")[1].style.opacity = 0;
	document.getElementsByClassName("modalPhoto")[2].style.opacity = 0;	
	
	setTimeout(function() {
		document.getElementsByClassName("modalPhoto")[j-1].style.opacity = 1;
	}, 1500);
}

//Adding details for Allan (sets the navbar at the top based on current brand)
function pleaseAddDetails() {
	var brand = urlParams.get('brand');
		allan = document.getElementById("allan");
	console.log(brand);
	
	allan.setAttribute("href", "showcase.html?brand=" + brand);
	allan.innerHTML = brand;
}