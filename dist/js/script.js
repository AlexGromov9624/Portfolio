const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

const counters = document.querySelectorAll('skills_ratings-ounter'),
      lines = document.querySelectorAll('skills_ratings-ounter span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});