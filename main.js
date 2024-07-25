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

// /*  bonce hover  */
const btns = document.querySelectorAll(".status-btn");

btns.forEach((button) => {
 
  button.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.classList.add("inactive");
      this.textContent = "Inactive";
    } else if (this.classList.contains("inactive")) {
      this.classList.remove("inactive");
      this.classList.add("active");
      this.classList.add("bounce");
      this.textContent = "Active";
    }
  });
});
