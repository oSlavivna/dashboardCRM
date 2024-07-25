"use strict";

const btnClose = document.querySelector(".btn--close");
const openBtn = document.querySelector(".open-btn");
const sidebar = document.querySelector(".sidebar");

btnClose.addEventListener("click", function () {
  sidebar.classList.add("hidebar");
});

openBtn.addEventListener("click", function () {
  sidebar.classList.remove("hidebar");
  sidebar.classList.add("hidden");
});
