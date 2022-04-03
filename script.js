const worksContainer = document.querySelector(".fylo-works-container");
const arrow = document.querySelector(".arrow");
const error = document.querySelector(".error-text");
const form = document.querySelector(".form");
const email = document.querySelector(".email-input");
const navItems = [...document.querySelectorAll(".nav-item")];
const ctaBtn = document.querySelector(".get-started");
const emailBtn = document.querySelector(".email-btn");
const btns = [ctaBtn, emailBtn];
const navFooter = [...document.querySelectorAll(".nav-item-footer")];
const social = [...document.querySelectorAll(".social-img")];

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
  navItem.classList.add("nav-item-active");
}

function removeActiveNav(e) {
  const navItem = e.currentTarget;
  navItem.classList.remove("nav-item-active");
}

navItems.forEach((el) => el.addEventListener("touchstart", addActiveNav));
navItems.forEach((el) => el.addEventListener("touchend", removeActiveNav));

function addActiveCtaBtn(e) {
  const btn = e.currentTarget;
  btn.classList.add("active-btn");
}

function removeActiveCtaBtn(e) {
  const btn = e.currentTarget;
  btn.classList.remove("active-btn");
}

btns.forEach((el) => el.addEventListener("touchstart", addActiveCtaBtn));
btns.forEach((el) => el.addEventListener("touchend", removeActiveCtaBtn));

function addActiveNavFooter(e) {
  const navItem = e.currentTarget;
  navItem.classList.add("nav-item-footer-active");
}

function removeActiveNavFooter(e) {
  const navItem = e.currentTarget;
  navItem.classList.remove("nav-item-footer-active");
}

navFooter.forEach((el) =>
  el.addEventListener("touchstart", addActiveNavFooter)
);
navFooter.forEach((el) =>
  el.addEventListener("touchend", removeActiveNavFooter)
);

function addActiveSocial(e) {
  const social = e.currentTarget;
  if (social.classList.contains("facebook")) {
    social.classList.add("facebook-active");
  } else if (social.classList.contains("instagram")) {
    social.classList.add("instagram-active");
  } else {
    social.classList.add("twitter-active");
  }
}

function removeActiveSocial(e) {
  const social = e.currentTarget;
  if (social.classList.contains("facebook")) {
    social.classList.remove("facebook-active");
  } else if (social.classList.contains("instagram")) {
    social.classList.remove("instagram-active");
  } else {
    social.classList.remove("twitter-active");
  }
}

social.forEach((el) => el.addEventListener("touchstart", addActiveSocial));
social.forEach((el) => el.addEventListener("touchend", removeActiveSocial));
