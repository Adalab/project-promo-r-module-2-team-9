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
  for (const input of inputsToReset) {
    input.value = "";
  }
}
function resetImg () {
  profileImage.style.backgroundImage = ``;
  profilePreview.style.backgroundImage = ``;
}

function handleclikreset (event) {
  event.preventDefault();
  resetInput ();
  updatePreview();
  resetPaleta ();
  resetImg () ;
}

resetBtn.addEventListener('click', handleclikreset);

