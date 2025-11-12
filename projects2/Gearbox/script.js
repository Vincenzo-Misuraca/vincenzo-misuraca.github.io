const carouselItems = [
  {
    //Example carousel
    src: "img/carousel-gearbox-1.jpeg",
    alt: "Complete Sequential Transmission",
    title: "Complete Sequential Transmission",
    description:
      "A view illustrating the complete configuration of the sequential gearbox.",
    element: null,
  },
  {
    src: "img/carousel-gearbox-2.jpeg",
    alt: "Internal View of Gear Selector Drum and Actuator Mechanism.",
    title: "Internal View of Gear Selector Drum and Actuator Mechanism",
    description:
      "Focus on the selector drum and the engagement forks which, guided by the helical grooves, move the gears to select the gears.",
    element: null,
  },
  {
    src: "img/carousel-gearbox-3.jpeg",
    alt: "Gear Cluster and Output Shaft Spline Detail Perspective.",
    title: "Gear Cluster and Output Shaft Spline Detail Perspective",
    description:
      "Detail of the gear cluster and the splined end of the output shaft, from which motion is transferred to the final drive system.",
    element: null,
  },
  {
    src: "img/carousel-gearbox-4.jpeg",
    alt: "Transmission Gear Train with Selector Forks and Bearings",
    title: "Transmission Gear Train with Selector Forks and Bearings",
    description:
      "Clear perspective of the gear set and selector forks positioned to slide the dog couplings and engage the next gear ratio.",
    element: null,
  },
];
// ring-primary
let carouselImgHighlighted;
let carouselTitleHighlighted;
let carouselDescriptionHighlighted;
window.onload = () => {
  carouselImgHighlighted = document.getElementById("carousel-img-highlighted");
  carouselTitleHighlighted = document.getElementById(
    "carousel-title-highlighted"
  );
  carouselDescriptionHighlighted = document.getElementById(
    "carousel-description-highlighted"
  );

  const carouselOptions = document.getElementById("carousel-options");
  carouselItems.forEach((item, index) => {
    const container = document.createElement("div");
    container.classList =
      "relative group cursor-pointer rounded-md overflow-hidden ring-2";
    container.onclick = () => {
      changeCarouselContent(index);
    };

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.classList = "w-full h-full object-cover aspect-video";
    container.appendChild(img);

    const randomDiv = document.createElement("div");
    randomDiv.classList =
      "absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors";
    container.appendChild(randomDiv);

    carouselOptions.appendChild(container);
    item.element = container;
  });

  changeCarouselContent(0);
};

let currentIndex = -1;
const changeCarouselContent = (index) => {
  if (index === currentIndex) return;

  carouselImgHighlighted.src = carouselItems[index].src;
  carouselImgHighlighted.alt = carouselItems[index].alt;
  carouselTitleHighlighted.innerHTML = carouselItems[index].title;
  carouselDescriptionHighlighted.innerHTML = carouselItems[index].description;
  carouselItems[index].element.classList.add("ring-primary");
  if (currentIndex !== -1) {
    carouselItems[currentIndex].element.classList.remove("ring-primary");
  }

  currentIndex = index;
};

const prevCarouselItem = () => {
  let index = currentIndex - 1;
  if (index < 0) index = carouselItems.length - 1;
  changeCarouselContent(index);
};

const nextCarouselItem = () => {
  const index = (currentIndex + 1) % carouselItems.length;
  changeCarouselContent(index);
};
