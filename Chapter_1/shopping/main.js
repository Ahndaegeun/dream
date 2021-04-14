const list = document.querySelector('.list');
const trashBtn = document.querySelectorAll('.trash-btn');
const listInput = document.querySelector('.add-list');
const addBtn = document.querySelector('.add-btn');

const removeList = e => {
  const target = e.target.parentNode.parentNode;
  target.remove();
}

for (value of trashBtn) {
  value.addEventListener('click', removeList);
}

listInput.addEventListener('keyup', e => {
  const value = e.target.value;
  if(e.key === 'Enter') {
    const str = `<li>${value}<button class="trash-btn"><i class="fa fa-trash"></i></button></li>`
    list.insertAdjacentHTML('beforeend', str);
  }
})