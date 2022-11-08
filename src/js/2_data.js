/* eslint-disable indent */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable strict */

const dataCard = {
  name: '',
  job: '',
  photo: '',
  email: '',
  tlf: '',
  github: '',
  linkedin: '',
};

function updatePreview() {
  dataCard.name = nameInput.value;
  dataCard.job = jobInput.value;
  dataCard.email = emailInput.value;
  dataCard.tlf = tlfInput.value;
  dataCard.github = githupInput.value;
  dataCard.linkedin = linInput.value;

  if (dataCard.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = dataCard.name;
  }
  if (dataCard.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = dataCard.job;
  }
  if (dataCard.email === '') {
    previewEmail.href = '';
  } else {
    previewEmail.href = `mailto:${dataCard.email}`;
  }
  if (dataCard.tlf === '') {
    previewTlf.href = '';
  } else {
    previewTlf.href = `tel:${dataCard.tlf}`;
  }
  if (dataCard.github === '') {
    previewGit.href = '';
  } else {
    previewGit.href = `https://github.com/${dataCard.github}`;
  }
  if (dataCard.linkedin === '') {
    previewLin.href = '';
  } else {
    previewLin.href = `${dataCard.linkedin}`;
  }
}

nameInput.addEventListener('input', updatePreview);
jobInput.addEventListener('input', updatePreview);
tlfInput.addEventListener('input', updatePreview);
emailInput.addEventListener('input', updatePreview);
linInput.addEventListener('input', updatePreview);
githupInput.addEventListener('input', updatePreview);
