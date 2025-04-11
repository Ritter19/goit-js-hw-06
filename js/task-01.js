let categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

console.log(categories[0].firstElementChild);

for (let category of categories) {
  console.log(`Category: ${categories.firstElementChild.innerText}`);
  console.log(
    `Elements: ${categories.firstElementChild.nextElementSibling.children.length}`
  );
}
