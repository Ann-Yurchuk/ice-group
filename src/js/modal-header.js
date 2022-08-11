(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-button]'),
    closeModalBtn: document.querySelector('[data-modal-close-button]'),
    modal: document.querySelector('[data-modal-hero]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    	body.classList.toggle("no-scroll");

  }
})();