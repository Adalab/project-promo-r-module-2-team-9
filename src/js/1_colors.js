/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-console */

//FUNCION MANEJADORA
function showPalette(event) {
  articleRadio.classList.remove('palette1');
  articleRadio.classList.remove('palette2');
  articleRadio.classList.remove('palette3');
  articleRadio.classList.add('palette' + event.currentTarget.value);
  dataCard.palette = event.currentTarget.value;
}

//EVENTOS
paletteRadio1.addEventListener('click', showPalette);
paletteRadio2.addEventListener('click', showPalette);
paletteRadio3.addEventListener('click', showPalette);

//EJECUTAR AL CARGAR LA PÁGINA

articleRadio.classList.add('palette1');
