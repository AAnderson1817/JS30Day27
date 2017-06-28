const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseup', () => {
  slider.classList.remove('active');
  isDown = false;
});
slider.addEventListener('mouseleave', () => {
  slider.classList.remove('active');
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return //Stop running if mouse is up.
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) *3.5;
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
