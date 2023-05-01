document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://tetris.com/play-tetris';
    iframe.width = '640';
    iframe.height = '640';
    iframe.style.border = 'none';
    gameContainer.appendChild(iframe);
});
