document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('[id^="openModalButton"]');
    const modals = document.querySelectorAll('[id^="myModal"]');
    const modalCloses = document.querySelectorAll('.modal-close');
  
    modalButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        modals[index].classList.add('is-active');
      });
    });
  
    modalCloses.forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        modals.forEach((modal) => {
          modal.classList.remove('is-active');
        });
      });
    });
  
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modals.forEach((modal) => {
          modal.classList.remove('is-active');
        });
      }
    });
  });
  