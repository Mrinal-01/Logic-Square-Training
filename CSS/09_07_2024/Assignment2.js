// An array of product objects, each with the following structure:
// const products = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
//   { id: 3, name: 'Tablet', price: 750 },
//   { id: 4, name: 'Monitor', price: 300 },
//   { id: 5, name: 'Headphones', price: 150 }
// ];

// An array of order objects, each with the following structure:

// const orders = [
//   { orderId: 1, customerId: 1, items: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }] },
//   { orderId: 2, customerId: 2, items: [{ productId: 3, quantity: 1 }] },
//   { orderId: 3, customerId: 1, items: [{ productId: 4, quantity: 2 }, { productId: 5, quantity: 1 }] },
//   { orderId: 4, customerId: 3, items: [{ productId: 2, quantity: 3 }, { productId: 5, quantity: 2 }] }
// ];

// Your tasks are:

// Calculate the total value of each order.
// Identify the customer who spent the most money.
// Find the most frequently ordered product.
// List all customers who ordered a specific product (e.g., product with ID 2).



//Total value of each order
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 750 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Headphones', price: 150 }
  ];

  const orders = [
    { orderId: 1, customerId: 1, items: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }] },
    { orderId: 2, customerId: 2, items: [{ productId: 3, quantity: 1 }] },
    { orderId: 3, customerId: 1, items: [{ productId: 4, quantity: 5 }, { productId: 5, quantity: 1 }] },
    { orderId: 4, customerId: 3, items: [{ productId: 2, quantity: 3 }, { productId: 5, quantity: 2 }] }
  ];

  let totalPrice=orders.map(ele=>{
    total=0
        for(i of ele.items){
            match=products.find(pro=>i.productId==pro.id)
            total+=match.price*i.quantity
        }
        let resultObj={
            orderId:ele.orderId,
            customerId:ele.customerId,
            // items:ele.items,
            totalPrice:total
        }
        return resultObj
  })
  console.log("Total Price of Each order: ");
  console.log(totalPrice);

  //Maximum purchase Customer
  max=totalPrice[0]
  maxPurchase=totalPrice.forEach(e=>{
    if(e.totalPrice>max.price){
        max=e
    }
  })
  console.log("Customer who spent more money:");
  console.log(max); 
  
  
  
  //Most frequently order product
  const frequentProd = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      if (!frequentProd[item.productId]) {
        frequentProd[item.productId] = 0;
      }
      frequentProd[item.productId] += item.quantity;
    });
  });
  let maxFrequency = 0;
  let mostFrequentProduct = {};

  for (const productId in frequentProd) {
    if (frequentProd[productId] > maxFrequency) {
      maxFrequency = frequentProd[productId];
      mostFrequentProduct = productId;
    }
  }
  
  productDetails=[]
  for(i in frequentProd){
    if(frequentProd[i]==frequentProd[mostFrequentProduct]){
      productDetails.push({
        id:i,
        name:products[i].name,
        price:products[i].price
      })
    }
    
  }


  
  console.log("Most Frquent Order productId: ",mostFrequentProduct);
  console.log('Most frequent product details:');
  console.log(productDetails);
  



