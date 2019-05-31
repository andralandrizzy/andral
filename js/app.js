$(document).ready(function() {
	'use strict';
	var myNav = {
		init: function() {
			this.cacheDOM();
			this.browserWidth();
			this.bindEvents();
		},
		cacheDOM: function() {
			this.navBars = $('.navBars');
			this.rb = $('#rb');
			this.navMenu = $('#menu');
		},
		browserWidth: function() {
			$(window).resize(this.bindEvents.bind(this));
		},
		bindEvents: function() {
			var width = window.innerWidth;

			if (width < 600) {
				this.navBars.click(this.animate.bind(this));
				this.navMenu.hide();
				this.rb[0].checked = false;
			} else {
				this.resetNav();
			}
		},
		animate: function(e) {
			var checkbox = this.rb[0];
			!checkbox.checked ? this.navMenu.slideDown() : this.navMenu.slideUp();
		},
		resetNav: function() {
			this.navMenu.show();
		}
	};
	myNav.init();
});

// Modal box

const imageModal = document.getElementById('my_image');
const postModal = document.getElementById('post_modal');

const span = document.querySelector('.close');

imageModal.onclick = function() {
	postModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	postModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == postModal) {
		postModal.style.display = 'none';
	}
};

// image slider
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for next slide
	if (current.nextElementSibling) {
		// Add current to next sibling
		current.nextElementSibling.classList.add('current');
	} else {
		// Add current to start
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for prev slide
	if (current.previousElementSibling) {
		// Add current to prev sibling
		current.previousElementSibling.classList.add('current');
	} else {
		// Add current to last
		slides[slides.length - 1].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', (e) => {
	nextSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

prev.addEventListener('click', (e) => {
	prevSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

// Auto slide
if (auto) {
	// Run next slide at interval time
	slideInterval = setInterval(nextSlide, intervalTime);
}
