function moreLess(e) {
  e.preventDefault();
  var dots = document.querySelector('#para-dots');
  var morePara = document.querySelector('#more-para');
  var btnPara = document.querySelector('#btn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnPara.innerHTML = 'Read More';
    morePara.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnPara.innerHTML = 'Less';
    morePara.style.display = 'inline';
  }
}
