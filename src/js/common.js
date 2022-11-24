const navList = document.getElementById("nav-list");

// the function to remove active class in navbar
const removeClasses = (htmlCollection) => {
  Array.from(htmlCollection).forEach((item) => {
    item.classList.remove('active')
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

navList.addEventListener("click", navListHandler)

//---------------

// toggle burger menu
const navItems = document.querySelectorAll(".nav-item");
const burgerMenu = document.querySelector(".header__burger");

const burgerMenuHandler = () => {
  navItems.forEach((item) => {
    item.classList.toggle("hidden");
  });
};

burgerMenu.addEventListener("click", burgerMenuHandler);
