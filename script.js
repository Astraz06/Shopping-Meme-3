// Shopping Cart Management, Product Filtering, Search, and DOM Interactions

class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addProduct(product) {
        this.cart.push(product);
        this.updateCartDisplay();
    }

    removeProduct(productId) {
        this.cart = this.cart.filter(product => product.id !== productId);
        this.updateCartDisplay();
    }

    updateCartDisplay() {
        const cartDisplay = document.getElementById('cart-display');
        cartDisplay.innerHTML = '';
        this.cart.forEach(product => {
            const productElement = document.createElement('div');
            productElement.textContent = `${product.name} - ${product.price}$`;
            cartDisplay.appendChild(productElement);
        });
    }
}

class ProductFilter {
    constructor(products) {
        this.products = products;
    }

    filterByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    searchByName(name) {
        return this.products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    }
}

// Sample product data
const products = [
    { id: 1, name: 'Apple', price: 0.5, category: 'Fruits' },
    { id: 2, name: 'Bread', price: 1.0, category: 'Bakery' },
    { id: 3, name: 'Milk', price: 0.8, category: 'Dairy' }
];

// Initialize shopping cart and product filter
const shoppingCart = new ShoppingCart();
const productFilter = new ProductFilter(products);

// Example of adding a product to the cart
shoppingCart.addProduct(products[0]); // Add Apple to cart