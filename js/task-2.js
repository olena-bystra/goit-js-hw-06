const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const refListProducts = document.querySelector('#ingredients');
  console.log(refListProducts);

  const resultListProducts = ingredients.forEach((product) =>{
    const refProduct = document.createElement('li');
    refProduct.textContent = product;
    refListProducts.append(refProduct);
  });