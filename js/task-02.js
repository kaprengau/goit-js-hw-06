const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(".ingredients");

const ingredientsItem = (itemInfo) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  return ingredientsItem;
};

const ingredientsArr = ingredients.map((el) => ingredientsItem(el));


console.log(ingredientsArr);
