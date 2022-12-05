const listCategories = document.querySelector('#categories');

const allElements = listCategories.children;
console.log(`Number of categories: ${allElements.length}`);

const listAnimals = document.querySelector('.item ul');
const listProducts = listCategories.children[1];

console.log(listAnimals);

console.log(listProducts);

const categoryTitleRef = document.querySelectorAll(".item h2");

const resultTask = categoryTitleRef.forEach((title) => {
    console.log('Category:', title.textContent);
    if(title.textContent === 'Animals'){
        console.log(listAnimals.children.length);
    }
   

});



// const liRef = document.querySelectorAll('li');
// console.log(liRef);


// console.log(`В списке ${itemRef.length} категории`);
// const categoryTitleRef = document.querySelectorAll(".item h2");
// const categoryListItemRef = document.querySelectorAll(".item ul");
// categoryTitleRef.forEach((title) => {
//   console.log('Категория:', title.textContent);
//   console.log('Количество элементов:', itemRef.length); 
// });

