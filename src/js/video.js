const playButton = document.querySelector('.play__button');
const videoFrame = document.querySelector('.video-frame');
const closeButton = document.getElementById('read-more-close');

playButton.addEventListener('click', () => {
  playButton.style.display = 'none';
  videoFrame.style.display = 'block';
  videoFrame.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    '*'
  );
});

closeButton.addEventListener('click', () => {
  videoFrame.style.display = 'none';
  playButton.style.display = 'block';
  videoFrame.src = videoFrame.src.split('&autoplay=1')[0];
});
