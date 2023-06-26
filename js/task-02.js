const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItem = (ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add(".item");
  ingredientsItem.textContent = ingredient;
  return ingredientsItem;
};

const ingredientsArr = ingredients.map(ingredientsItem);

ingredientsList.append(...ingredientsArr);

console.dir(ingredientsArr);
