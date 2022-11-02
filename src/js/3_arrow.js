/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-disable-next-line strict, no-console

//----------------FUNCIONES

//DESIGN

//Creamos función para girar la flecha mostrar y ocultar el contenido

function arrowUpDesign() {
  arrowDesign.classList.add('turn-around');
  colorContainer.classList.add('election');
}
function arrowDownDesign() {
  arrowDesign.classList.remove('turn-around');
  colorContainer.classList.remove('election');
  colorContainer.classList.add('collapsed');
}

//Creamos función manejadora para que use una función u otra dependiendo de como esté la flecha

function handleClickArrowDesign() {
  if (arrowDesign.classList.contains('turn-around')) {
    arrowDownDesign();
  } else {
    arrowUpDesign();
  }
}

//STUFFED

function arrowUpStuffed() {
  arrowStuffed.classList.add('turn-around');
  dataContainer.classList.add('stuffed');
}
function arrowDownStuffed() {
  arrowStuffed.classList.remove('turn-around');
  dataContainer.classList.remove('stuffed');
  dataContainer.classList.add('collapsed');
}

function handleClickArrowStuffed() {
  if (arrowStuffed.classList.contains('turn-around')) {
    arrowDownStuffed();
  } else {
    arrowUpStuffed();
  }
}

//SHARE

function arrowUpShare() {
  arrowShare.classList.add('turn-around');
  shareContainer.classList.add('share');
}
function arrowDownShare() {
  arrowShare.classList.remove('turn-around');
  shareContainer.classList.remove('share');
  shareContainer.classList.add('collapsed');
}

function handleClickArrowShare() {
  if (arrowShare.classList.contains('turn-around')) {
    arrowDownShare();
  } else {
    arrowUpShare();
  }
}

//----------------EVENTOS

//Creamos los eventos para los clicks de las flechas

designBar.addEventListener('click', handleClickArrowDesign);

stuffedBar.addEventListener('click', handleClickArrowStuffed);

shareBar.addEventListener('click', handleClickArrowShare);
