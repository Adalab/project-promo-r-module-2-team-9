/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-disable-next-line strict, no-console

//----------------FUNCIONES

//DESIGN

//Creamos función para girar la flecha mostrar y ocultar el contenido

function arrowUpDesign() {
  //cuando mostramos opcion

  //giramos la flecha hacía arriba y le añadimos su clase (turn around y la clase de color containter = election)
  arrowDesign.classList.add('turn-around');
  colorContainer.classList.add('election');

  //para ocultar las otras secciones quitamos las clases de las otras (stuffed y share) y las añadimos collapse
  dataContainer.classList.remove('stuffed');
  shareContainer.classList.remove('share');

  dataContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');

  //volvemos a girar la flechas
  arrowStuffed.classList.remove('turn-around');
  arrowShare.classList.remove('turn-around');
}
function arrowDownDesign() {
  //cuando volvemos a pulsar reasignamos los valores por defecto (flecha hacia abajo, sin su clase y colapsado)
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

  //ocultamos y quitamos clases a las otras secciones, color y share
  colorContainer.classList.remove('election');
  shareContainer.classList.remove('share');

  colorContainer.classList.add('collapsed');
  dataContainer.classList.add('collapsed');

  //giramos las otras flechas
  arrowDesign.classList.remove('turn-around');
  arrowShare.classList.remove('turn-around');
}

function arrowDownStuffed() {
  //se restablecen valores por defecto al volver a pulsar
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

  //ocultamos y quitamos clases a las otras secciones, color y stuffed
  colorContainer.classList.remove('election');
  dataContainer.classList.remove('stuffed');

  colorContainer.classList.add('collapsed');
  dataContainer.classList.add('collapsed');

  //giramos las otras flechas
  arrowDesign.classList.remove('turn-around');
  arrowStuffed.classList.remove('turn-around');
}

function arrowDownShare() {
  //se restablecen valores por defecto al volver a pulsar
  arrowShare.classList.remove('turn-around');
  shareContainer.classList.remove('share');
  shareContainer.classList.add('collapsed');
  shareCreated.classList.add('collapsed');
  shareCreated.classList.remove('created');
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
