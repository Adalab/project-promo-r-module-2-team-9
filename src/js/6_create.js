/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

function handleCreated(event) {
  event.preventDefault();
  showCreated();
  saveInfo();
}

function saveInfo() {
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST', // Para enviar datos
    body: JSON.stringify(dataCard),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
    });
}

// Se añaden las características CSS a los elementos llamados para cambiar la apariencia del botón y desplegar la secciín link de twitter.

function showCreated() {
  btnCreateCard.classList.add('change-color-btn');
  iconBtnCreated.classList.add('change-color-icon');
  shareCreated.classList.remove('collapsed');
  shareCreated.classList.add('created');
}

btnCreateCard.addEventListener('click', handleCreated);
