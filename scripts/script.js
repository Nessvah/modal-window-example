"use strict";

// Some variables

const btnsOpenModal = document.querySelectorAll(".btn__open-modal");
const btnCloseModal = document.querySelector(".btn__close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Create some functions

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Add Event Listeners to every button

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Dealing with esc keypress to close modal

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
