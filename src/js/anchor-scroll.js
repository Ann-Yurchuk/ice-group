import $ from 'jquery';

const mobileMenu = document.querySelector('.js-menu-container');
const closeMenuBtn = document.querySelector('.js-close-menu');

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
    if (
      mobileMenu.classList.value !== 'mobile-menu js-menu-container is-open'
    ) {
      return;
    }
    mobileMenu.classList.toggle('is-open');
    closeMenuBtn.classList.toggle('is-open');
  });
});







