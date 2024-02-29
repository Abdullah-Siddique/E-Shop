// Sample product data
const products = [
    { id: 1, name: 'Shirt 1', price: 19.99, description: 'Sylish T-Shirts for kids and teenagers' },
    { id: 2, name: 'Shirt 2', price: 24.99, description: 'Brand new shirts for men' },
    { id: 3, name: 'Pant 1', price: 29.99, description: 'Trditional pants for men' },
    { id: 4, name: 'Pant 2', price: 34.99, description: 'Stylish pants for men' },
    { id: 5, name: 'Burger', price: 9.99, description: 'Yummy! Delicious Burger' },
    { id: 6, name: 'Cake', price: 15.99, description: 'Black Forest' }
];

// Function to display products on the page
function displayProducts() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        main.appendChild(productCard);
    });
}

// Call the function to display products when the page loads
window.addEventListener('load', displayProducts);
