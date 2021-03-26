const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -350px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const cards = Array.from(document.querySelectorAll(".projects__cards"));
const cardRight = Array.from(document.querySelectorAll(".projects__card__right"));
const cardLeft = Array.from(document.querySelectorAll(".projects__card__left"));
const cardOverlay = Array.from(
  document.querySelectorAll(".projects__card__left::before")
);
const cardTitles = Array.from(
  document.querySelectorAll(
    ".projects__card--1::after,projects__card--2::after,projects__card--3::after,projects__card--4::after"
  )
);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", () => {
    cards[i].classList.add("projects__cards--expand");
    cardRight[i].classList.add("projects__card__right--slide");
  });
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseleave", () => {
    cards[i].classList.remove("projects__cards--expand");
    cardRight[i].classList.remove("projects__card__right--slide");
  });
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const body = document.getElementById("home");

const closeModal = function () {
  modal.classList.remove("show-modal");
};

// Show Modal
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
  body.style.overflowY = "hidden";
});

// Hide Modal
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  body.style.overflowY = "visible";
});

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show-modal")) {
    closeModal();
  }
});
