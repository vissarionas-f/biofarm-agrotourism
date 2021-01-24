let button = document.querySelector('button');
let nav = document.querySelector('nav');
let dropdown_items = document.querySelector('.navbar-collapse');
let navitems = document.querySelectorAll('.navbar-collapse #navitems');

//when mobile menu button is clicked
button.addEventListener('click', function() {
	nav.classList.toggle('mobilemenu'); //same bg-color with navbar
	dropdown_items.classList.toggle('dropdown_items'); //items are centered

	// In mobile menu => auto close navbar when click on navlinks
	for (let i of navitems) {
		i.addEventListener('click', function() {
			button.click();
		});
	}
});
