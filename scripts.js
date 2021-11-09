//preloader:

const preloderWrapper = document.querySelector('.preloader-wrapper');
window.addEventListener('load', () => {
  preloderWrapper.classList.add('hiddenLoader');
  setTimeout(() => {
    preloderWrapper.remove();
  }, 600)
});

//toggle menu

const main = document.querySelector('body');
const homeSection = document.querySelector('.s-home');
const aboutMeBtn = document.querySelector('.aboutMeBtn');
const navMenu = document.querySelector('.navigation');
const tableOfContent = document.querySelector('.tableOfContent');
const homeSectionTitle = document.querySelector('.s-home h1');
const logo = document.querySelector('.logo');
const about = document.querySelector('.s-about');
const head = document.querySelector('.head');
const textAbout = document.querySelector('.about-content p');
const slides = document.querySelectorAll('.price-slide');
const contactsBlock = document.querySelector('.s-contacts');
const contactsTitle = document.querySelector('.s-contacts h2');
const sections = document.querySelectorAll('section');

console.log(sections);
console.log(sections[1]);

function toggleActive(elem) {
  elem.classList.toggle('active');
};

// function toggleMenu() {
//   homeSection.classList.toggle('active');
//   navMenu.classList.toggle('active');
//   homeSectionTitle.classList.toggle('active');
//   about.classList.toggle('active');
//   head.classList.toggle('active');
// }

function toggleMenu() {
  toggleActive(homeSection);
  toggleActive(navMenu);
  toggleActive(homeSectionTitle);
  toggleActive(about);
  toggleActive(head);
  toggleActive(textAbout);
  toggleActive(contactsBlock);
  toggleActive(contactsTitle);
};


for (const slide of slides) {
  slide.addEventListener('click', () => {
    removeActiveClass()
    slide.classList.add('activated');
  })
};

function removeActiveClass() {
  slides.forEach((slide) => {
    slide.classList.remove('activated');
  })
};

function replaceScreens(id) {
  const screen = document.getElementById(id);
  sections.forEach((section) => {
    section.style.display = 'none';
    screen.style.display = 'block';
    toggleMenu();
  })
}

function changeScreen() {
  links = document.querySelectorAll('.navLink');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      replaceScreens(e.target.dataset.link)
    })
  });
};
changeScreen();

aboutMeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sections.forEach((section) => {
    section.style.display = 'none';
    sections[1].style.display = 'block';
    // toggleMenu();
  });
});