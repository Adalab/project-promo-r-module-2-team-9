/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable strict */

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  nameInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  tlfInput.value = '';
  linInput.value = '';
  githupInput.value = '';
  updatePreview();
});
// inlove
//    // primero le digo que si le doy a reset me ponga todas las casillas vacias
//    y luego que si name esta vacio que me escriba nombre apellidos y lo mismo con job
