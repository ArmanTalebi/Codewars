    var carousel = document.querySelector('.carousel');
    var carouselInner = document.querySelector('.carousel-inner');
    var carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    var currentIndex = 0;
    var itemWidth = carousel.clientWidth;

    function slideCarousel() {
      carouselInner.style.transform = 'translateX(' + (-currentIndex * itemWidth) + 'px)';
    }

    function nextSlide() {
      if (currentIndex === carouselItems.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      slideCarousel();
    }

    setInterval(nextSlide, 3000); // Automatically advance to the next slide every 3 seconds