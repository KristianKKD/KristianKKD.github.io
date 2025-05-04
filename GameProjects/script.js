const images = [
    "/assets/purgatory/p1.png",
    "/assets/purgatory/p2.png",
    "/assets/purgatory/p3.png"
  ];
  let currentImageIndex = 0;
  
  function changeSlide(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById("carousel-image").src = images[currentImageIndex];
  }