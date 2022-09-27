const formEl = document.querySelector('#form');

formEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
}
