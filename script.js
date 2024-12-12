function toggleNav() {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');

    nav.classList.toggle('active'); // Toggle the 'active' class on the nav element
    hamburger.style.display = nav.classList.contains('active') ? 'none' : 'block';  // Hide the hamburger
    closeMenu.style.display = nav.classList.contains('active') ? 'block' : 'none';  // Show the close menu
}