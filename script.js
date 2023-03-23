const hamburger = document.querySelector(".hamburger__container");
const hamburgerItem = document.querySelectorAll(".hamburger__item");
const navUl = document.querySelector("ul");
const title = document.querySelector('.home__link');
const navLinks = document.querySelector('.nav__links') 




hamburger.addEventListener("click", () => {
  hamburgerItem.forEach((e) => {
    e.classList.toggle("active");
  });
    navUl.classList.toggle("active");
    title.classList.toggle('active');
    navLinks.classList.toggle('active')
});
