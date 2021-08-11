// MOBILE MENU
const toggler = document.querySelector('.mobile-menu');
const nav = document.querySelector('.navbar-list');
const headerLogo = document.querySelector('.header-logo');

toggler.addEventListener('click', () => {
	nav.classList.toggle('active');

	if (nav.classList.contains('active')) {
		headerLogo.style.color = 'white';
	} else {
		headerLogo.style.color = '#121212';
	}
});

// BACKGROUND REMOVE
const listItems = Array.from(document.querySelectorAll('.navbar-list-item'));

listItems.forEach((item) => {
	item.addEventListener('click', () => {
		nav.classList.remove('active');
		headerLogo.style.color = '#121212';
	});
});
