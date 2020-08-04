
const updateNavbarState = (navbar) => {
  if (window.scrollY) {
    navbar.classList.add('navbar-pink');
  } else {
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
    
    const navbar = document.querySelector('#navbar-core');
    window.addEventListener('scroll', () => updateNavbarState(navbar));
    updateNavbarState(navbar);
});
