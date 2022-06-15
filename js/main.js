"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const toogleButtonMore = () => {
    const buttonMore = document.querySelectorAll(".tab__more");
    buttonMore.forEach((elem) =>
      elem.addEventListener("click", () => {
        elem.classList.toggle("active");
        elem.previousElementSibling.classList.toggle("active");
        elem.classList.contains("active") ? (elem.textContent = "Свернуть") : (elem.textContent = "Подробнее");
      }),
    );
  };
  toogleButtonMore();

  const openReviewsForm = (button, obj) => {
    const revBtn = document.querySelector(button);
    const revForm = document.querySelector(obj);
    revBtn.addEventListener("click", () => {
      revBtn.classList.toggle("active");
      revForm.classList.toggle("active");
    });
  };

  openReviewsForm(".tab__rev-btn", ".tab__form-rev");
  openReviewsForm(".bx-breadcrumb__more", ".bx-breadcrumb-item_box");

  const calcProductСounter = () => {
    const formProduct = document.querySelectorAll(".product-count");

    formProduct.forEach((elem) => {
      const isPlus = elem.querySelector(".plus");
      const isMinus = elem.querySelector(".minus");
      const quantityInputProduct = elem.querySelector(".count");

      isPlus.addEventListener("click", () => {
        quantityInputProduct.value++;
      }),
        isMinus.addEventListener("click", () => {
          if (quantityInputProduct.value <= 1) {
            return;
          }
          quantityInputProduct.value--;
        });
    });
  };

  calcProductСounter();

  // лайки в отзывах
  const buttonLike = () => {
    const buttonLike = document.querySelector(".js-like");
    const outputLike = document.querySelector(".tab-svg__count.like");
    const buttonDislike = document.querySelector(".js-dislike");
    const outputDislike = document.querySelector(".tab-svg__count.dislike");

    buttonLike.addEventListener("click", () => {
      outputLike.textContent != 1 && outputDislike.textContent != 1 ? (outputLike.textContent = 1) : "";
    });

    buttonDislike.addEventListener("click", () => {
      outputDislike.textContent != 1 && outputLike.textContent != 1 ? (outputDislike.textContent = 1) : "";
    });
  };

  buttonLike();

  // фасовка выпадашка
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

  // выпадашки адресов
  function delegateAdress(el) {
    el = el.target;
    let scrollHeight = el.closest(".tab__address-item");

    if (el.closest(".tab__address-item") && !el.closest(".tab__address-item.active")) {
      document.querySelectorAll(".tab__address-item").forEach(function (el) {
        el.classList.remove("active");
        let scrollHeight = el.closest(".tab__address-item");
        scrollHeight.querySelector(".tab__address-inner").style.maxHeight = null;
      });
      let scrollHeight = el.closest(".tab__address-item");
      el.closest(".tab__address-item").classList.add("active");
      scrollHeight.querySelector(".tab__address-inner").style.maxHeight =
        scrollHeight.querySelector(".tab__address-inner").scrollHeight + "px";
    } else if (el.closest(".tab__address-item") && !el.closest(".tab__address-inner")) {
      el.closest(".tab__address-item").classList.remove("active");
      let scrollHeight = el.closest(".tab__address-item");
      scrollHeight.querySelector(".tab__address-inner").style.maxHeight = null;
    }
    if (!el.closest(".tab__address-item")) {
      document.querySelectorAll(".tab__address-item").forEach(function (el) {
        el.classList.remove("active");
        let scrollHeight = el.closest(".tab__address-item");
        scrollHeight.querySelector(".tab__address-inner").style.maxHeight = null;
      });
    }
  }
  document.addEventListener("click", delegateAdress);

  function delegateAdressPickup(el) {
    el = el.target;
    let scrollHeight = el.closest(".tab__address-item_pickup");

    if (el.closest(".tab__address-item_pickup") && !el.closest(".tab__address-item_pickup.active")) {
      document.querySelectorAll(".tab__address-item_pickup").forEach(function (el) {
        el.classList.remove("active");
        let scrollHeight = el.closest(".tab__address-item_pickup");
        scrollHeight.querySelector(".tab__address-inner_pickup").style.maxHeight = null;
      });
      let scrollHeight = el.closest(".tab__address-item_pickup");
      el.closest(".tab__address-item_pickup").classList.add("active");
      scrollHeight.querySelector(".tab__address-inner_pickup").style.maxHeight =
        scrollHeight.querySelector(".tab__address-inner_pickup").scrollHeight + "px";
    } else if (el.closest(".tab__address-item_pickup") && !el.closest(".tab__address-inner_pickup")) {
      el.closest(".tab__address-item_pickup").classList.remove("active");
      let scrollHeight = el.closest(".tab__address-item_pickup");
      scrollHeight.querySelector(".tab__address-inner_pickup").style.maxHeight = null;
    }
    if (!el.closest(".tab__address-item_pickup")) {
      document.querySelectorAll(".tab__address-item_pickup").forEach(function (el) {
        el.classList.remove("active");
        let scrollHeight = el.closest(".tab__address-item_pickup");
        scrollHeight.querySelector(".tab__address-inner_pickup").style.maxHeight = null;
      });
    }
  }
  document.addEventListener("click", delegateAdressPickup);

  function delegateInfoPropmt(el) {
    el = el.target;

    if (!el.closest(".prompt-info_stok.active, .prompt-info_stock.active ")) {
      document.querySelector(".prompt-info_stock").classList.remove("active");
    }

    if (el.closest(".prompt-info_stok")) {
      document.querySelector(".prompt-info_stock").classList.add("active");
    }

    if (!el.closest(".prompt-info_label.active, .info-bonus_prod.active ")) {
      document.querySelector(".info-bonus_prod").classList.remove("active");
    }

    if (el.closest(".prompt-info_label")) {
      document.querySelector(".info-bonus_prod").classList.add("active");
    }

    // if (!el.closest(".prompt-info_analog.active, .info_bonus-analog.active ")) {
    //   document.querySelector(".info_bonus-analog").classList.remove("active");
    // }
    // if (el.closest(".prompt-info_analog")) {
    //   document.querySelector(".info_bonus-analog").classList.add("active");
    // }
  }
  document.addEventListener("click", delegateInfoPropmt);

  // slider icon licke and comparison
  const likeSlider = (elementActive) => {
    const target = document.querySelectorAll(elementActive);

    target.forEach((elem) => {
      elem.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  };

  likeSlider(".product-offers__heart");
  likeSlider(".product-offers__comparison");
  likeSlider(".options-icon__heart");
  likeSlider(".options-icon__comparison");

  // табы
  const tabsHandler = (section, btns, items) => {
    let sectionClio = document.querySelector(section),
      btnsClio = sectionClio.querySelectorAll(btns),
      itemsClio = sectionClio.querySelectorAll(items);

    const changeTabs = (arr, currentIndex) => {
      arr.forEach((item) => {
        item.forEach((el) => {
          el.classList.remove("active");
        });
        item[currentIndex].classList.add("active");
      });
    };

    for (let i = 0; i < btnsClio.length; i++) {
      btnsClio[i].addEventListener("click", () => {
        changeTabs([btnsClio, itemsClio], i);
      });
    }
  };

  // табы десктоп
  tabsHandler(".tabs__item-wrap", ".tabs_btn", ".tab__inner");
  tabsHandler(".section-delivery", ".tabs_btn", ".tab_inner");

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

  // табы мобилка
  infoHandler(".tabs__item-wrap", ".tab__wrap", ".tab__inner");

  // подсказка "?"
  infoHandler(".swiper__analog", ".prompt-info_analog", ".info_bonus-analog");
});
