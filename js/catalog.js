"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const likeSlider = (elementActive) => {
    const target = document.querySelectorAll(elementActive);

    target.forEach((elem) => {
      elem.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  };

  likeSlider(".aside__top-item");

  //   const openMore = (button, obj) => {
  //     const revBtn = document.querySelector(button);
  //     const revForm = document.querySelector(obj);
  //     revBtn.addEventListener("click", () => {
  //       revBtn.classList.toggle("active");
  //       revForm.classList.toggle("active");
  //     });
  //   };

  //   openMore(".aside__more", ".aside__check-box");

  const toogleButtonMore = () => {
    const buttonMore = document.querySelectorAll(".aside__more");
    buttonMore.forEach((elem) =>
      elem.addEventListener("click", () => {
        elem.classList.toggle("active");
        elem.previousElementSibling.classList.toggle("active");
        elem.classList.contains("active") ? (elem.textContent = "Свернуть") : (elem.textContent = "Подробнее");
      }),
    );
  };
  toogleButtonMore();
});
