/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable strict */
function check() {
  paletteRadio1.checked = true;
}

function resetPaleta () {
  articleRadio.classList.remove('palette1');
  articleRadio.classList.remove('palette2');
  articleRadio.classList.remove('palette3');
  articleRadio.classList.add('palette1');
  check ();
//  let paletteRadio1 = paletteRadio1.value;
}

function resetInput () {
  nameInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  tlfInput.value = '';
  linInput.value = '';
  githupInput.value = '';
}

function handleclikreset (event) {
  event.preventDefault();
  resetInput ();
  updatePreview();
  resetPaleta ();
}



resetBtn.addEventListener('click', handleclikreset);

