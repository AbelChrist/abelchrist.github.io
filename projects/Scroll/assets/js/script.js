// get section and active element
const sections = document.querySelectorAll("section");
const active = document.querySelector(".active");

// options for observer
const options = {
	// when the observed element got 70% visible
	threshold: 0.7,
};

// Observe element
let observer = new IntersectionObserver(navCheck, options);

// Check nav when get observed
function navCheck(entries) {
	entries.forEach(entry => {
		// Get classn name of target element when get observed
		const className = entry.target.className;
		// Get active anchor by section who got observed (select by data-page attribute)
		const activeAnchor = document.querySelector(`[data-page=${className}]`);
		// get coordinat and etc of element selected
		const coordinate = activeAnchor.getBoundingClientRect();
		// get element (on nav) selected
		const direction = {
			height: coordinate.height,
			width: coordinate.width,
			top: coordinate.top,
			left: coordinate.left
		};

		// add fake border bottom when in observed page
		if(entry.isIntersecting) {
			active.style.setProperty('left', `${direction.left}px`);
			active.style.setProperty('bottom', `${direction.bottom}px`);
			active.style.setProperty('width', `${direction.width}px`);
			active.style.setProperty('margin-top', '25px');

		}
	});
}

// Observer each section
sections.forEach(section => {
	observer.observe(section);
});