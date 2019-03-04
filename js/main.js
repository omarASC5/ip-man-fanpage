let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
   (prevScrollpos > currentScrollPos) ? 
	document.getElementById("navbar").classList.remove('shrink') :
    document.getElementById("navbar").classList.add('shrink');
  	prevScrollpos = currentScrollPos;
}