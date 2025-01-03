export const initMobileMenu = () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav__menu');
  const closeBtn = document.querySelector('.mobile-close');
  const overlay = document.querySelector('.mobile-overlay');

  const toggleMenu = () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  };

  menuBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
};
