// Navigation
const hamburger = document.querySelector(".hamburger__container");
const hamburgerItem = document.querySelectorAll(".hamburger__item");
const navUl = document.querySelector("ul");
const title = document.querySelector(".home__link");
const navLinks = document.querySelector(".nav__links");

// Accordion
const accBtns = document.querySelectorAll(".accordion-header");
const accContents = document.querySelectorAll(".accordion-body");

// Navigation
hamburger.addEventListener("click", () => {
  hamburgerItem.forEach((e) => {
    e.classList.toggle("active");
  });
  navUl.classList.toggle("active");
  title.classList.toggle("active");
  navLinks.classList.toggle("active");
});

//Sticky header

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Accordion
accBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (
      e.target.nodeName === "BUTTON" ||
      e.target.nodeName === "STRONG" ||
      e.target.nodeName === "I"
    ) {
      accContents.forEach((acc) => {
        if (
          e.target.nextElementSibling !== acc &&
          acc.classList.contains("active")
        ) {
          acc.classList.remove("active");
          accBtns.forEach((btn) => btn.classList.remove("active"));
        }
      });

      const panel = btn.nextElementSibling;
      panel.classList.toggle("active");
      btn.classList.toggle("active");
      console.log(e.target.nodeName);
    }
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
    accBtns.forEach((btn) => btn.classList.remove("active"));
    accContents.forEach((acc) => acc.classList.remove("active"));
  }
};
