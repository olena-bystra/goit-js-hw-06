const listCategories = document.querySelector('#categories');


const allElements = listCategories.children;
console.log(`Number of categories: ${allElements.length}`);


const listAnimals = document.querySelectorAll('.item ul');


const categoryTitleRef = document.querySelectorAll(".item h2");


const resultTask = categoryTitleRef.forEach((title, i) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${listAnimals[i].childElementCount}`);
});




