const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', () => {
  isDown = true;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mousemove', () => {
  if(!isDown) return //Stop running if mouse is up.
  console.log(isDown);
  console.log("Fuck Wes");
});
