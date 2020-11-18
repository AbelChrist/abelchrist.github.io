// Elements
const menuToggle = document.querySelector('.menu-toggle input');
const navList = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// when checkbox is clicked
menuToggle.addEventListener('click', () => {
	// Adding class
	navList.classList.toggle("slide");
	nav.classList.toggle("slide");
});