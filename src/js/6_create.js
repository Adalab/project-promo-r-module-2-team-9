/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

showData()

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
      let data = responseJSON.cardURL;
      link.innerHTML = data;
      link.href = data;
      twitter.href = `https://twitter.com/intent/tweet?text=Aquí%20podéis%20ver%20mi%20tarjeta%20virtual&url=${data}`;
      localStorage.setItem('userData', JSON.stringify(dataCard));
    });
}

// Mostramos los datos guardados del localStorage al cargar la página
function showData() {
  const saveDataCard = JSON.parse(localStorage.getItem('userData'));
  console.log(saveDataCard);
  if (saveDataCard !== null){ 
    dataCard = saveDataCard;
    renderInputsForm();
  }
}

function renderInputsForm() {
  for (const valueItem of dataCard) {
    dataCard.name = valueItem.name;
  }
}

// Se añaden las características CSS a los elementos llamados para cambiar la apariencia del botón y desplegar la secciín link de twitter.

function showCreated() {
  btnCreateCard.classList.add('change-color-btn');
  iconBtnCreated.classList.add('change-color-icon');
  shareCreated.classList.remove('collapsed');
  shareCreated.classList.add('created');
}

btnCreateCard.addEventListener('click', handleCreated);
