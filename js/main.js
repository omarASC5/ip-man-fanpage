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