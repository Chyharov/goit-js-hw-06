const quantityItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantityItems.length}`);
document.querySelectorAll(".item h2").forEach(elem =>
  console.log(`Category: ${elem.textContent} 
Elements: ${elem.nextElementSibling.children.length}`)
);