"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (i === j) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
    window.scrollTo(0, 0);
  });
}



// portfolio modal:

// Portfolio modal variables
const projectItems = document.querySelectorAll(".project-item a");
const portfolioModalContainer = document.querySelector("[data-portfolio-modal-container]");
const portfolioModalCloseBtn = document.querySelector("[data-portfolio-modal-close-btn]");
const portfolioModalOverlay = document.querySelector("[data-portfolio-modal-overlay]");


// Portfolio modal elements
const portfolioModalImg = document.querySelector("[data-portfolio-modal-img]");
const portfolioModalTitle = document.querySelector("[data-portfolio-modal-title]");
const portfolioModalDate = document.querySelector("[data-portfolio-modal-date]");
const portfolioModalDescription = document.querySelector("[data-portfolio-modal-description]");
const portfolioModalTechStack = document.querySelector("[data-portfolio-modal-techstack]");

// Portfolio modal toggle function
const portfolioModalToggle = function () {
  portfolioModalContainer.classList.toggle("active");
  portfolioModalOverlay.classList.toggle("active");
}

// Add click event to all project items
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (event) {
    event.preventDefault();

    portfolioModalImg.src = this.dataset.imgSrc;
    portfolioModalImg.alt = this.dataset.title;
    portfolioModalTitle.innerHTML = this.dataset.title;
    portfolioModalDate.innerHTML = this.dataset.date;
    portfolioModalDescription.innerHTML = this.dataset.description;
    portfolioModalTechStack.innerHTML = this.dataset.techstack;

    portfolioModalToggle();
  });
}

// Add click event to modal close button and overlay
portfolioModalCloseBtn.addEventListener("click", portfolioModalToggle);
portfolioModalOverlay.addEventListener("click", portfolioModalToggle);



