const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulContainer = document.querySelector('ul#ingredients');
const element = ingredients.map(option => {

  const itemElm = document.createElement('li');
  itemElm.classList.add('item');
  itemElm.textContent = option;

  return itemElm;
})
ulContainer.append(...element);
console.log(ulContainer);





























