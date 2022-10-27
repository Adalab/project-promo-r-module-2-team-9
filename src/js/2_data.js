/* eslint-disable indent */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable strict */

// console.log('data');

let name = '';
let job = '';
let email = '';
let tlf = '';

// const name = nameInput.value;
// const job = jobInput.value;
// const email = emailInput.value;
// const tlf = tlfInput.value;

function updatePreview() {
    if (name === '') {
        previewName.innerHTML = 'Nombre Apellidos';
    }else {
        previewName.innerHTML = name;
    }
    if (job === '') {
        previewJob.innerHTML = 'Front-end developer';
    }else {
        previewJob.innerHTML = job;
    }
    if (email === '') {
        previewEmail.href = '';
    } else {
        previewEmail.href = `mailto: ${email}`;
    }
    if (tlf === '') {
        previewTlf.href = '';
    } else {
        previewTlf.href = `${tlf}`;
    }
}

nameInput.addEventListener('input', () => {
    updatePreview();
});

jobInput.addEventListener('input', () => {
    updatePreview();
});

emailInput.addEventListener('input', () => {
    updatePreview();
});

tlfInput.addEventListener('input', () => {
    updatePreview();
});


