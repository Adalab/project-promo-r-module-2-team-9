/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable strict */
console.log('reset');

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  nameInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  tlfInput.value = '';
  linInput.value = '';
  githupInput.value = '';
  if (nameInput.value === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  }
  if (jobInput.value === '') {
    previewJob.innerHTML = 'Front-end developer';
  }
});

//    // primero le digo que si le doy a reset me ponga todas las casillas vacias
//    y luego que si name esta vacio que me escriba nombre apellidos y lo mismo con job
