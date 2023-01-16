const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const refListProducts = document.querySelector('#ingredients');

  

  const resultListProducts = ingredients.map((product) =>{
    const refProduct = document.createElement('li');
    refProduct.textContent = product;
    console.log(refProduct);
    return refProduct;
    });

    

    refListProducts.append(...resultListProducts);

    



