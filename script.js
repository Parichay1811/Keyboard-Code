
const keyDisplay = document.getElementById('key-display');
const codeDisplay = document.getElementById('code-display');
const keyHistory = document.getElementById('key-history');


document.addEventListener('keydown', (event) => {
    const key = event.key === ' ' ? 'Space' : event.key; 
    const code = event.keyCode;
    keyDisplay.textContent = `You pressed: ${key}`;
    codeDisplay.textContent = `Key code: ${code}`;
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.altKey || event.shiftKey) {
        let combo = '';
        if (event.ctrlKey) combo += 'Ctrl + ';
        if (event.altKey) combo += 'Alt + ';
        if (event.shiftKey) combo += 'Shift + ';
        combo += event.key;

        keyDisplay.textContent = `You pressed: ${combo}`;
        codeDisplay.textContent = `Key code: ${event.keyCode}`;
    }
});
