const carouselItems = [
  {
    src: "img/carousel-clutch-1.jpeg",
    alt: "View of Assembled Clutch with Pressure Plate and Springs",
    title: "View of Assembled Clutch with Pressure Plate and Springs",
    description:
      "Front view of the clutch hub with the mounted pressure plate and spring set.",
    element: null,
  },
  {
    src: "img/carousel-clutch-2.jpeg",
    alt: "Exploded View of the Multi-Plate Clutch Assembly",
    title: "Exploded View of the Multi-Plate Clutch Assembly",
    description:
      "3D exploded visualization of the complete clutch pack assembly.",
    element: null,
  },
  {
    src: "img/carousel-clutch-3.jpeg",
    alt: "View of Clutch Basket",
    title: "View of Clutch Basket",
    description:
      "Side view of the assembled clutch basket featuring the primary drive gear teeth.",
    element: null,
  },
  {
    src: "img/carousel-clutch-4.jpeg",
    alt: "Angled Exploded Diagram of Clutch Parts",
    title: "Angled Exploded Diagram of Clutch Parts",
    description:
      "Sequential exploded diagram showing the stack-up of friction and steel plates.",
    element: null,
  },
];

let carouselImgHighlighted;
let carouselTitleHighlighted;
let carouselDescriptionHighlighted;
let carouselTitleHighlightedMobile;
let carouselDescriptionHighlightedMobile;
let currentIndex = -1;

window.onload = () => {
  carouselImgHighlighted = document.getElementById("carousel-img-highlighted");
  carouselTitleHighlighted = document.getElementById(
    "carousel-title-highlighted"
  );
  carouselDescriptionHighlighted = document.getElementById(
    "carousel-description-highlighted"
  );
  carouselTitleHighlightedMobile = document.getElementById(
    "carousel-title-highlighted-mobile"
  );
  carouselDescriptionHighlightedMobile = document.getElementById(
    "carousel-description-highlighted-mobile"
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

    const overlay = document.createElement("div");
    overlay.classList =
      "absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors";
    container.appendChild(overlay);

    carouselOptions.appendChild(container);
    item.element = container;
  });

  changeCarouselContent(0);
};

const changeCarouselContent = (index) => {
  if (index === currentIndex) return;

  const item = carouselItems[index];

  carouselImgHighlighted.src = item.src;
  carouselImgHighlighted.alt = item.alt;

  carouselTitleHighlighted.innerHTML = item.title;
  carouselDescriptionHighlighted.innerHTML = item.description;

  carouselTitleHighlightedMobile.innerHTML = item.title;
  carouselDescriptionHighlightedMobile.innerHTML = item.description;

  item.element.classList.add("ring-primary");
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
  let index = (currentIndex + 1) % carouselItems.length;
  changeCarouselContent(index);
};
