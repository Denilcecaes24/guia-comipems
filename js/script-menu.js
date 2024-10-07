const menuIcon = document.getElementById('menuIcon');
const menuContainer = document.getElementById('menuContainer');
const menuOptions = document.querySelectorAll('.optionInd');

let menuOpen = false;

menuIcon.addEventListener('click', () => {
menuOpen = !menuOpen;

if (menuOpen) {
    menuContainer.classList.add('open');
    menuIcon.innerHTML = '<i class="bi bi-x"></i>'; // Cambiar a icono "X"
    
} else {
    menuContainer.classList.remove('open');
    menuIcon.innerHTML = '<i class="bi bi-list-task"></i>' + '&nbsp <span class="txt_ind"> Menú </span>'; // Cambiar de nuevo a icono de hamburguesa

}
});


// Agregar el listener de click a cada opción del menú
menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        menuOpen = false; // Si una opción del menú se hace clic, cerramos el menú
        menuContainer.classList.remove('open');
        menuIcon.innerHTML = '<i class="bi bi-list-task"></i>' + '&nbsp <span class="txt_ind"> Menú </span>'; // Cambiar de nuevo a icono de hamburguesa
    });
});
    
// Función para manejar el comportamiento de los acordeones
const accordionHeaders = document.querySelectorAll('.accordion-header-custom');

accordionHeaders.forEach(header => {
header.addEventListener('click', () => {
const parentItem = header.parentElement;

// Cerrar los otros acordeones
document.querySelectorAll('.accordion-item-custom').forEach(item => {
  if (item !== parentItem) {
    item.classList.remove('open');
  }
});

// Alternar el acordeón actual
parentItem.classList.toggle('open');
});
});