/* eslint-disable indent */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable strict */

console.log('data');

nameInput.addEventListener('input', () => {
    const name = nameInput.value;

    if (name === '') {
        previewName.innerHTML = 'Nombre Apellidos';
    }
    else {
        previewName.innerHTML = name;
    }
});

jobInput.addEventListener('input', () => {
    const job = jobInput.value;

    if (job === '') {
        previewJob.innerHTML = 'Front-end developer';
    }
    else {
        previewJob.innerHTML = job;
    }
});

