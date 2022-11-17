/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-console */

function showPalette() {
  articleRadio.classList.remove('palette1');
  articleRadio.classList.remove('palette2');
  articleRadio.classList.remove('palette3');
  articleRadio.classList.add('palette' + event.currentTarget.value);
  dataCard.palette = event.currentTarget.value;

  mainRadio.classList.remove('palette1');
  mainRadio.classList.remove('palette2');
  mainRadio.classList.remove('palette3');
  mainRadio.classList.add('palette' + event.currentTarget.value);
  dataCard.palette = event.currentTarget.value;
}

paletteRadio1.addEventListener('click', showPalette);
paletteRadio2.addEventListener('click', showPalette);
paletteRadio3.addEventListener('click', showPalette);

//EJECUTAR AL CARGAR LA PÁGINA

articleRadio.classList.add('palette1');
mainRadio.classList.add('palette1');
