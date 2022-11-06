const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");
console.log(listRef);
const listContent = ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  console.log(listItem);
  listRef.append(listItem);
});
