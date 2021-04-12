const _target = document.querySelector('.target__wrapper');
const _horizontal = document.querySelector('.horizontal-line');
const _vertical = document.querySelector('.vertical-line');
const _sign = document.querySelector('.sign');

let x = 0;
let y = 0;

window.addEventListener('mousemove', (e) => {
  x = e.clientX;
  y = e.clientY;
  _target.style.top = `${y}px`;
  _target.style.left = `${x}px`;
  _horizontal.style.top = `${y}px`;
  _vertical.style.left = `${x}px`;
  _sign.innerHTML = `${x}px, ${y}px`;
})