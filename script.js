// Wait for the HTML to load completely
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('magicBtn');
    const text = document.getElementById('surpriseText');

    // When the button is clicked, show or hide the message
    button.addEventListener('click', () => {
        if (text.style.display === 'none') {
            text.style.display = 'block';
            button.textContent = 'Hide Message';
        } else {
            text.style.display = 'none';
            button.textContent = 'Click for a Surprise!';
        }
    });
});
