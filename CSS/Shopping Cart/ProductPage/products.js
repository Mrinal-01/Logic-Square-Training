function hover(element) {
  element.setAttribute("src", "./Images/arrow-up.png");
}

function unhover(element) {
  element.setAttribute("src", "./Images/down-arrow.png");
}

document.addEventListener("DOMContentLoaded", function () {
  menu = JSON.parse(localStorage.getItem("menuClicked"));
  for (key in menu) {
    if (menu[key] === true) {
      displayProducts(key);
    }
  }
});
function displayProducts(key) {
  products = JSON.parse(localStorage.getItem("categories"));

  for (category in products) {
    if (key === category) {
      if (products.hasOwnProperty(category)) {
        products[category].forEach((product) => {
          let productItem = document.createElement("div");
          productItem.className = "product-item";

          // Create product link
          let productLink = document.createElement("a");
          productLink.href = "#"; // Update with actual product link if available

          // Create and append product image
          let productImage = document.createElement("img");
          productImage.src = product.image;
          productImage.alt = product.productName;
          productLink.appendChild(productImage);

          // Create and append product name
          let productName = document.createElement("h3");
          productName.textContent = product.productName;
          productLink.appendChild(productName);

          // Create and append product price
          let productPrice = document.createElement("p");
          productPrice.textContent = `₹${product.sellPrice}`;
          productLink.appendChild(productPrice);

          // Create and append product size if available
          if (product.size) {
            let productSize = document.createElement("p");
            productSize.textContent = `Size: ${product.size}`;
            productLink.appendChild(productSize);
          }

          // Create and append product color
          let productColor = document.createElement("p");
          productColor.textContent = `Color: ${product.color}`;
          productLink.appendChild(productColor);

          // Append link to product item container
          productItem.appendChild(productLink);

          // Add the buy-cart div
          productItem.innerHTML += `
          <div class="buy-cart">
            <a href="#" onclick="addToCart('${product.productId}')">Add To Cart</a>
           <!-- <a href="#" onclick="buyNow()">Buy Now</a>  -->
          </div>
          `;

          // Append product item to product list
          productList.appendChild(productItem);
        });
      }
    }
  }
}

function addToCart(productId) {
  let allUser = JSON.parse(localStorage.getItem("registeredUser"));
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let email = currentUser.email;
  let userCart = JSON.parse(localStorage.getItem("userCart")) || {};
  if (!userCart[email]) {
    userCart[email] = [];
  }

  // Check if the product is already in the cart
  let productInCart = userCart[email].find(
    (item) => item.productId === productId
  );
  if (productInCart) {
    productInCart.quantity += 1;
  } else {
    userCart[email].push({ productId: productId, quantity: 1 });
  }

  localStorage.setItem("userCart", JSON.stringify(userCart));
  updateCartCount(email);
}
function updateCartCount(email) {
  let userCart = JSON.parse(localStorage.getItem("userCart")) || {};
  let cartCount = userCart[email]
    ? userCart[email].reduce((acc, item) => acc + item.quantity, 0)
    : 0;
  document.getElementById("cartCount").textContent = cartCount;
}

document.addEventListener("DOMContentLoaded", function () {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let email = currentUser.email;
  updateCartCount(email);
});

// Call the function to display the products
// displayProducts(products);

// Initialize cart count for the current user

// This code for opening modal
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
const email = currentUser.email;

window.openCartModal = function () {
  // const email = currentUserEmail;
  document.getElementById("cartModal").style.display = "block";
  displayCartItems(email);
};

window.closeCartModal = function () {
  document.getElementById("cartModal").style.display = "none";
};

function displayCartItems(email) {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  let userCart = JSON.parse(localStorage.getItem("userCart")) || {};
  let cartItems = userCart[email] || [];
  let totalItems = 0;
  let totalAmount = 0;

  cartItems.forEach((item) => {
    let product = getProductById(item.productId);
    if (product) {
      totalItems += item.quantity;
      totalAmount += item.quantity * product.sellPrice;

      let cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      let itemDetails = `
        <img src="${product.image}" alt="${product.productName}">
        <div class="cart-item-details">
          <p>${product.productName}</p>
          <span>${product.description}</span>
          <p>Price: ₹${product.sellPrice}</p>
          <p>Total: ₹${item.quantity * product.sellPrice}</p>
          <div class="cart-item-actions">
            <button onclick="updateQuantity('${email}', '${
        item.productId
      }', -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity('${email}', '${
        item.productId
      }', 1)">+</button>
          </div>
        </div>
      `;

      cartItem.innerHTML = itemDetails;
      cartItemsContainer.appendChild(cartItem);
    }
  });

  document.getElementById("totalItems").textContent = totalItems;
  document.getElementById("totalAmount").textContent = totalAmount;
}

function getProductById(productId) {
  for (const category in products) {
    if (products.hasOwnProperty(category)) {
      let product = products[category].find(
        (product) => product.productId === productId
      );
      if (product) {
        return product;
      }
    }
  }
  return null;
}

function findProductQuantity(productId) {
  const products = JSON.parse(localStorage.getItem("categories"));
  for (const category in products) {
    if (products.hasOwnProperty(category)) {
      const productArray = products[category];
      for (const product of productArray) {
        if (product.productId === productId) {
          return product.quantity;
        }
      }
    }
  }
  return null; // Product not found
}

window.updateQuantity = function (email, productId, change) {
  let userCart = JSON.parse(localStorage.getItem("userCart")) || {};
  let productInCart = userCart[email].find(
    (item) => item.productId === productId
  );

  let prodQuantity = findProductQuantity(productId);
  if (productInCart) {
    productInCart.quantity += change;

    if (productInCart.quantity <= prodQuantity) {
      if (productInCart.quantity <= 0) {
        userCart[email] = userCart[email].filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("userCart", JSON.stringify(userCart));
    } else {
      alert("Sorry! We dont have any more units for this item!");
    }
    displayCartItems(email);
    updateCartCount(email);
  }
};

function updateCartCount(email) {
  let userCart = JSON.parse(localStorage.getItem("userCart")) || {};
  let cartItems = userCart[email] || [];
  let cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  document.getElementById("cartCount").textContent = cartCount;
}




currentUser=JSON.parse(localStorage.getItem("currentUser"))

document.getElementById("profile-image").setAttribute('src',currentUser.image)
