/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable strict */
const btnShare = document.querySelector('.js-btn-share');

btnShare.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(`https://awesome-profile-cards.herokuapp.com/card`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataCard),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    });
});
