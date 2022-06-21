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

  const toogleButtonMore = (button, textHide = "скрыть", textShow = "показать") => {
    const buttonMore = document.querySelectorAll(button);
    buttonMore.forEach((elem) =>
      elem.addEventListener("click", () => {
        elem.classList.toggle("active");
        elem.previousElementSibling.classList.toggle("active");
        elem.classList.contains("active") ? (elem.textContent = textHide) : (elem.textContent = textShow);
      }),
    );
  };
  toogleButtonMore(".aside__more", "свернуть", "показать ещё");

  let select = function () {
    let selectHeader = document.querySelectorAll(".select__header");
    let selectItem = document.querySelectorAll(".select__item");

    selectHeader.forEach((item) => {
      item.addEventListener("click", selectToggle);
    });

    selectItem.forEach((item) => {
      item.addEventListener("click", selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle("is-active");
    }
    function selectChoose() {
      let text = this.innerText,
        select = this.closest(".select"),
        currentText = select.querySelector(".select__current");

      selectItem.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");

      currentText.innerText = text;
      select.classList.remove("is-active");
    }
  };

  select();

  // range-slider для фильтра
  const range = (() => {
    const rangeSlider = document.getElementById("range-slider");

    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [0, 10000],
        connect: true,
        step: 1,
        range: {
          min: [0],
          max: [50000],
        },
      });

      const input0 = document.getElementById("input-0");
      const input1 = document.getElementById("input-1");
      const inputs = [input0, input1];

      rangeSlider.noUiSlider.on("update", function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
        el.addEventListener("change", (e) => {
          console.log(index);
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    }

    const init = () => {};

    return {
      init,
    };
  })();

  const openFeature = (el) => {
    el = el.target;
    const body = document.querySelector("body");
    const popUpFeature = document.querySelector(".feature");
    const buttonOpen = document.querySelectorAll(".js-open-feature");
    const buttonClose = document.querySelector(".feature__close-cross");

    buttonOpen.forEach((link) => {
      if (el == link) {
        popUpFeature.classList.add("is-open");
        body.classList.add("modal-open");
      }
    });

    if (el == popUpFeature || el == buttonClose) {
      popUpFeature.classList.remove("is-open");
      body.classList.remove("modal-open");
    }
  };

  document.addEventListener("click", openFeature);

  // подсказка
  const infoHandler = (section, btns, items) => {
    let sectionClio = document.querySelector(section),
      btnsClio = sectionClio.querySelectorAll(btns),
      itemsClio = sectionClio.querySelectorAll(items);

    const changeTabs = (arr, currentIndex) => {
      arr.forEach((item) => {
        item[currentIndex].classList.toggle("active");
      });
    };

    for (let i = 0; i < btnsClio.length; i++) {
      btnsClio[i].addEventListener("click", () => {
        changeTabs([btnsClio, itemsClio], i);
      });
    }
  };

  // подсказка
  infoHandler(".product-item", ".prompt-info", ".prompt-info_bonus");

  const prodChapters = () => {
    const chaptersBox = document.querySelector(".product-chapter__box");
    const items = document.querySelectorAll(".product-chapter__item");
    const buttonMore = document.querySelector(".js-more-item");

    if (window.screen.width > 1024) {
      const hideElement = () => {
        if (chaptersBox.childNodes.length > 11) {
          buttonMore.classList.remove("js-hidden-item");
          for (let i = 11; i < chaptersBox.childNodes.length - 2; i += 2) {
            chaptersBox.childNodes[i].classList.add("js-hidden-item");
          }
        }
      };

      if (chaptersBox.childNodes.length > 11) {
        hideElement();
      }
      buttonMore.addEventListener("click", () => {
        items.forEach((el) => {
          el.classList.remove("js-hidden-item");
        });
        buttonMore.classList.toggle("active");
        if (buttonMore.classList.contains("active")) {
          buttonMore.textContent = "Свернуть";
        } else {
          buttonMore.textContent = "Подробнее";
          hideElement();
        }
      });
    } else {
      const hideElement = () => {
        if (chaptersBox.childNodes.length > 7) {
          buttonMore.classList.remove("js-hidden-item");
          for (let i = 7; i < chaptersBox.childNodes.length - 2; i += 2) {
            chaptersBox.childNodes[i].classList.add("js-hidden-item");
          }
        }
      };

      if (chaptersBox.childNodes.length > 7) {
        hideElement();
      }
      buttonMore.addEventListener("click", () => {
        items.forEach((el) => {
          el.classList.remove("js-hidden-item");
        });
        buttonMore.classList.toggle("active");
        if (buttonMore.classList.contains("active")) {
          buttonMore.textContent = "Свернуть";
        } else {
          buttonMore.textContent = "Подробнее";
          hideElement();
        }
      });
    }
  };

  prodChapters();

  // мобилка хлебные крошки развернуть
  const openReviewsForm = (button, obj) => {
    const revBtn = document.querySelector(button);
    const revForm = document.querySelector(obj);
    revBtn.addEventListener("click", () => {
      revBtn.classList.toggle("active");
      revForm.classList.toggle("active");
    });
  };

  openReviewsForm(".bx-breadcrumb__more", ".bx-breadcrumb-item_box");
  openReviewsForm(".cross", ".bx-breadcrumb-item_box");
});
