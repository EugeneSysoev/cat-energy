// МЕНЮ НАВИГАЦИИ
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

if (navMain && navToggle) {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened');
  });
}

// СЛАЙДЕР ДО / ПОСЛЕ
const sliderContainer = document.querySelector('.slider');
const sliderRange = document.querySelector('.slider__range');

if (sliderContainer && sliderRange) {
  sliderRange.addEventListener('input', (evt) => {
    sliderContainer.style.setProperty('--slider-pos', `${evt.target.value}%`);
  });
}
