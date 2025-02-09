const hearts = ['❤','💕','💗','💕','💗','❤'];

function showLove() {
    const numHearts = 15;
    
    for (let i = 0; i < numHearts; i++) {
        const love = document.createElement('div');
        love.classList.add('love');
        love.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        document.body.appendChild(love);

        const maxWidth = window.innerWidth - 50;
        const maxHeight = window.innerHeight - 50;
        
        const x = Math.random() * maxWidth;
        const y = Math.random() * maxHeight;
        
        love.style.left = `${x}px`;
        love.style.top = `${y}px`;

        // Add slight random rotation
        const rotation = Math.random() * 360;
        love.style.transform = `rotate(${rotation}deg)`;

        setTimeout(() => {
            love.style.opacity = 1;
            love.style.animation = 'loveAnim 5s forwards, moveAnim 5s infinite';
        }, i * 150);

        // Remove hearts after animation to prevent memory leaks
        setTimeout(() => {
            love.remove();
        }, 10000);
    }

    const messageContainer = document.getElementById('messageContainer');
    messageContainer.classList.remove('hidden');
}

function moveNo() {
    const btnNo = document.querySelector('.no');
    const safeMargin = 20;
    
    const maxWidth = window.innerWidth - btnNo.offsetWidth - safeMargin;
    const maxHeight = window.innerHeight - btnNo.offsetHeight - safeMargin;
    
    const x = Math.max(safeMargin, Math.random() * maxWidth);
    const y = Math.max(safeMargin, Math.random() * maxHeight);
    
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// Ensure "no" button stays within viewport on window resize
window.addEventListener('resize', () => {
    const btnNo = document.querySelector('.no');
    if (btnNo) {
        moveNo();
    }
});