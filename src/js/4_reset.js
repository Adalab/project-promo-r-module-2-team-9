/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable strict */
function check() {
  paletteRadio1.checked = true;
  mainRadio.classList.add('palette1');
}
function resetPaleta () {
  articleRadio.classList.remove('palette1');
  articleRadio.classList.remove('palette2');
  articleRadio.classList.remove('palette3');
  mainRadio.classList.remove('palette1');
  mainRadio.classList.remove('palette2');
  mainRadio.classList.remove('palette3');
  articleRadio.classList.add('palette1');
  mainRadio.classList.add('palette1');

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
function resetCreated() {
  btnCreateCard.classList.remove('change-color-btn');
  iconBtnCreated.classList.remove('change-color-icon');
  shareCreated.classList.add('collapsed');
  shareCreated.classList.remove('created');
}
function handleclikreset (event) {
  event.preventDefault();
  resetInput ();
  updatePreview();
  resetPaleta ();
  resetImg () ;
  localStorage.removeItem('userData');
  resetCreated();
}

resetBtn.addEventListener('click', handleclikreset);

