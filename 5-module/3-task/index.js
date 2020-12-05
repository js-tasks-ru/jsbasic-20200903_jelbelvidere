function initCarousel() {
  let currentSlideNumber = 0;
  let slidesAmount = 4;
  let elem = document.querySelector('[data-carousel-holder]');

  let carouselInnerElem = elem.querySelector('.carousel__inner');
  let carouselArrowRight = elem.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = elem.querySelector('.carousel__arrow_left');

  update();

  elem.onclick = ({target}) => {
    if (target.closest('.carousel__arrow_right')) {
      next();
    }

    if (target.closest('.carousel__arrow_left')) {
      prev();
    }
  };

  function next() {
    currentSlideNumber++;
    update();
  }

  function prev() {
    currentSlideNumber--;
    update();
  }

  function update() {
    let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
    carouselInnerElem.style.transform = `translateX(${offset}px)`;

    if (currentSlideNumber == slidesAmount - 1) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }

    if (currentSlideNumber == 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  }


  /*const rightArrow = document.querySelector('.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const slideInner = document.querySelector('.carousel__inner');
  let slideWidth = slideInner.offsetWidth;
  // повесить ивент click на кнопки
  // условие ширины в диапазоне 0 -- -1200, то есть width < 0, width > -1200
  // в else прописать аттрибут hidden
// Задать переменную, в которую будет заноситься текущее значение offsetwidth, и от этого значения будет прибавляться и удаляться оффсетвидхddddddddddddddd

  //слайд вправо
  rightArrow.addEventListener('click', () => {
    for (let i = 0; i < 4; i++, slideWidth + slideWidth ) {
      slideInner.style.transform = `translateX(${-slideWidth + 'px'})`
      console.log(slideWidth);
    }
  });
// слайд влево
  leftArrow.addEventListener('click', () => {
    slideInner.style.transform = `translateX(0px)`
  })


  console.log(rightArrow);
  console.log(leftArrow);
  console.log(slideWidth);
  */
}
