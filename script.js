const sliderLine = document.querySelector(".slider-line");
const sliderLineText = document.querySelector(".slider-line-text");

const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-prev");
const dots = document.querySelectorAll(".dot");
const links = document.querySelectorAll(".link");

let position = 0;
let positionText = 0;
let dotIndex = 0;
let linkIndex = dotIndex;

const nextSlide = () => {
  if (position < (dots.length - 1) * 680) {
    position += 680;
  } else {
    position = 0;
  }
  sliderLine.style.left = -position + "px";
};

const nextSlideText = () => {
  if (positionText < 880) {
    positionText += 440;
    dotIndex++;
    linkIndex++;
  } else {
    positionText = 0;
    dotIndex = 0;
    linkIndex = 0;
  }
  sliderLineText.style.left = -positionText + "px";
  thisSlide(dotIndex);
  thisLink(linkIndex);
};

const prevSlide = () => {
  if (position > 0) {
    position -= 680;
  } else {
    position = (dots.length - 1) * 680;
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
  thisLink(linkIndex);
};

const prevSlideText = () => {
  if (positionText > 0) {
    positionText -= 440;
    dotIndex--;
    linkIndex--;
  } else {
    positionText = 880;
    dotIndex = dots.length - 1;
    linkIndex = links.length - 1;
  }
  sliderLineText.style.left = -positionText + "px";
  thisSlide(dotIndex);
  thisLink(linkIndex);
};

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active-dot");
  }
  dots[index].classList.add("active-dot");
};

const thisLink = (index) => {
  for (let link of links) {
    link.classList.remove("active-link");
  }
  links[index].classList.add("active-link");
};

nextButton.addEventListener("click", nextSlide);
nextButton.addEventListener("click", nextSlideText);

prevButton.addEventListener("click", prevSlide);
prevButton.addEventListener("click", prevSlideText);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = 680 * index;
    positionText = 440 * index;
    sliderLine.style.left = -position + "px";
    sliderLineText.style.left = -positionText + "px";
    dotIndex = index;
    thisSlide(dotIndex);
    thisLink(index);
  });
});

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    position = 680 * index;
    positionText = 440 * index;
    sliderLine.style.left = -position + "px";
    sliderLineText.style.left = -positionText + "px";
    linkIndex = index;
    thisLink(linkIndex);
    thisSlide(index);
  });
});

// setInterval(() => {
//   nextSlide()
//   nextSlideText()
// }, 3000)
