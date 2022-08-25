(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onModalOpen);
  refs.closeModalBtn.addEventListener('click', removeModal);
  refs.modal.addEventListener('click', onEscKeyPress);

  function onModalOpen() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('modal-open');
    refs.modal.classList.remove('backdrop--is-hidden');
  }
  function removeModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('modal-open');
    refs.modal.classList.add('backdrop--is-hidden');
  }
  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      removeModal();
    }
    if (event.currentTarget === event.target) {
      removeModal();
    }
  }
})();
