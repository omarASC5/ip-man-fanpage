let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {

	   document.getElementById("navbar").classList.remove('shrink');
	   document.getElementById("navbar").classList.add('navbar-dark');
	   document.getElementById("navbar").classList.remove('navbar-light');
   } else {
	   document.getElementById("navbar").classList.add('shrink');
	   document.getElementById("navbar").classList.remove('navbar-dark');
	   document.getElementById("navbar").classList.add('navbar-light');
   }
  	prevScrollpos = currentScrollPos;
}

fetch("http://www.omdbapi.com/?s=ip+man&plot=full&apikey=thewdb").then((response) => {	
	return response.json();
}).then(({ Search }=movies) => {
	return Search;
}).then((movies) => {
	const moviesArray = movies.forEach((movie, i) => {
		// Sets up the container for the movie section and containers for individual movies
		const masterMovieContainer = document.getElementById('master-movie-container');
		const movieContainer = document.createElement('div');
		movieContainer.classList.add('movie-container');
		masterMovieContainer.appendChild(movieContainer);

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

		// Adds the image to the movie div
		const posterImage = document.createElement('img');
		posterImage.classList.add('poster');
		movieContainer.appendChild(posterImage);
		posterImage.src = movie.Poster;
	})
});

// Title, Year, Poster