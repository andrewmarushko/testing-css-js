const navList = document.getElementById("nav-list");
const selectList = document.querySelector('.button-group__wrapper')

// the function to remove active class in navbar
const removeClasses = (htmlCollection) => {
  Array.from(htmlCollection).forEach((item) => {
    item.classList.remove('active')
    item.classList.remove('active-select')
  })
}

//this handler adds active styles for the nav item
const navListHandler = (e) => {
  removeClasses(navList.children)
  if(e.target.tagName==='A') {
    const targetListItem= e.target.parentElement
    targetListItem.classList.add("active")
  }
  if(e.target.tagName==='LI') {
    e.target.classList.add("active")
  }
};
//
navList.addEventListener("click", navListHandler)

const selectListHandler = (e) => {
  if(e.target.tagName==='BUTTON') {
    removeClasses(selectList.children)
    e.target.classList.add("active-select")
  }
};

selectList.addEventListener("click", selectListHandler);

// toggle burger menu
const navItems = document.querySelectorAll(".nav-item");
const burgerMenu = document.querySelector(".header__burger");

const burgerMenuHandler = () => {
  navItems.forEach((item) => {
    item.classList.toggle("hidden");
  });
};

burgerMenu.addEventListener("click", burgerMenuHandler);

//slider

const slidesHero = document.querySelectorAll('.slider__item')
const sliderHeroWrapper = document.querySelector('.slider__nav')
const sliderHeroNavs = document.querySelectorAll('.slider__nav__item');

const slidesStories = document.querySelectorAll('.slider__item--stories')
const sliderStoriesWrapper = document.querySelector('#stories-nav-wrapper')
const sliderStoriesNavs = document.querySelectorAll('.slider__nav__item--stories');


const getSelectedImg = (slides, sliderNavs, e) => {
  if(e.target.tagName==='SPAN'){
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
      sliderNavs.forEach(navItem => {
        navItem.classList.remove("active-nav")
      });
      if(i==e.target.dataset.indexNumber) slides[i].style.display = 'flex'
      e.target.classList.add("active-nav")
    }
  }
}

sliderHeroWrapper.addEventListener('click', (evt) => getSelectedImg(slidesHero, sliderHeroNavs, evt))
sliderStoriesWrapper.addEventListener('click', (evt) => getSelectedImg(slidesStories, sliderStoriesNavs, evt))