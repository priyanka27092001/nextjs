function updateNavbar() {
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 100; // Adjust this value to determine when to change the navbar

    // Check the current scroll position
    if (window.scrollY >= scrollThreshold) {
      navbar.classList.add('scrolled'); // Add the 'scrolled' class to change the navbar style
    } else {
      navbar.classList.remove('scrolled'); // Remove the 'scrolled' class to revert to the default style
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', updateNavbar);