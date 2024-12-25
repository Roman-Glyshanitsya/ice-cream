const franchiseButton = document.getElementById('franchise-button');
const franchiseCloseButton = document.getElementById('franchise-close-button');
const franchiseModal = document.getElementById('franchise-modal');

franchiseButton.addEventListener('click', toggleModal);
franchiseCloseButton.addEventListener('click', toggleModal);

function toggleModal() {
  franchiseModal.classList.toggle('is-hidden');
  document.classList.toggle('no-scroll');
}
