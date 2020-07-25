$(document).ready(function () {
	$(".card")
		.delay(1800)
		.queue(function (next) {
			$(this).removeClass("hover");
			$("a.hover").removeClass("hover");
			next();
		});
});

const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('#navbar-wrapper');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY) {
        navbar.classList.add('navbar-pink');
      } else {
        navbar.classList.remove('navbar-pink');
      }
    });
  }
}
