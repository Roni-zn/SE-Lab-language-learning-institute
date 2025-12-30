
  const container = document.querySelector('.teachers');
  const btnLeft = document.querySelector('.scroll-btn-left');
  const btnRight = document.querySelector('.scroll-btn-right');

  btnRight.addEventListener('click', () => {
    container.scrollBy({
      left: 360,
      behavior: 'smooth'
    });
  });

  btnLeft.addEventListener('click', () => {
    container.scrollBy({
      left: -360,
      behavior: 'smooth'
    });
  });

  console.log(container, btnLeft, btnRight);


