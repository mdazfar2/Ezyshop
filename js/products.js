/** 
 * products.js
 * 
 * This script handles the functionality for the products page of the application.
 * It manages the display of products based on specific categories and shops.
 * It handles the search functionality in products page.
 *
 * Key Features:
 * - Display shop-specific products when shop URL parameted is detected.
 * - Display category-specific products when category URL parameted is detected.
 * - Implement a search functionality that allows users to find products 
 *   based on their titles or descriptions.
 *
 * Usage:
 * - This script should be included in the products.html file.
 * 
 * Dependencies:
 * This script depends on auth.js and main.js. 
 * Make sure to include these two files above the script tag of product.js
 * 
 * Author: kavya41004
 * Date: 07 October 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    if (!isUserLoggedIn()) {
        window.location.href = "RegisterPages/register.html";
    }else {
        document.body.style.display = 'block'; 
    }
});


const products = [
    // Fashion
    { product_title: "Men's Casual Shirt", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "", product_id: 1, cost: 25 },
    { product_title: "Women's Scarf", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "", product_id: 2, cost: 25 },
    { product_title: "Kids' T-Shirt", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "", product_id: 3, cost: 15 },
    { product_title: "Leather Jacket", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "", product_id: 4, cost: 120 },
    { product_title: "Sports Shoes", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "", product_id: 5, cost: 65 },
    { product_title: "Winter Coat", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "", product_id: 6, cost: 150 },
    { product_title: "Jeans", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "", product_id: 7, cost: 40 },
    { product_title: "Sunglasses", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "", product_id: 8, cost: 20 },
    { product_title: "Handbag", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "", product_id: 9, cost: 80 },
    { product_title: "Hand Kerchief", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "", product_id: 76, cost: 80 },
    
    // Electronics
    { product_title: "Smartphone", product_category: "Electronics", product_shop: "Tech World", product_img_url: "", product_id: 10, cost: 699 },
    { product_title: "Laptop", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "", product_id: 11, cost: 999 },
    { product_title: "Wireless Headphones", product_category: "Electronics", product_shop: "Tech World", product_img_url: "", product_id: 12, cost: 150 },
    { product_title: "Smartwatch", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "", product_id: 13, cost: 250 },
    { product_title: "Bluetooth Speaker", product_category: "Electronics", product_shop: "Tech World", product_img_url: "", product_id: 14, cost: 80 },
    { product_title: "Tablet", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "", product_id: 15, cost: 450 },
    { product_title: "External Hard Drive", product_category: "Electronics", product_shop: "Tech World", product_img_url: "", product_id: 16, cost: 100 },
    { product_title: "4K Monitor", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "", product_id: 17, cost: 300 },
    { product_title: "Gaming Console", product_category: "Electronics", product_shop: "Tech World", product_img_url: "", product_id: 18, cost: 499 },
    
    // Groceries
    { product_title: "Organic Apples", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "", product_id: 19, cost: 3 },
    { product_title: "Whole Grain Bread", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "", product_id: 20, cost: 2 },
    { product_title: "Milk (1L)", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "", product_id: 21, cost: 1 },
    { product_title: "Eggs (dozen)", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "", product_id: 22, cost: 2 },
    { product_title: "Chicken Breast (1kg)", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "", product_id: 23, cost: 10 },
    { product_title: "Fresh Spinach", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "", product_id: 24, cost: 3 },
    { product_title: "Rice (5kg)", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "", product_id: 25, cost: 15 },
    { product_title: "Pasta (500g)", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "", product_id: 26, cost: 2 },
    { product_title: "Tomato Sauce", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "", product_id: 27, cost: 2 },
    { product_title: "Soy Sauce", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "", product_id: 78, cost: 80 },
    
    // Beauty
    { product_title: "Moisturizer", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 36, cost: 25 },
    { product_title: "Lipstick", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 37, cost: 15 },
    { product_title: "Facial Cleanser", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 38, cost: 20 },
    { product_title: "Eye Shadow Palette", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 39, cost: 30 },
    { product_title: "Nail Polish", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 40, cost: 10 },
    { product_title: "Sunscreen", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 41, cost: 18 },
    { product_title: "Perfume", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 42, cost: 60 },
    { product_title: "Hair Dryer", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "", product_id: 43, cost: 50 },
    
    // Sports
    { product_title: "Running Shoes", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "", product_id: 44, cost: 70 },
    { product_title: "Yoga Mat", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "", product_id: 45, cost: 25 },
    { product_title: "Dumbbells Set", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "", product_id: 46, cost: 50 },
    { product_title: "Tennis Racket", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "", product_id: 47, cost: 80 },
    { product_title: "Soccer Ball", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "", product_id: 48, cost: 30 },
    { product_title: "Swimming Goggles", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "", product_id: 49, cost: 15 },
    { product_title: "Baseball Glove", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "", product_id: 50, cost: 35 },
    
    // Health
    { product_title: "Multivitamins", product_category: "Health", product_shop: "Wellness Center", product_img_url: "", product_id: 51, cost: 20 },
    { product_title: "Protein Powder", product_category: "Health", product_shop: "Wellness Center", product_img_url: "", product_id: 52, cost: 40 },
    { product_title: "Blood Pressure Monitor", product_category: "Health", product_shop: "Wellness Center", product_img_url: "", product_id: 53, cost: 60 },
    { product_title: "Fitness Tracker", product_category: "Health", product_shop: "Wellness Center", product_img_url: "", product_id: 54, cost: 70 },
    { product_title: "Yoga Block", product_category: "Health", product_shop: "Wellness Center", product_img_url: "", product_id: 55, cost: 15 },
    
    // Books
    { product_title: "The Great Gatsby", product_category: "Books", product_shop: "Book Nook", product_img_url: "", product_id: 56, cost: 10 },
    { product_title: "1984", product_category: "Books", product_shop: "RBook Nook", product_img_url: "", product_id: 57, cost: 12 },
    { product_title: "To Kill a Mockingbird", product_category: "Books", product_shop: "Book Nook", product_img_url: "", product_id: 58, cost: 15 },
    { product_title: "Pride and Prejudice", product_category: "Books", product_shop: "Book Nook", product_img_url: "", product_id: 59, cost: 10 },
    { product_title: "Moby Dick", product_category: "Books", product_shop: "Book Nook", product_img_url: "", product_id: 60, cost: 18 },
    
    // Toys
    { product_title: "Building Blocks", product_category: "Toys", product_shop: "Toy Box", product_img_url: "", product_id: 63, cost: 30 },
    { product_title: "Puzzle Game", product_category: "Toys", product_shop: "Toy Box", product_img_url: "", product_id: 64, cost: 25 },
    { product_title: "Action Figure", product_category: "Toys", product_shop: "Toy Box", product_img_url: "", product_id: 65, cost: 20 },
    { product_title: "Doll Set", product_category: "Toys", product_shop: "Toy Box", product_img_url: "", product_id: 66, cost: 35 },
    { product_title: "Remote Control Car", product_category: "Toys", product_shop: "Toy Box", product_img_url: "", product_id: 67, cost: 45 },
    
    // Baby Products
    { product_title: "Diapers (Pack of 30)", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "", product_id: 68, cost: 25 },
    { product_title: "Baby Wipes", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "", product_id: 69, cost: 10 },
    { product_title: "Baby Monitor", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "", product_id: 70, cost: 70 },
    { product_title: "Baby Stroller", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "", product_id: 71, cost: 120 },
    
    // Automotive
    { product_title: "Car Wax", product_category: "Automotive", product_shop: "Auto Zone", product_img_url: "", product_id: 75, cost: 15 },
    { product_title: "Tire Inflator", product_category: "Automotive", product_shop: "Auto Zone", product_img_url: "", product_id: 80, cost: 30 },
    
    // Pet Supplies
    { product_title: "Dog Food (10kg)", product_category: "Pet Supplies", product_shop: "Pet Paradise", product_img_url: "", product_id: 81, cost: 45 },
    { product_title: "Cat Litter", product_category: "Pet Supplies", product_shop: "Pet Paradise", product_img_url: "", product_id: 82, cost: 20 },
    { product_title: "Dog Leash", product_category: "Pet Supplies", product_shop: "Pet Paradise", product_img_url: "", product_id: 83, cost: 15 },
];

let currentPage = 1; 
const productsPerPage = 9;
let currentCategory = getCategoryFromURL();
let currentShop = getShopFromURL();
let filteredProducts = []; 

window.onload = () => {
    updateHeaderName();
    loadProducts(); 
};

function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category') || 'all';  // Default to 'all' if no category provided
}

function getShopFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('shop') || null;  // Default to 'all' if no category provided
}

function updateHeaderName() {
    let category = currentCategory; // Handle null or undefined
    let shop = currentShop || ""; // Handle null or undefined
    let headerName = "all";
    let pathGeneralHeading = (shop) ? '<a class="text-white" href="shops.html">Our Shops</a>' : '<a class="text-white" href="category.html">Our Categories</a>';
    if (shop) {
        shop = shop.charAt(0).toUpperCase() + shop.slice(1);
        headerName = shop;
    } else if (category) {
        category = category.charAt(0).toUpperCase() + category.slice(1);
        headerName = category;
    }

    const bigHeadingElement = document.getElementById('big-heading');
    if (bigHeadingElement) bigHeadingElement.textContent = headerName;

    const pathGeneralElement = document.getElementById('path-general');
    if (pathGeneralElement) pathGeneralElement.innerHTML = pathGeneralHeading;

    const pathSpecificElement = document.getElementById('path-specific');
    if (pathSpecificElement) pathSpecificElement.innerHTML = headerName;

}

function loadProducts() {
    if (!filteredProducts.length) {
        if(currentShop != null){
            filteredProducts = products.filter(p => p.product_shop.toLowerCase() === currentShop.toLowerCase());
        }
        else{
            filteredProducts = products.filter(p => currentCategory === 'all' || p.product_category.toLowerCase() === currentCategory.toLowerCase());
        }
    }           
    const productsToDisplay = filteredProducts.slice(0, currentPage * productsPerPage);
    displayProducts(productsToDisplay);

    if (productsToDisplay.length === filteredProducts.length) {
        document.getElementById('load-more-products').style.display = 'none';
        document.getElementById('end-message').innerHTML = '<p class="text-center">You have reached the end of the products!</p>';
        document.getElementById('end-message').style.display = 'block'; 
    } else {
        document.getElementById('load-more-products').style.display = 'block'; 
        document.getElementById('end-message').style.display = 'none'; 
    }
}

function displayProducts(productList) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';  
    productList.forEach(product => {
        let img_url = "img/products/" + product.product_id.toString() + ".jpeg";
        // Setting the product images to product-image-not-available.png if the category is not in ['Groceries', 'Electronics', 'Fashion']
        if (product.product_category !== 'Groceries' && product.product_category !== 'Electronics' && product.product_category !== 'Fashion'){
            img_url = "img/products/product-image-not-available.png";
        }
        const productCard = `
            <div class="col-12 col-sm-6 col-lg-4 mb-5">
                <div id=${"product" + product.product_id} class="card border-0 bg-light shadow-sm product-card">
                    <img class="card-img-top mb-3" src=${img_url}  alt=${product.product_name + " image"} />
                    <div class="card-body text-center p-2 ">
                        <div class="row p-2 product-content">
                            <div class="col-8 text-left align-self-start d-flex flex-column align-content-space-between ">
                                <h4 class="product-title mb-1">${product.product_title}</h4>
                                <p class="product-shop">${product.product_shop}</p>
                                <p class="product-category">${product.product_category}</p>
                            </div>
                            <div class="col-4 align-self-start">
                                <h3 class="product-price text-right m-0">₹${product.cost}</h3>
                            </div>
                            <div class="col-12">
                                <button onclick="addToCart('${product.product_title.replace(/'/g, "\\'")}')" class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

function filterProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const container = document.getElementById('product-container');
    currentPage = 1;

    filteredProducts = products.filter(product => 
        product.product_title.toLowerCase().includes(query) ||
        product.product_category.toLowerCase().includes(query)
    );
    
    if(filteredProducts.length === 0){
        document.getElementById('end-message').innerHTML = '<p class="text-center">No products found</p>';
        document.getElementById('load-more-products').style.display = 'none';
    } else {
        document.getElementById('end-message').style.display = 'none';
        document.getElementById('load-more-products').style.display = 'block'; 
    }
    
    loadProducts();
    container.scrollIntoView({ behavior: 'smooth' });
}

function loadMoreProducts() {
    currentPage++;
    loadProducts();
}

function addToCart(productName) {
    alert(`${productName} added to cart!`);
}