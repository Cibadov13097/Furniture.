// Navbar mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Navbar active link (filtering removed, handled in main.js)
const navItems = document.querySelectorAll('.nav-links li');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Category button click (filtering removed, handled in main.js)
const catBtns = document.querySelectorAll('.cat-btn');
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    navItems.forEach(i => i.classList.remove('active'));
  });
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let sliderInterval;

// Create dots
dotsContainer.innerHTML = '';
slides.forEach((_, idx) => {
  const dot = document.createElement('span');
  dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
  dot.addEventListener('click', () => {
    showSlide(idx);
    resetSliderInterval();
  });
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('.slider-dot, span');

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    if (dots[i]) dots[i].classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}
function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetSliderInterval();
  });
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetSliderInterval();
  });
}

function startSliderInterval() {
  sliderInterval = setInterval(nextSlide, 4000); // 4000ms = 4 saniyə, daha rahat keçid üçün
}
function resetSliderInterval() {
  clearInterval(sliderInterval);
  startSliderInterval();
}

if (slides.length > 0) {
  showSlide(0);
  startSliderInterval();
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) {
    heroSlider.addEventListener('mouseenter', () => clearInterval(sliderInterval));
    heroSlider.addEventListener('mouseleave', () => resetSliderInterval());
  }
}


