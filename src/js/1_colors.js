/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-console */

function deleteColors (){
  articleRadio.classList.remove('palette1');
  articleRadio.classList.remove('palette2');
  articleRadio.classList.remove('palette3');
}

paletteRadio1.addEventListener('click', () =>{
  console.log('click 1');
  deleteColors();
  articleRadio.classList.add('palette1');
});
paletteRadio2.addEventListener('click', () =>{
  deleteColors();
  articleRadio.classList.add('palette2');
  console.log('click 2');
});
paletteRadio3.addEventListener('click', () =>{
  deleteColors();
  articleRadio.classList.add('palette3');
  console.log('click 3');

});