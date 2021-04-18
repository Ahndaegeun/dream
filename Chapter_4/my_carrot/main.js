//Variable
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const replayBtn = document.querySelector('.re-btn');
const time = document.querySelector('.time');
const endDisplay = document.querySelector('.finish');
const counter = document.querySelector('.counter');
const bugContainer = document.querySelector('.bugs');
const carrotContainer = document.querySelector('.carrots');

let _setTime;
let num = 0;
let countNum = 10;
//Function
const displayRemove = () => {
  clearInterval(_setTime);
  endDisplay.classList.remove('hidden');
  startBtn.classList.add('hidden');
  stopBtn.classList.add('hidden');
}
const _setTimeFunc = () => {
  time.innerHTML = `0:0${num--}`;
  if(num < 0) {
    displayRemove();
    num = 9;
  };
}
const playTheGame = () => {
  num = 9;
  countNum = 10;
  time.innerHTML = '0:10';
  counter.innerHTML = countNum;
  startBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  endDisplay.classList.add('hidden');
  _setTime = setInterval(_setTimeFunc,1000);
}
const creatBugs = () => {
  const container = document.createElement('li');
  const x = Math.floor(Math.random() * 890);
  const y = Math.floor(Math.random() * 170);
  container.innerHTML = `
    <img class="bug item" src="./carrot/img/bug.png" alt="bug" style="top: ${y}px;left: ${x}px">
  `;
  return container
}
const creatCarrots = () => {
  const container = document.createElement('li');
  const x = Math.floor(Math.random() * 890);
  const y = Math.floor(Math.random() * 170);
  container.innerHTML = `
    <img class="carrot item" src="./carrot/img/carrot.png" alt="carrot" style="top: ${y}px;left: ${x}px">
  `;

  return container;
}
const itmeFunc = () => {
  let bug = [];
  let carrot = [];
  for(let i = 0; i < 10; i++) {
    bug[i] = creatBugs();
    bugContainer.appendChild(bug[i]);
    carrot[i] = creatCarrots();
    carrotContainer.appendChild(carrot[i]);
  }
}

//EventListener
startBtn.addEventListener('click', e => {
  itmeFunc();
  playTheGame();
})

stopBtn.addEventListener('click', e => {
  displayRemove();
  bugContainer.innerHTML = "";
  carrotContainer.innerHTML = '';
})

replayBtn.addEventListener('click', e => {
  itmeFunc();
  playTheGame();
});

bugContainer.addEventListener('click', e => {
  displayRemove();
  bugContainer.innerHTML = "";
  carrotContainer.innerHTML = '';
})

carrotContainer.addEventListener('click', e => {
  e.target.remove();
  counter.innerHTML = --countNum;
  if (countNum === 0) {
    displayRemove();
    bugContainer.innerHTML = "";
  }
})