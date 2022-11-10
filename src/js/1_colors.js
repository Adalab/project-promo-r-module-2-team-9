/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-console */

articleRadio.classList.add('palette1');

function deleteColors (){
  articleRadio.classList.remove('palette1');
  articleRadio.classList.remove('palette2');
  articleRadio.classList.remove('palette3');
}

paletteRadio1.addEventListener('click', (event) =>{
  deleteColors();
  articleRadio.classList.add(event.currentTarget.value);
});
paletteRadio2.addEventListener('click', (event) =>{
  deleteColors();
  articleRadio.classList.add(event.currentTarget.value);
});
paletteRadio3.addEventListener('click', (event) =>{
  deleteColors();
  articleRadio.classList.add(event.currentTarget.value);
});