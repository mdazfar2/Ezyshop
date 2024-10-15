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
        document.body.classList.remove('d-none'); 
    }
});


const products = [
    // Fashion
    { product_title: "Men's Casual Shirt", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "",hover_img_url:"", product_id: 1, cost: 1999 },
    { product_title: "Women's Scarf", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "",hover_img_url:"",  product_id: 2, cost: 299 },
    { product_title: "Kid's T-Shirt", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "",hover_img_url:"",  product_id: 3, cost: 699 },
    { product_title: "Men's Leather Jacket", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "",hover_img_url:"",  product_id: 4, cost: 1299 },
    { product_title: "Sports Shoes", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "",hover_img_url:"",  product_id: 5, cost: 1999 },
    { product_title: "Cozy Winter Coat", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "",hover_img_url:"",  product_id: 6, cost: 1500 },
    { product_title: "Women's Jeans", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "",hover_img_url:"",  product_id: 7, cost: 999 },
    { product_title: "Seamless Sunglasses", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "",hover_img_url:"",  product_id: 8, cost: 799 },
    { product_title: "Stylish Handbags", product_category: "Fashion", product_shop: "Fashion Hub", product_img_url: "",hover_img_url:"",  product_id: 9, cost: 999 },
    { product_title: "Handkerchief", product_category: "Fashion", product_shop: "Style Studio", product_img_url: "",hover_img_url:"",  product_id: 28, cost: 80 },
    
    // Electronics
    { product_title: "Smartphone", product_category: "Electronics", product_shop: "Tech World", product_img_url: "",hover_img_url:"",  product_id: 10, cost: 8999 },
    { product_title: "Laptop", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "",hover_img_url:"",  product_id: 11, cost: 39999 },
    { product_title: "Wireless Headphones", product_category: "Electronics", product_shop: "Tech World", product_img_url: "",hover_img_url:"",  product_id: 12, cost: 1499 },
    { product_title: "Smartwatch", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "",hover_img_url:"",  product_id: 13, cost: 1999 },
    { product_title: "Bluetooth Speaker", product_category: "Electronics", product_shop: "Tech World", product_img_url: "",hover_img_url:"",  product_id: 14, cost: 999 },
    { product_title: "Tablet", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "",hover_img_url:"",  product_id: 15, cost: 9999 },
    { product_title: "External Hard Drive", product_category: "Electronics", product_shop: "Tech World", product_img_url: "",hover_img_url:"",  product_id: 16, cost: 2999 },
    { product_title: "4K Monitor", product_category: "Electronics", product_shop: "Gadget Zone", product_img_url: "",hover_img_url:"",  product_id: 17, cost: 4999 },
    { product_title: "Gaming Console", product_category: "Electronics", product_shop: "Tech World", product_img_url: "",hover_img_url:"",  product_id: 18, cost: 8999 },
    
    // Groceries
    { product_title: "Organic Apples", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "",hover_img_url:"", product_id: 19, cost: 52 },
    { product_title: "Whole Grain Bread", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "",hover_img_url:"", product_id: 20, cost: 38 },
    { product_title: "Fresh Milk (1L)", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "",hover_img_url:"", product_id: 21, cost: 52 },
    { product_title: "Eggs (dozen)", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "",hover_img_url:"", product_id: 22, cost: 82 },
    { product_title: "Chicken Breast (1kg)", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "",hover_img_url:"", product_id: 23, cost: 192 },
    { product_title: "Fresh Spinach", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "",hover_img_url:"", product_id: 24, cost: 52 },
    { product_title: "Rice (5kg)", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "",hover_img_url:"", product_id: 25, cost: 92 },
    { product_title: "Pasta (500g)", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "",hover_img_url:"", product_id: 26, cost: 42 },
    { product_title: "Tomato Sauce", product_category: "Groceries", product_shop: "Fresh Mart", product_img_url: "",hover_img_url:"", product_id: 27, cost: 82 },
    { product_title: "Soy Sauce", product_category: "Groceries", product_shop: "Green Grocer", product_img_url: "",hover_img_url:"", product_id: 29, cost: 82 },
    
    // Beauty
    { product_title: "Moisturizer", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 36, cost: 199 },
    { product_title: "Lipstick", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 37, cost: 499 },
    { product_title: "Facial Cleanser", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 38, cost: 199 },
    { product_title: "Eye Shadow Palette", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 39, cost: 699 },
    { product_title: "Nail Polish", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 40, cost: 49 },
    { product_title: "Sunscreen", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 41, cost: 495 },
    { product_title: "Perfume", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 42, cost: 569 },
    { product_title: "Hair Dryer", product_category: "Beauty", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 43, cost: 899 },
    
    // Sports
    { product_title: "Running Shoes", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 44, cost: 1299 },
    { product_title: "Yoga Mat", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 45, cost: 399 },
    { product_title: "Dumbbells Set", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 46, cost: 2999 },
    { product_title: "Tennis Racket", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 47, cost: 899 },
    { product_title: "Soccer Ball", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 48, cost: 1199 },
    { product_title: "Swimming Goggles", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 49, cost: 239 },
    { product_title: "Baseball Glove", product_category: "Sports", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 50, cost: 459 },
    
    // Health
    { product_title: "Multivitamins", product_category: "Health", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 51, cost: 599 },
    { product_title: "Protein Powder", product_category: "Health", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 52, cost: 3999 },
    { product_title: "Blood Pressure Monitor", product_category: "Health", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 53, cost: 1199 },
    { product_title: "Fitness Tracker", product_category: "Health", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 54, cost: 1599 },
    { product_title: "Yoga Block", product_category: "Health", product_shop: "Wellness Center", product_img_url: "",hover_img_url:"",  product_id: 55, cost: 399 },
    
    // Books
    { product_title: "The Great Gatsby", product_category: "Books", product_shop: "Book Nook", product_img_url: "",hover_img_url:"",  product_id: 56, cost: 245 },
    { product_title: "Sherlock Holmes", product_category: "Books", product_shop: "Book Nook", product_img_url: "",hover_img_url:"",  product_id: 57, cost: 355 },
    { product_title: "To Kill a Mockingbird", product_category: "Books", product_shop: "Book Nook", product_img_url: "",hover_img_url:"",  product_id: 58, cost: 245 },
    { product_title: "Pride and Prejudice", product_category: "Books", product_shop: "Book Nook", product_img_url: "",hover_img_url:"",  product_id: 59, cost: 555 },
    { product_title: "Moby Dick", product_category: "Books", product_shop: "Book Nook", product_img_url: "",hover_img_url:"",  product_id: 60, cost: 455 },
    
    // Toys
    { product_title: "Building Blocks", product_category: "Toys", product_shop: "Toy Box", product_img_url: "",hover_img_url:"",  product_id: 61, cost: 299 },
    { product_title: "Puzzle Game", product_category: "Toys", product_shop: "Toy Box", product_img_url: "",hover_img_url:"",  product_id: 62, cost: 299 },
    { product_title: "Action Figure", product_category: "Toys", product_shop: "Toy Box", product_img_url: "",hover_img_url:"",  product_id: 63, cost: 599 },
    { product_title: "Doll Set", product_category: "Toys", product_shop: "Toy Box", product_img_url: "",hover_img_url:"",  product_id: 64, cost: 299 },
    { product_title: "Remote Control Car", product_category: "Toys", product_shop: "Toy Box", product_img_url: "",hover_img_url:"",  product_id: 65, cost: 799 },
    
    // Baby Products
    { product_title: "Diapers (Pack of 30)", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "",hover_img_url:"",  product_id: 66, cost: 295 },
    { product_title: "Baby Wipes", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "",hover_img_url:"",  product_id: 67, cost: 195 },
    { product_title: "Baby Cream", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "",hover_img_url:"",  product_id: 68, cost: 275 },
    { product_title: "Baby Stroller", product_category: "Baby Products", product_shop: "Baby Bliss", product_img_url: "",hover_img_url:"",  product_id: 69, cost: 1299 },
    
    // Automotive
    { product_title: "Car Wax", product_category: "Automotive", product_shop: "Auto Zone", product_img_url: "",hover_img_url:"",  product_id: 70, cost: 499 },
    { product_title: "Tire Inflator", product_category: "Automotive", product_shop: "Auto Zone", product_img_url: "",hover_img_url:"",  product_id: 71, cost: 3999 },
    
    // Pet Supplies
    { product_title: "Dog Food (10kg)", product_category: "Pet Supplies", product_shop: "Pet Paradise", product_img_url: "",hover_img_url:"",  product_id: 72, cost: 1299 },
    { product_title: "Cat Litter", product_category: "Pet Supplies", product_shop: "Pet Paradise", product_img_url: "",hover_img_url:"",  product_id: 73, cost: 1199 },
    { product_title: "Dog Leash", product_category: "Pet Supplies", product_shop: "Pet Paradise", product_img_url: "",hover_img_url:"",  product_id: 74, cost: 699 },

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

function loadProducts(filteredList = []) {
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

    if (filteredList.length === 0) {
        document.getElementById('load-more-products').style.display = 'none';
        document.getElementById('end-message').innerHTML = '<p class="text-center">No Products Found!</p>';
        document.getElementById('end-message').style.display = 'block';
    }else if (productsToDisplay.length === filteredProducts.length) {
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
    container.innerHTML = '';  // Clear the container before adding new products

    productList.forEach(product => {
        // Constructing the main image URL based on product_id
        let img_url = `img/updatedProducts/${product.product_id}.webp`;
        let hover_img_url = `img/hoverProducts/${product.product_id}.webp`; // Image for hover

        // If the product category is not in the specified categories, use a default image
        if (product.product_category !== 'Groceries' && 
            product.product_category !== 'Electronics' && 
            product.product_category !== 'Fashion' && 
            product.product_category !== 'Beauty' &&
            product.product_category !== 'Sports' &&
            product.product_category !== 'Health' &&
            product.product_category !== 'Books' &&
            product.product_category !== 'Toys' &&
            product.product_category !== 'Baby Products' &&
            product.product_category !== 'Automotive' &&
            product.product_category !== 'Pet Supplies') {
            img_url = "img/products/product-image-not-available.png";
            hover_img_url = "img/products/product-image-not-available.png"; // Use the same default for hover
        }

        const productCard = `
            <div class="col-12 col-sm-6 col-lg-4 p-2">
                <div id="${"product" + product.product_id}" class="card border-0 bg-light shadow-sm product-card">
                    <img class="card-img-top mb-3" 
                         src="${img_url}" 
                         alt="${product.product_name} image" 
                         onmouseover="this.src='${hover_img_url}'" 
                         onmouseout="this.src='${img_url}'" />
                    <div class="card-body text-center p-1">
                        <div class="product-content">
                            <h4 class="product-title mb-2">${product.product_title}</h4>
                            <p class="product-shop">${product.product_shop}</p>
                            <p class="product-category">${product.product_category}</p>
                        </div>
                        <div class="product-price text-center m-1">₹${product.cost.toLocaleString('en-IN')}</div>
                        <div class="d-flex justify-content-between align-items-center"> 
                            <button onclick="addToCart('${product.product_title.replace(/'/g, "\\'")}')" class="btn btn-primary add-to-cart-btn mt-2">Add to Cart</button>
                            <span class="save-for-later-icon save-for-later-btn" onclick="saveForLater('${product.product_title.replace(/'/g, "\\'")}')" style="cursor: pointer;">
                                <i class="fa-regular fa-bookmark mt-2" title="Save for Later" style="font-size: 1.2rem; color: #117a8b;"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Append the product card to the container
        container.innerHTML += productCard;
    });
}


function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

function filterProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const container = document.getElementById('product-container');
    currentPage = 1;

    const category = getCategoryFromURL();
    if (query === '') {
        // If the search query is empty, display all products of the selected category
        filteredProducts = products.filter(product =>
            product.product_category.toLowerCase() === category
        );
    } else {
        // Split query into words and filter products based on each word
        const queryWords = query.split(/\s+/);

        filteredProducts = products.filter(product => {
            // Ensure the product belongs to the selected category
            if (product.product_category.toLowerCase() !== category) {
                return false;
            }

            // Check if the product title or category matches any word from the query
            const productTitleWords = product.product_title.toLowerCase().split(/\s+/);
            return queryWords.every(queryWord =>
                productTitleWords.some(titleWord => titleWord.startsWith(queryWord))
            );
        });
    }

    if (filteredProducts.length === 0) {
        // document.getElementById('end-message').innerHTML = '<p class="text-center">No products found</p>';
        document.getElementById('product-container').style.display = 'none';
    } else {
        document.getElementById('end-message').style.display = 'none';
        document.getElementById('product-container').style.display = '';
    }

    loadProducts(filteredProducts);
    container.scrollIntoView({ behavior: 'smooth' });
}

const debouncedFilterProducts = debounce(filterProducts, 300);

function loadMoreProducts() {
    currentPage++;
    loadProducts();
}
function addToCart(productName) {
    // Show an alert to the user
    alert(`${productName} added to cart!`);

    // Show notification in the HTML element
    const notification = document.getElementById('notification');
    notification.innerText = `${productName} added to cart!`;
    notification.style.display = 'block';

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function saveForLater(productTitle) {
    // Logic to save the product for later
    console.log(`${productTitle} saved for later!`);
    // Implement your saving logic here (e.g., localStorage or sending to backend).
}
