const itemEl = document.querySelectorAll("li.item");

console.log("Number of categories: " + itemEl.length);

itemEl.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent
    const elementAll = item.querySelectorAll("li");
    console.dir(`Category: ${titleEl}`);
    console.log(`Elements: ${elementAll.length}`);
});
//? -----------------------------------------------------
// itemEl.forEach((item) => {
//   const titleEl = item.querySelector("h2").textContent;
//     const elementAll = item.querySelectorAll("li");

//   elementAll.forEach((item) => {
//       const ulElement = item.textContent;
//       console.log("item: "+ ulElement);
//   });
//   console.log(`Category: ${titleEl}`);

// });
