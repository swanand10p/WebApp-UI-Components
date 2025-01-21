const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  effect: "swipe",
  loop: true,
  speed: 400,
  autoplay: {
    delay: 5000, 
    disableOnInteraction: true, 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
