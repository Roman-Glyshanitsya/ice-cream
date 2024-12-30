const openButtons = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.close-button');

function toggleModal(e) {
  const button =
    e.target.closest('[data-modal]') || e.target.closest('.close-button');
  if (!button) return;

  const modalName = button.dataset.modal || button.closest('.backdrop').id;
  const modal = document.getElementById(modalName);

  if (modal) {
    modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
}

openButtons.forEach(button => {
  button.addEventListener('click', toggleModal);
});

closeButtons.forEach(button => {
  button.addEventListener('click', toggleModal);
});
