    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileContactButton = document.getElementById('mobileContactButton');
    const mobileContactSubmenu = document.getElementById('mobileContactSubmenu');
      
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
      
    mobileContactButton.addEventListener('click', () => {
        mobileContactSubmenu.classList.toggle('hidden');
    });

    const navbar = document.querySelector('.navbar-cover');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
    });