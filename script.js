const worksContainer = document.querySelector(".fylo-works-container");
const arrow = document.querySelector(".arrow");
const error = document.querySelector(".error-text");
const form = document.querySelector(".form");
const email = document.querySelector(".email-input");
const navItems = [...document.querySelectorAll(".nav-item")];

function addActiveArrow() {
  arrow.classList.add("arrow-active");
}
function removeActiveArrow() {
  arrow.classList.remove("arrow-active");
}

worksContainer.addEventListener("mouseover", addActiveArrow);
worksContainer.addEventListener("mouseout", removeActiveArrow);

worksContainer.addEventListener("touchstart", addActiveArrow);
worksContainer.addEventListener("touchend", removeActiveArrow);

function validateForm(e) {
  const emailValue = email.value;
  if (!emailValue.includes("@") && emailValue !== "") {
    error.classList.remove("hide");
  } else {
    error.classList.add("hide");
  }
}

form.addEventListener("keyup", validateForm);

function addActiveNav(e) {
  const navItem = e.currentTarget;
  console.log(navItem);
  navItem.classList.add("nav-item-active");
}

function addRemoveNav(e) {
  const navItem = e.currentTarget;
  navItem.classList.remove("nav-item-active");
}

navItems.forEach((el) => el.addEventListener("touchstart", addActiveNav));
navItems.forEach((el) => el.addEventListener("touchstart", addRemoveNav));
