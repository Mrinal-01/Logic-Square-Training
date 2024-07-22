// The object you want to add to the array
let newObject = { name: "John Doe", age: 30 };

// Function to add the object to the array in localStorage
function addToLocalStorageArray(key, obj) {
    // Retrieve the array from localStorage
    let existingArray = localStorage.getItem(key);

    // If there is no existing array, initialize an empty array
    existingArray = existingArray ? JSON.parse(existingArray) : [];

    // Push the new object to the array
    existingArray.push(obj);

    // Store the updated array back in localStorage
    localStorage.setItem(key, JSON.stringify(existingArray));
}

// Call the function with the key and the object
addToLocalStorageArray('myArray', newObject);


