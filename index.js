
const updateNavbarState = (navbar) => {
  if (window.scrollY) {
    console.log("not at the top")
    navbar.classList.add('navbar-pink');
  } else {
    console.log("at the top")
    navbar.classList.remove('navbar-pink');
  }
}

$(document).ready(function () {
	$(".card")
		.delay(1800)
		.queue(function (next) {
			$(this).removeClass("hover");
			$("a.hover").removeClass("hover");
			next();
    });
    
    const navbar = document.querySelector('#navbar-wrapper');
    window.addEventListener('scroll', () => updateNavbarState(navbar));
    updateNavbarState(navbar);
});
