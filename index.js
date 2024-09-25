let elements = [
  { id: "#skillOne", start: 0, end: 60, duration: 4000 },
  { id: "#skillTwo", start: 0, end: 40, duration: 4000 },
  { id: "#skillThree", start: 0, end: 50, duration: 4000 },
  { id: "#skillFour", start: 0, end: 10, duration: 4000 },
  { id: "#skillFive", start: 0, end: 5, duration: 4000 },
];

function animateValue(id, start, end, duration) {
  let obj = document.querySelector(id);
  let startTimestamp = null;
  function step(timestamp) {
    if (startTimestamp === null) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function startCounterWhenVisible(id, start, end, duration) {
  const target = document.querySelector(id);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(id, start, end, duration);
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(target);
}

window.onload = function () {
  elements.forEach(({ id, start, end, duration }) => {
    startCounterWhenVisible(id, start, end, duration);
  });
};

function toggleMenu(event) {
  event.preventDefault();
  let navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("show");
}
