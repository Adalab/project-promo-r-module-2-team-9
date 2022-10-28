/* eslint-disable indent */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable strict */

function updatePreview() {
    const name = nameInput.value;
    const job = jobInput.value;
    const email = emailInput.value;
    const tlf = tlfInput.value;

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
        previewEmail.href = `mailto:${email}`;
    }
    if (tlf === '') {
        previewTlf.href = '';
    } else {
        previewTlf.href = `tel:${tlf}`;
    }
}

nameInput.addEventListener('input', updatePreview);

jobInput.addEventListener('input', () => {
    updatePreview();
});

emailInput.addEventListener('input', () => {
    updatePreview();
});

tlfInput.addEventListener('input', () => {
    updatePreview();
});


