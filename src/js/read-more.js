(() => {
  //   const dots = document.querySelector('#para-dots');
  const morePara = document.querySelector('#more-para');
  const btnPara = document.querySelector('#btn');

  btnPara.addEventListener('click', onBtnClick);

  function onBtnClick() {
    if (morePara.style.display === 'none') {
      btnPara.textContent = 'Less';
      morePara.style.display = 'block';
    } else {
      btnPara.textContent = 'Read More';
      morePara.style.display = 'none';
    }
  }
})();
