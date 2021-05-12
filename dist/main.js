const navBar = document.querySelector("#navBar");
const hero = document.querySelector(".hero__content");

const navOptions = {
  rootMargin: "-549px 0px 0px 0px",
};

const navObserver = new IntersectionObserver((entries, navObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("navBar--scrolled");
    } else {
      navBar.classList.remove("navBar--scrolled");
    }
  });
}, navOptions);

navObserver.observe(hero);

const faders = document.querySelectorAll(".fade__in");

const fadeInOptions = {
  rootMargin: "0px 0px -350px 0px",
};

const fadeInScroll = new IntersectionObserver((entries, fadeInScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("f-appear");
      fadeInScroll.unobserve(entry.target);
    }
  });
}, fadeInOptions);

faders.forEach((fader) => {
  fadeInScroll.observe(fader);
});

const sliders = document.querySelectorAll(".slide__in");

const slideInOptions = {
  rootMargin: "0px 0px -350px 0px",
};

const slideInScroll = new IntersectionObserver((entries, slideInScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("sl-appear");
      slideInScroll.unobserve(entry.target);
    }
  });
}, slideInOptions);

sliders.forEach((slide) => {
  slideInScroll.observe(slide);
});

const cards = document.querySelectorAll(".projects__cards");
const cardRight = document.querySelectorAll(".projects__card__right");
const cardLeft = document.querySelectorAll(".projects__card__left");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      cards[i].classList.add("projects__cards--expand");
      cardRight[i].classList.add("projects__card__right--slide");
    }
  });
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      cards[i].classList.remove("projects__cards--expand");
      cardRight[i].classList.remove("projects__card__right--slide");
    }
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

for (let i = 0; i < modals.length; i++) {
  window.addEventListener("click", (e) => {
    if (e.target === modals[i]) {
      modals[i].classList.remove("show-modal");
      body.style.overflowY = "visible";
    }
  });
}

for (let i = 0; i < modals.length; i++) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modals[i].classList.contains("show-modal")) {
      modals[i].classList.remove("show-modal");
      body.style.overflowY = "visible";
    }
  });
}
