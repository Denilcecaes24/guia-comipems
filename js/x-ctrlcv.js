// Desactivar el clic derecho
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Desactivar las combinaciones Ctrl + C y Ctrl + Shift + I
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || (e.shiftKey && e.key === 'i'))) {
        e.preventDefault();
    }
});