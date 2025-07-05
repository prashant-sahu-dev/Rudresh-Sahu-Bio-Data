 function positionImagesInCircle() {
  const container = document.getElementById("circle");
  const images = container.querySelectorAll("img");
  const containerSize = container.offsetWidth ;
  const radius = containerSize * 0.38; // Distance from center
  const centerX = containerSize/2;
  const centerY = containerSize/2;

  images.forEach((img, index) => {
    const angle = (index / images.length) * (2 * Math.PI);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });
  }
  window.addEventListener("load", positionImagesInCircle) ;
  window.addEventListener("resize", positionImagesInCircle) ;
