const carouselItems = [
  {
    //Example carousel
    src: "img/carousel-1.jpeg",
    alt: "Side View Render of the 2-Stroke Engine Block and Clutch.",
    title: "Side View Render of the 2-Stroke Engine Block and Clutch",
    description: "A view highlighting the clutch cover and its fastening bolts",
    element: null,
  },
  {
    src: "img/carousel-2.jpeg",
    alt: "Close-Up of the Stator Cover.",
    title: "Close-Up of the Stator Cover",
    description:
      "A detailed view of the blue left side crankcase cover (stator side) made of Ergal",
    element: null,
  },
  {
    src: "img/carousel-3.jpeg",
    alt: "Frontal Perspective Highlighting the Intake Manifold Mount.",
    title: "Frontal Perspective Highlighting the Intake Manifold Mount",
    description:
      "Symmetrical frontal view showing the intake manifold area at the center of the engine block.",
    element: null,
  },
  {
    src: "img/carousel-4.jpeg",
    alt: "Three-quarter Perspective view Render of the Engine Assembly",
    title: "Three-quarter Perspective view Render of the Engine Assembly",
    description:
      "A dynamic perspective that highlights the general shape of the engine/gearbox casing and the output shaft",
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
