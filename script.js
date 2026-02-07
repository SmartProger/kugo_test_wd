"use strict";

const mobileMenuBtn = document.querySelector(".mobile-menu__button");
const icon = mobileMenuBtn.querySelector("use");

const mobileMenuDropdown = document.querySelector(".mobile-menu-dropdown");

const openMenu = () => {
  if (icon.href.baseVal == "img/icons/burger.svg") {
    mobileMenuDropdown.classList.add("opened");
    icon.href.baseVal = "img/icons/close.svg";
  } else {
    mobileMenuDropdown.classList.remove("opened");
    icon.href.baseVal = "img/icons/burger.svg";
  }
};
mobileMenuBtn.addEventListener("click", openMenu);
