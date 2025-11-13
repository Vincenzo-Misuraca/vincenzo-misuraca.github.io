const carouselItems = [
  {
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

  // ===== CALCOLA ALTEZZA MASSIMA DESKTOP =====
  const desktopTextContainer = document.querySelector(
    ".relative.group.overflow-hidden.rounded-lg"
  );
  let maxHeightDesktop = 0;

  carouselItems.forEach((item) => {
    const tempTitle = document.createElement("h3");
    const tempDesc = document.createElement("p");
    tempTitle.style.position = tempDesc.style.position = "absolute";
    tempTitle.style.visibility = tempDesc.style.visibility = "hidden";
    tempTitle.style.width = desktopTextContainer.offsetWidth + "px";
    tempDesc.style.width = desktopTextContainer.offsetWidth + "px";
    tempTitle.innerText = item.title;
    tempDesc.innerText = item.description;
    document.body.appendChild(tempTitle);
    document.body.appendChild(tempDesc);

    const totalHeight = tempTitle.offsetHeight + tempDesc.offsetHeight + 16;
    if (totalHeight > maxHeightDesktop) maxHeightDesktop = totalHeight;

    document.body.removeChild(tempTitle);
    document.body.removeChild(tempDesc);
  });

  if (desktopTextContainer)
    desktopTextContainer.style.minHeight = maxHeightDesktop + "px";

  // ===== CALCOLA ALTEZZA MASSIMA MOBILE =====
  const mobileTextWrapper = carouselTitleHighlightedMobile.parentElement;
  let maxHeightMobile = 0;

  carouselItems.forEach((item) => {
    const tempTitle = document.createElement("h3");
    const tempDesc = document.createElement("p");
    tempTitle.style.position = tempDesc.style.position = "absolute";
    tempTitle.style.visibility = tempDesc.style.visibility = "hidden";
    tempTitle.style.width = mobileTextWrapper.offsetWidth + "px";
    tempDesc.style.width = mobileTextWrapper.offsetWidth + "px";
    tempTitle.innerText = item.title;
    tempDesc.innerText = item.description;
    document.body.appendChild(tempTitle);
    document.body.appendChild(tempDesc);

    const totalHeight = tempTitle.offsetHeight + tempDesc.offsetHeight + 16;
    if (totalHeight > maxHeightMobile) maxHeightMobile = totalHeight;

    document.body.removeChild(tempTitle);
    document.body.removeChild(tempDesc);
  });

  mobileTextWrapper.style.minHeight = maxHeightMobile + "px";

  // Inizializza carosello
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
