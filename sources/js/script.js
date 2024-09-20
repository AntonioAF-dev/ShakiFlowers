onload = () => {
  document.body.classList.remove("container");
};

const audio = document.getElementById('music');
        const playButton = document.getElementById('playButton');

        playButton.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pausar';
            } else {
                audio.pause();
                playButton.textContent = 'Play aquí';
            }
        });