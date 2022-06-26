const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulContainer = document.querySelector('ul#ingredients')

const elements = ingredients.map(ingredients => {
  const elementsList = document.createElement('li');
  elementsList.textContent = ingredients;
  
  return elementsList;
});

ulContainer.append(...elements)