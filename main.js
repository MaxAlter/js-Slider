'use strict';

const refs = {
  slideBox: document.querySelectorAll('.slide-box'),

  slideBoxTest0: document.querySelectorAll('slide-box'),
  slideBoxTest1: document.querySelectorAll('slide-box'),
  slideBoxTest2: document.querySelectorAll('slide-box'),

  slidesContainer: document.querySelector('.slides-container'),
  navLink: document.querySelector('.nav-link'),
};

// click listener
refs.navLink.addEventListener('click', handleClick);

// slide width
let slideWidth = refs.slideBox[0].clientWidth;
// current slide
let currentSlide = 0;

// Set up the slider
function init() {
  refs.slideBox.forEach((box, i) => {
    box.style.left = i * 100 + '%';
  });

  refs.slideBox[0].classList.add('active');
}

init();

//
function handleClick(e) {
  // stop reloading the page
  e.preventDefault();
  // get Id (data-id) Dom element
  let idLink = e.target.dataset.id;

  // check if it exists class ".link.active"
  let currentActiveLink = e.currentTarget.querySelector('.link.active');
  // prevent click outside cerrent Link
  if (e.target === e.currentTarget) {
    return;
  }
  // if there is a class, we remove it
  if (currentActiveLink) {
    currentActiveLink.classList.remove('active');
  }
  // in any other case, add the class
  e.target.classList.add('active');
  // movement function add Id (data-id) cerrent Link
  goToSlide(idLink);
}

// movement function slids
function goToSlide(idLink) {
  refs.slidesContainer.style.transform =
    'translateX(-' + slideWidth * idLink + 'px)';

  currentSlide = idLink;
}
