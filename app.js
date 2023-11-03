// Product Part 
// -----------------------------------------------

// Filling products

const Products = [
  'HTML & CSS',
  'React JS',
  'Next JS',
  'MongoDB'
]

for (let i = 0; i < Products.length; i++) {
  const li = document.createElement('li');
  li.classList.add('item');

  const liContent = `
  <span class="checkbox">
    <i class = "fa-solid fa-check check-icon"></i>
  </span>
  <span class="item-text">${Products[i]}</span>`

  li.innerHTML = liContent;
  document.querySelector('#prod-sel-box .list-items').appendChild(li); 
}

const selectBox = document.querySelector('#prod-sel-box');
const selectOption = document.querySelector('#prod-sel-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const items = document.querySelectorAll("#prod-sel-box .item");
const checkedProds = [];


selectOption.addEventListener('click', function() {
  selectBox.classList.toggle('active');
});

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');

    let checked = document.querySelectorAll("#prod-sel-box .checked");
    

    if (checked && checked.length > 0) {
      soValue.value = `${checked.length} selected`;
    }
    else {
      soValue.value = "Select Products";
    }
  });
});

// Searching feature 
optionSearch.addEventListener('keyup', () => {
  const searchTerm = optionSearch.value.toLowerCase();

  items.forEach(item => {
    const textSpan = item.querySelector('.item-text')
    const text = textSpan.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
})

// --------------------------------------------------------------------

// Logistic part 

// ----------------------------------------------------------------------------------

// Filling logistics
const Logistics = ['Air', 'Sea', 'Rail', 'Road']

for(let i = 0; i < Logistics.length; i++) {

  const li = document.createElement('li');
  li.classList.add('item');

  const liContent = `
    <span class="checkbox">
      <i class="fa-solid fa-check check-icon"></i>
    </span>
    <span class="item-text">${Logistics[i]}</span>
  `;

  li.innerHTML = liContent;
  document.querySelector('#log-sel-box .list-items').appendChild(li);

}

// Product Select Logic
const logSelectBox = document.querySelector('#log-sel-box');
const logSelectOption = document.querySelector('#log-sel-option');
const logValue = document.querySelector('#loValue');
const logSearch = document.querySelector('#log-optionSearch');
const itemsLog = document.querySelectorAll('#log-sel-box .item');
const checkedLogs = [];

logSelectOption.addEventListener('click', function() {
  logSelectBox.classList.toggle('active');
});

itemsLog.forEach(itemLog => {
  itemLog.addEventListener('click', () => {
    itemLog.classList.toggle('checked');

    let checked = document.querySelectorAll("#log-sel-box .checked");
    

    if (checked && checked.length > 0) {
      logValue.value = `${checked.length} selected`;
    }
    else {
      logValue.value = "Select Logistics";
    }
  });
});

// Searching feature logistics
logSearch.addEventListener('keyup', () => {
  const searchTerm = logSearch.value.toLowerCase();

  itemsLog.forEach(item => {
    const textSpan = item.querySelector('.item-text')
    const text = textSpan.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
})

// Proceed Button 
// Adding the selected items in an array
const Btn = document.querySelector('#proceed')

Btn.addEventListener('click', () => {

  // Get checked items
  let checked = document.querySelectorAll('#prod-sel-box .checked');
  let logchecked = document.querySelectorAll('#log-sel-box .checked')
  
  // Reset and rebuild array
  checkedProds.length = 0;
  checkedLogs.length = 0;

  checked.forEach(el => {
    checkedProds.push(el.querySelector('.item-text').textContent);
  });

  logchecked.forEach(ef => {
    checkedLogs.push(ef.querySelector('.item-text').textContent);
  })

  console.log('Selected products',checkedProds);
  console.log('Selected logistics',checkedLogs);
});

