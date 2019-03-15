console.log('This is a log from the GPRB home js file')

//GP Racing Bois homepage JavaScript file, 2018-2019 GP Racing Bois.
//This file creates the content seen on the homepage based on a simple set of arrays, paired with the required image(s).
//Dynamic addition of content onto the website means hardcoding can be minimized in index.html, it'll simply be moved here instead.
//At this point the only hardcoded parts of the homepage are the framework of it (header and main content area) and the datafield below.

removeUnhighlighted();
sortByHighlight();

for(i=0; i<photoCollection.length; i++) {
	if(photoCollection[i].indexOf("_highlight") != -1) {	//We only want highlighted material
		photoCollection[i] = photoCollection[i].substring(0, photoCollection[i].indexOf("_highlight")); //Image finder won't work with the _highlight-tag set!
		
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
	document.getElementById("modalPhoto").style.maxHeight = screen.height*0.8-50 + "px";
	
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
	console.log(i);
	var modalBG = document.getElementById("modal");
		modalText = document.getElementById("modalShowcase");
		modal = document.getElementById("modalPhoto");
		photo = document.getElementById("photo"+i);
		newsrc = "";
	
	newsrc = photo.getAttribute("src");
	modal.setAttribute("src", newsrc);
	modalText.textContent = photo.getAttribute("alt");
	modalBG.style.visibility = "visible";
	
	//It seems the picture opacity transition requires some preload time to work properly
	setTimeout(finalizeModal, 50);
}

function finalizeModal() {
	document.getElementById("modalPhoto").style.opacity = "1";
	document.getElementById("modalShowcase").style.opacity = "1";
	
	document.getElementById("modal").addEventListener("click", hideModal);
}

function hideModal() {
	document.getElementById("modalPhoto").style.opacity = "0";
	document.getElementById("modalShowcase").style.opacity = "0";
	setTimeout(finalizeHideModal, 550);
	
	document.getElementById("modal").removeEventListener; //The modal background won't be clickable when it's hidden
}

function finalizeHideModal() {
	document.getElementById("modal").style.visibility = "hidden";
}

function removeUnhighlighted() {
	var photoCollectionSlave = [];
		h1CollectionSlave = [];
		brandCollectionSlave = [];
		h2CollectionSlave = [];
		h4CollectionSlave = [];
		pCollectionSlave = [];
		
	for(i=0; i<photoCollection.length; i++) {
		if(photoCollection[i].indexOf("_highlight") != -1) {
			photoCollectionSlave.push(photoCollection[i]);
			h1CollectionSlave.push(h1Collection[i]);
			brandCollectionSlave.push(photoCollection[i]);
			h2CollectionSlave.push(h2Collection[i]);
			h4CollectionSlave.push(h4Collection[i]);
			pCollectionSlave.push(pCollection[i]);
		}
	}
	photoCollection = photoCollectionSlave.slice();
	h1Collection = h1CollectionSlave.slice();
	brandCollection = brandCollectionSlave.slice();
	h2Collection = h2CollectionSlave.slice();
	h4Collection = h4CollectionSlave.slice();
	pCollection = pCollectionSlave.slice();
}
	

//Checks the highlight priority for each object and sorts based on it.
function sortByHighlight() {
	var photoCollectionSlave = new Array(photoCollection.length);
		h1CollectionSlave = new Array(h1Collection.length);
		brandCollectionSlave = new Array(brandCollection.length);
		h2CollectionSlave = new Array(h2Collection.length);
		h4CollectionSlave = new Array(h4Collection.length);
		pCollectionSlave = new Array(pCollection.length);
		currentHighlight = 0;
	
	for(i=0; i<photoCollection.length; i++)  {
		currentHighlight = photoCollection[i].charAt(photoCollection[i].length-1)-1;
		
		photoCollectionSlave.splice(currentHighlight, 1, photoCollection[i]);
		h1CollectionSlave.splice(currentHighlight, 1, h1Collection[i]);
		brandCollectionSlave.splice(currentHighlight, 1, brandCollection[i]);
		h2CollectionSlave.splice(currentHighlight, 1, h2Collection[i]);
		h4CollectionSlave.splice(currentHighlight, 1, h4Collection[i]);
		pCollectionSlave.splice(currentHighlight, 1, pCollection[i]);
	}
	
	photoCollection = photoCollectionSlave.slice();
	h1Collection = h1CollectionSlave.slice();
	brandCollection = brandCollectionSlave.slice();
	h2Collection = h2CollectionSlave.slice();
	h4Collection = h4CollectionSlave.slice();
	pCollection = pCollectionSlave.slice();
}