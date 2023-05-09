(() =>
{
    let openButton = document.querySelector('.js-open-menu');
    let closeButton = document.querySelector('.js-close-menu');
    let menu = document.querySelector('.mob-menu');
    openButton.addEventListener('click', () => {
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
        menu.style.display = 'block';
    });
       closeButton.addEventListener('click', () => {
        closeButton.style.display = 'none';
        openButton.style.display = 'block';
        menu.style.display = 'none';
    });
})();

// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
//
//     const toggleMenu = () => {
//         const isMenuOpen =
//             openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//         openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//         mobileMenu.classList.toggle('is-open');
//
//         const scrollLockMethod = !isMenuOpen
//             ? 'disableBodyScroll'
//             : 'enableBodyScroll';
//         bodyScrollLock[scrollLockMethod](document.body);
//     };
//
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
//
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//         if (!e.matches) return;
//         mobileMenu.classList.remove('is-open');
//         openMenuBtn.setAttribute('aria-expanded', false);
//         bodyScrollLock.enableBodyScroll(document.body);
//     });
// })();