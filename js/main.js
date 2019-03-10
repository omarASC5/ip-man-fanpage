// This function transitions the navbar from black to yellow after scrolling
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
   if (currentScrollPos < $(window).height()) {

	   document.getElementById("navbar").classList.remove('shrink');
	   document.getElementById("navbar").classList.add('navbar-dark');
	   document.getElementById("navbar").classList.remove('navbar-light');
   } else {
	   document.getElementById("navbar").classList.add('shrink');
	   document.getElementById("navbar").classList.remove('navbar-dark');
	   document.getElementById("navbar").classList.add('navbar-light');
   }
}

// This generic function is a remove() helper function to use on DOM items
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

// When on mobile, remove the video background and replace it with an image instead
if (window.innerWidth < 1200) {
	document.getElementById("video-background").remove();
	document.getElementById("video-overlay").remove();
}

// Using the fetch API, retrieve movies IP MAN was in. API: OMDB.
fetch("http://www.omdbapi.com/?s=ip+man&plot=full&apikey=thewdb").then((response) => {	
	return response.json();
}).then(({ Search }=movies) => {
	// Destructuring of the Search object
	return Search;
}).then((movies) => {
	const moviesArray = movies.forEach((movie, i) => {
		// Sets up the container for the movie section and containers for individual movies
		const masterMovieContainer = document.getElementById('master-movie-container');
		const movieContainer = document.createElement('div');
		movieContainer.classList.add('movie-container');
		movieContainer.classList.add('pb-3');
		movieContainer.classList.add('text-center');
		movieContainer.classList.add('col-lg-3');
		movieContainer.classList.add('col-md-4');
		movieContainer.classList.add('col-sm-6');
		masterMovieContainer.appendChild(movieContainer);

		// Adds the image to the movie div
		const posterImage = document.createElement('img');
		posterImage.classList.add('poster');
		posterImage.classList.add('img-fluid');
		movieContainer.appendChild(posterImage);
		posterImage.src = movie.Poster;

		// Adds the title to the movie div 
		const titleParagraph = document.createElement('p');
		titleParagraph.classList.add('title');
		movieContainer.appendChild(titleParagraph);
		titleParagraph.innerHTML = movie.Title;

		// Adds the year to the movie div
		const yearParagraph = document.createElement('p');
		yearParagraph.classList.add('year');
		movieContainer.appendChild(yearParagraph);
		yearParagraph.innerHTML = movie.Year;
	})
});



