// function debounce(callback, wait) {
//   let timeout;
//   return (...args) => {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => callback.apply(context, args), wait);
//   };
// }

// const slideCardUp = document.querySelectorAll(".slide-in");

// // Check all of the images and slide them in or out as needed
// function checkSlide(e) {
//   // What part of the content is visible in the window?
//   const windowTop = window.scrollY;
//   const windowBottom = window.scrollY + window.innerHeight;

//   slideCardUp.forEach((card) => {
//     const cardTop = card.offsetTop;
//     const cardBottom = card.offsetTop + card.height;
//     const cardMiddle = (cardTop + cardBottom) / 2;

//     // The image should slide in if its middle is visible in the window
//     if (cardMiddle >= windowTop && cardMiddle <= windowBottom) {
//       card.classList.add("active");
//     }

//     // The image should slide out if entirely above or below visible window
//     if (cardBottom < windowTop || cardTop > windowBottom) {
//       card.classList.remove("active");
//     }
//   });
// }

// window.addEventListener("scroll", debounce(checkSlide));

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
