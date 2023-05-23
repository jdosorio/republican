const swiper = new Swiper(".bg-slider", {
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 100,
  allowSlideNext: true,
});

//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
var disabled = false;

menuBtn.addEventListener("click", () => {
  if (!disabled) {
    navigation.classList.add("active");
    disabled = true;
  } else {
    navigation.classList.remove("active");
    disabled = false;
  }
});
