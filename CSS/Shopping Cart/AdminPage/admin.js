function updateTime() {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString();
  document.getElementById("current-time").textContent = `Current Time: ${timeString}`;
}


document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 1000);

  currentUser=JSON.parse(localStorage.getItem('currentUser'))
  const imgUrl=currentUser.image
  document.getElementById('profile-icon').src=imgUrl;
  document.getElementById('name').textContent=`Admin Name: ${currentUser.name}`
  document.getElementById('email').textContent=`Email Id: ${currentUser.email}`
  

  const addProductForm = document.getElementById('add-product-form');
  const productListContainer = document.getElementById('product-list-container');
  const categoryListContainer = document.getElementById('category-list-container');
  const productForm = document.getElementById('productForm');
  const productList = document.getElementById('productList');
  const categoryList = document.getElementById('categoryList');

  // Show Add Product Form
  document.getElementById('add-product-link').addEventListener('click', () => {
    addProductForm.style.display = 'block';
    productListContainer.style.display = 'none';
    categoryListContainer.style.display = 'none';
  });

  // Show Product List
  document.getElementById('show-products-link').addEventListener('click', () => {
    addProductForm.style.display = 'none';
    productListContainer.style.display = 'block';
    categoryListContainer.style.display = 'none';
    displayProducts();
  });

  // Show Category List
  document.getElementById('show-categories-link').addEventListener('click', () => {
    addProductForm.style.display = 'none';
    productListContainer.style.display = 'none';
    categoryListContainer.style.display = 'block';
    displayCategories();
  });

  // Handle Form Submission
  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const description=document.getElementById('desc').value
    const price = document.getElementById('price').value;
    const sellPrice = document.getElementById('sellPrice').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const image=document.getElementById('image').value;

    const product = {
      productId,
      productName,
      category,
      description,
      price,
      sellPrice,
      color,
      size,
      image

    };

    let categories = JSON.parse(localStorage.getItem('categories')) || {};

    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(product);
    localStorage.setItem('categories', JSON.stringify(categories));

    alert('Product added successfully!');
    productForm.reset();
  });

  // Display Products
  function displayProducts() {
    let categories = JSON.parse(localStorage.getItem("categories")) || {};
  let productListContainer = document.getElementById("productList");

  productListContainer.innerHTML = "";

  let table = document.createElement("table");
    table.border = "1";
    table.classList.add('table-style')
  let headerRow = document.createElement("tr");
    let headers = ["Product ID", "Product Name", "Category",'Description', "Price", "Sell Price", "Color","Size","Image"];
    headers.forEach(headerText => {
      let header = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
  
  for (const category in categories) {
    const products = categories[category];

    products.forEach(product => {
      let row = document.createElement("tr");
      

      for (const key in product) {
        let cell = document.createElement("td");
        cell.textContent = product[key];
        row.appendChild(cell);
      }

      table.appendChild(row);
    });
    
    productListContainer.appendChild(table);
  }
  }

  // Display Categories
  function displayCategories() {
    const categories = JSON.parse(localStorage.getItem('categories')) || {};
    categoryList.innerHTML = '';

    for (const category in categories) {
      
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category');
      const categoryTitle = document.createElement('h3');
      categoryTitle.innerText = category;
      categoryDiv.appendChild(categoryTitle);
      categoryList.appendChild(categoryDiv);
      const div=document.getElementById("categoryList")
      const table=document.createElement('table')
      table.border = "1";
      // table.borderCollapse="collapse";
      table.classList.add('table-style')

      let headerRow = document.createElement("tr");
      let headers = ["Product ID", "Product Name", "Category",'Description', "Price", "Sell Price", "Color","Size","Image"];
      headers.forEach(headerText => {
      let header = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
      });
      table.appendChild(headerRow);

      const products = categories[category];
      products.forEach(product => {
      let row = document.createElement("tr");
      for (const key in product) {
        let cell = document.createElement("td");
        cell.textContent = product[key];
        row.appendChild(cell);
      }
      table.appendChild(row);
    });

     div.appendChild(table)
      
    }
  }
});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}