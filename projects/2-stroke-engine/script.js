const carouselItems = [
  {
    // esempio pratico carosello foto
    src: "img/2-stroke-engine-card.png",
    alt: "Close-up render of the engine's intake manifold.",
    title: "Close-up render of the engine's intake manifold",
    description: "Example description 1",
    element: null,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvUn488PzY6TZ1EjJMpM4Kh-EeOvPtMT9MlSJC-yCyf2wSS9fxkZTZEjwsaWr2Cfdkp7eT_bw3iWezsn8Sgfyo156eEI91EqVsTGo2wwOqpEQe0pzwMs-cYHbzhfNQ_nU4J_SPkJ56tBMA8XFT6UfJdfV2YR0t26IPkKPlV2X1ha1IZ-3harw-FBn9mmTw6osRVT6ks8_6hbTkwUK6_MTd7OxQSNxDtqvKJE49D4HHGpb13ynFFB0n7Ax1oeIkvuc1S3ML5f6J20M",
    alt: "Detailed view of the engine valve cover with branding.",
    title: "Detailed view of the engine valve cover with branding",
    description: "Example description 2",
    element: null,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7_T9-6yDITQvd7qAGyPuy7j90wBpi_rSOlsEDiSHKIsELAwgQbaeICnWE0xkoI9x0hR7syVdqIuOMqAgn278GVIOb4V5_D8wgVRMJgpKzaVGyfN-Y_UWtOteFsGvPpxA_9nxRL71W5HNcIPOhrNZ7UVaCF4BbP-RWVkmnohEslpdYkUOxdKJL2ijPN90Pe6Z7mqcDpYVcu23mD5IAZG4CyKubXCXZhq70e0K4yNQXbE17ayOcJk5CEnKZ4NbOH-Oi-VmjFawpZE",
    alt: "Render showing the turbocharger assembly and exhaust system.",
    title: "Render showing the turbocharger assembly and exhaust system",
    description: "Example description 3",
    element: null,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6c3QM9pOgRzeX7b90Z4SziKgsPhApxFpfJskSalZFo4e2dGVChQGkFTYfzjICD0daPPmaGG7WQudLuUUHvpVReu1Jrq0qBQqwsNI-wZO-sBaIjZ2hFeSvPmEJfd7o_juAIElZRn06VO-Y42SkfR9o9hFqWpSqTv-UFBgrbOJZbq8dd1lOFxJw-GpiBHAJLN7L2aYNA3Hv6MuNP4quGXx3wp1F4kjGrMcf4NolMwIAPAlu8lVmM7cc0qlNvowyerwKW7DOYX9DL98",
    alt: "DExploded view of the V8 engine components",
    title: "Exploded view of the V8 engine components",
    description: "Example description 4",
    element: null,
  },
];
// ring-primary
let carouselImgHighlighted;
let carouselTitleHighlighted;
let carouselDescriptionHighlighted;
window.onload = () => {
  carouselImgHighlighted = document.getElementById("carousel-img-highlighted");
  carouselTitleHighlighted = document.getElementById("carousel-title-highlighted");
  carouselDescriptionHighlighted = document.getElementById("carousel-description-highlighted");

  const carouselOptions = document.getElementById("carousel-options");
  carouselItems.forEach((item, index) => {
    const container = document.createElement("div");
    container.classList = "relative group cursor-pointer rounded-md overflow-hidden ring-2";
    container.onclick = () => { changeCarouselContent(index); }
    
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.classList = "w-full h-full object-cover aspect-video";
    container.appendChild(img);

    const randomDiv = document.createElement("div");
    randomDiv.classList = "absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors";
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
}

const nextCarouselItem = () => {
  const index = (currentIndex + 1) % carouselItems.length;
  changeCarouselContent(index);
}