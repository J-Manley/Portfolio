const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

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

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

const cards = Array.from(document.querySelectorAll(".projects__cards"));
const cardRight = Array.from(document.querySelectorAll(".projects__card__right"));
const cardOverlay = Array.from(
  document.querySelectorAll(".projects__card__left::before")
);
const cardTitles = Array.from(
  document.querySelectorAll(
    ".projects__card--1::after,projects__card--2::after,projects__card--3::after,projects__card--4::after"
  )
);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", function () {
    cards[i].classList.add("projects__cards--expand");
    cardRight[i].classList.add("projects__card__right--slide");
  });
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseleave", function () {
    cards[i].classList.remove("projects__cards--expand");
    cardRight[i].classList.remove("projects__card__right--slide");
  });
}
