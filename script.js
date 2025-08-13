const btnToggleTheme = document.getElementById('btnToggleTheme');
const dateInput = document.getElementById('date');
const form = document.getElementById('reservationForm');

btnToggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    btnToggleTheme.textContent = 'Modo claro';
  } else {
    btnToggleTheme.textContent = 'Modo oscuro';
  }
});


const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Por favor, completa todos los campos requeridos correctamente.');
  } else {
    e.preventDefault(); // 
    alert('¡Gracias por reservar con nosotros! Pronto te contactaremos.');
  }
});
