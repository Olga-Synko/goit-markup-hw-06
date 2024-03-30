(() => {

    // mobile меню

    // змінні для меню
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    // змінні для модалки
    const modal = document.querySelector('.js-modal-container');
    const openModalBtn = document.querySelector('.js-modal-open');
    const closeModalBtn = document.querySelector('.js-modal-close');


    // для меню
    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-burger-open');
    };

    openMenuBtn ? openMenuBtn.addEventListener('click', toggleMenu) : null;
    closeMenuBtn ? closeMenuBtn.addEventListener('click', toggleMenu) : null;

    // для модалки
    const toggleModal = () => {
        const isModalOpen =
            openModalBtn.getAttribute('aria-expanded') === 'true' || false;
        openModalBtn.setAttribute('aria-expanded', !isModalOpen);
        modal.classList.toggle('is-open');
    };

    openModalBtn ? openModalBtn.addEventListener('click', toggleModal) : null;
    closeModalBtn ? closeModalBtn.addEventListener('click', toggleModal) : null;

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches || !mobileMenu || !openMenuBtn) return;
        mobileMenu.classList.remove('is-burger-open');
        openMenuBtn.setAttribute('aria-expanded', false);
    });
})();