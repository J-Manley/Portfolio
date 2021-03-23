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
  cards[i].addEventListener("mouseenter", function () {
    cards[i].classList.add("projects__cards--expand");
    cardRight[i].classList.add("projects__card__right--slide");
    cardLeft[i].style.display = "box-shadow: rgba(255, 0, 0, 0.9) 0px 5px 15px;";
    cardRight[i].style.display = "box-shadow: rgba(255, 0, 0, 0.9) 0px 5px 15px;";
  });
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseleave", function () {
    cards[i].classList.remove("projects__cards--expand");
    cardRight[i].classList.remove("projects__card__right--slide");
    cardLeft[i].style.display = "none";
    cardRight[i].style.display = "none";
  });
}

// for (let i = 0; i < cards.length; i++) {
//   if (cards[i].classList.contains("projects__cards--expand")) {
//     cardLeft.style.display = "box-shadow: rgba(0, 0, 0, 0.9) 0px 5px 15px;";
//     cardRight.style.display = "box-shadow: rgba(0, 0, 0, 0.9) 0px 5px 15px;";
//   }
// }
