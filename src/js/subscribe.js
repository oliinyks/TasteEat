import Notiflix from 'notiflix';

const subscribeEl = document.querySelector('.subscribe__form');

subscribeEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(e) {
  e.preventDefault();
  Notiflix.Notify.success('You have just reserved a table');
  e.currentTarget.reset();
}