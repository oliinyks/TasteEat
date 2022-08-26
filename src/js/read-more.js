(() => {
  const dots = document.querySelector('#para-dots');
  const morePara = document.querySelector('#more-para');
  const btnPara = document.querySelector('#btn');

  btnPara.addEventListener('click', onBtnClick);

  function onBtnClick() {
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnPara.innerHTML = 'Read More';
      morePara.style.display = 'block';
    } else {
      dots.style.display = 'none';
      btnPara.innerHTML = 'Less';
      morePara.style.display = 'inline';
    }
  }
})();
