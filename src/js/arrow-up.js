(() => {
	const goToTopEl = document.querySelector('#goToTop');
	const headerEl = document.querySelector('#header');
	
	function arrowScrollTop() {
	  if (window.scrollY > 50) {
		goToTopEl.style.display = 'block';
	  } else {
		goToTopEl.style.display = 'none';
	  }
	
	  goToTopEl.addEventListener('click', () => {
		headerEl.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		 });
	  });
	}
	
	window.addEventListener('scroll', arrowScrollTop);
})();