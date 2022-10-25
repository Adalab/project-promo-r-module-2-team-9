/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-disable-next-line strict, no-console

//FUNCIONES

//Design
function arrowUp() {
  arrowDesign.classList.add('turn-around');
}
function arrowDown() {
  arrowDesign.classList.remove('turn-around');
  colorContainer.classList.remove('option');
  colorContainer.classList.add('collapsed');
}

function handleClickArrow() {
  if (arrowDesign.classList.contains('turn-around')) {
    arrowDown();
  } else {
    arrowUp();
  }
}

//EVENTOS
arrowDesign.addEventListener('click', handleClickArrow);

arrowStuffed.addEventListener('click', () => {
  console.log('btn arrowStuffed');
});

arrowShare.addEventListener('click', () => {
  console.log('btn arrowShare');
});
