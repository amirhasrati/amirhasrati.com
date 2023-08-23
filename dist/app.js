// Selectors
const btn = document.querySelector('#drop-button');
const menu = document.querySelector('#drop-menu');

// Add event listener
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
