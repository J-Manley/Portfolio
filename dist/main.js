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

const cards = document.querySelectorAll(".projects__cards");
const cardRight = document.querySelectorAll(".projects__card__right");
const cardLeft = document.querySelectorAll(".projects__card__left");

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

const body = document.getElementById("home");
const modals = document.querySelectorAll(".modal");
const openBtn = document.querySelectorAll(".btn--open-modal");
const closeBtn = document.querySelectorAll(".modal__btn--close");

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", () => {
    modals[i].classList.add("show-modal");
    body.style.overflowY = "hidden";
  });
}

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", () => {
    modals[i].classList.remove("show-modal");
    body.style.overflowY = "visible";
  });
}

// Hide modal on outside click
for (let i = 0; i < modals.length; i++) {
  window.addEventListener("click", (e) =>
    e.target === modals[i] ? modals[i].classList.remove("show-modal") : false
  );
}

for (let i = 0; i < modals.length; i++) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modals[i].classList.contains("show-modal")) {
      modals[i].classList.remove("show-modal");
    }
  });
}
