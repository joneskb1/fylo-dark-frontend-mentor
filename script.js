const worksContainer = document.querySelector(".fylo-works-container");
const arrow = document.querySelector(".arrow");
const error = document.querySelector(".error-text");
const form = document.querySelector(".form");
const email = document.querySelector(".email-input");

function addClass() {
  arrow.classList.add("arrow-active");
}
function removeClass() {
  arrow.classList.remove("arrow-active");
}

worksContainer.addEventListener("mouseover", addClass);
worksContainer.addEventListener("mouseout", removeClass);

worksContainer.addEventListener("touchstart", addClass);
worksContainer.addEventListener("touchend", removeClass);

function validateForm(e) {
  const emailValue = email.value;
  if (!emailValue.includes("@") && emailValue !== "") {
    error.classList.remove("hide");
  } else {
    error.classList.add("hide");
  }
}

form.addEventListener("keyup", validateForm);
