let productsHTML ='';

products.forEach((product) => {
  productsHTML += `
  <div class="amazon-product-container">
    <div class="product-image-container">
      <img  class="product-image" src="${product.image}">
    </div>
    <div class="product-name limit-to-2-lines">
      ${product.name}
    </div>
    <div class="rating-stars-container">
      <img class="rating-stars" src="Images/images/ratings/rating-${product.rating.stars*10}.png">
      <div class="rating-text">${product.count}</div>
    </div>
    <div class="product-price">
      ${((product.priceCents*10)/1000).toFixed(2)}
    </div>
    <div class="product-select-container">
      <select class="js-quantity-select${product.name}">
        <option selected value="1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
      </select>
    </div>

    <p class="added-message js-added-message"><p>
    
    <button class="add-to-cart-button js-add-to-cart-button" data-product-name="${product.name}">
      Add to Cart
    </button>
  </div>`;
});

document.querySelector('.js-amazon-product-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart-button').forEach((button)=>{
  button.addEventListener('click', ()=>{
    const productName = button.dataset.productName;

    let matchingItemOne;

    cart.forEach((item)=>{
      if(productName === item.productName){
        matchingItemOne = item;
      }
    })

    if(matchingItemOne){
      matchingItemOne.quantity += 1;
    }else{
    cart.push({
      productName : productName,
      quantity: 1
    });
    }

    let cartQuantity = 0;

    cart.forEach((item)=>{
      cartQuantity += item.quantity;
      
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    /*let addedTo = document.querySelector('.js-added-message');

    addedTo.innerHTML = ' <img class="add-to-cart-result-img" src="Images/images/icons/checkmark.png"><div class="add-to-cart-text"> Added</div>';
    
    setTimeout(() => {
      addedTo.innerHTML =''
    }, 5000);*/
  })
});