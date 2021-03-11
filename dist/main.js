// function debounce(callback, wait) {
//   let timeout;
//   return (...args) => {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => callback.apply(context, args), wait);
//   };
// }

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideCardUp = document.querySelectorAll(".projects__cards");

// Check all of the images and slide them in or out as needed
function checkSlide(e) {
  // What part of the content is visible in the window?
  const windowTop = window.scrollY;
  const windowBottom = window.scrollY + window.innerHeight;

  slideCardUp.forEach((card) => {
    const cardTop = card.offsetTop;
    const cardBottom = card.offsetTop + card.height;
    const cardMiddle = (cardTop + cardBottom) / 2;

    // The image should slide in if its middle is visible in the window
    if (cardMiddle >= windowTop && cardMiddle <= windowBottom) {
      card.classList.add("active");
    }

    // The image should slide out if entirely above or below visible window
    if (cardBottom < windowTop || cardTop > windowBottom) {
      card.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
