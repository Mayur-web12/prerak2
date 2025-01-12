// Get references to the DOM elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const logo = document.getElementById('logo');


// Function to open the menu
function openMenu() {
sideMenu.classList.add('open');
logo.style.display = 'none';  // Hide logo on mobile/tablet
}

// Function to close the menu
function closeMenu() {
    sideMenu.classList.remove('open');
    logo.style.display = 'block';  // Show logo again
}
    
// Event listeners
hamburgerIcon.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
    