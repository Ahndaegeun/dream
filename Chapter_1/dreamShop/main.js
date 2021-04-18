const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
  if(text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({block: 'center'})
  input.value = '';
  input.focus();
}

//고유값을 아이디로 주려면 UUID 같은 라이브러리를 참고
let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id)
  itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete"><i class="fa fa-trash" data-id="${id}"></i></button>
      </div>
      <div class="divider">
    </div>
  `;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
})

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
})

items.addEventListener('click', e => {
  const id = e.target.dataset.id
  if(id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})