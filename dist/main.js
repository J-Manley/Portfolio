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

const cards = document.querySelectorAll(".projects__cards");
const cardsArr = Array.from(cards);
const cardLeft = document.querySelector(".projects__card__left");
const cardRight = document.querySelector(".projects__card__right");

function cardSlideAdd() {
  cards.classList.add("projects__cards--expand");
  cardRight.classList.add("projects__card__right--slide");
}

function cardSlideRemove() {
  cards.classList.remove("projects__cards--expand");
  cardRight.classList.remove("projects__card__right--slide");
}

cardsArr.forEach((card) => card.addEventListener("mouseenter", cardSlideAdd));
cardsArr.forEach((card) => card.addEventListener("mouseleave", cardSlideRemove));
