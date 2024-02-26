const list = document.querySelector("#categories");
const listItems = list.querySelectorAll(".item") ;
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
const categoryName = item.querySelector("h2").textContent;
console.log(`Category: ${categoryName}`);  
const categoryElement = item.querySelectorAll("li");
console.log(`Elements: ${categoryElement.length}`);  
})