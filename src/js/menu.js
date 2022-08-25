(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', toggleMenu);
  mobileMenuRef.addEventListener('click', removeMenu);

  function toggleMenu() {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
  }
  function removeMenu(event) {
    if (event.target.classList.contains('mobile-menu__link')) {
      return toggleMenu();
	 }
	  if (!event.target.classList.contains('mobile-menu__items')) {
      return toggleMenu();
    }
	  console.log(event)
  }
})();
