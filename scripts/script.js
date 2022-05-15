"use strict";

// Some variables

const btnsOpenModal = document.querySelectorAll(".btn__open-modal");
const btnCloseModal = document.querySelector(".btn__close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Add Event Listeners to every button

for (i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Create some functions

const openModal = function () {
  modal.classList.remove(".hidden");
  overlay.classList.remove(".hidden");
};

const closeModal = function () {
  modal.classList.add(".hidden");
  overlay.classList.add(".hidden");
};
