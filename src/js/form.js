import Notiflix from 'notiflix';

const formEl = document.querySelector('#form');

formEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(e) {
  e.preventDefault();
  Notiflix.Notify.success('You have just reserved a table');
  e.currentTarget.reset();
}
