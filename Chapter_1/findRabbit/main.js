const btn = document.querySelector('.btn');
const rabbit = document.querySelector('.rabbit');
//const rabbitPosition = rabbit.getBoundingClientRect();

btn.addEventListener('click', () => {
  rabbit.scrollIntoView({behavior: 'smooth', block: 'center'});
  /*window.scrollTo({
    top: rabbitPosition.top,
    behavior: 'smooth'
  })*/
})