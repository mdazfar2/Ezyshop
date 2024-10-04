const products = [
    // Fashion
    { product_title: "Men's Casual Shirt", product_category: "Fashion", product_img_url: "", product_id: 1, cost: 25 },
    { product_title: "Women's Summer Dress", product_category: "Fashion", product_img_url: "", product_id: 2, cost: 35 },
    { product_title: "Kids' T-Shirt", product_category: "Fashion", product_img_url: "", product_id: 3, cost: 15 },
    { product_title: "Leather Jacket", product_category: "Fashion", product_img_url: "", product_id: 4, cost: 120 },
    { product_title: "Sports Shoes", product_category: "Fashion", product_img_url: "", product_id: 5, cost: 65 },
    { product_title: "Winter Coat", product_category: "Fashion", product_img_url: "", product_id: 6, cost: 150 },
    { product_title: "Jeans", product_category: "Fashion", product_img_url: "", product_id: 7, cost: 40 },
    { product_title: "Sunglasses", product_category: "Fashion", product_img_url: "", product_id: 8, cost: 20 },
    { product_title: "Handbag", product_category: "Fashion", product_img_url: "", product_id: 9, cost: 80 },
    
    // Electronics
    { product_title: "Smartphone", product_category: "Electronics", product_img_url: "", product_id: 10, cost: 699 },
    { product_title: "Laptop", product_category: "Electronics", product_img_url: "", product_id: 11, cost: 999 },
    { product_title: "Wireless Headphones", product_category: "Electronics", product_img_url: "", product_id: 12, cost: 150 },
    { product_title: "Smartwatch", product_category: "Electronics", product_img_url: "", product_id: 13, cost: 250 },
    { product_title: "Bluetooth Speaker", product_category: "Electronics", product_img_url: "", product_id: 14, cost: 80 },
    { product_title: "Tablet", product_category: "Electronics", product_img_url: "", product_id: 15, cost: 450 },
    { product_title: "External Hard Drive", product_category: "Electronics", product_img_url: "", product_id: 16, cost: 100 },
    { product_title: "4K Monitor", product_category: "Electronics", product_img_url: "", product_id: 17, cost: 300 },
    { product_title: "Gaming Console", product_category: "Electronics", product_img_url: "", product_id: 18, cost: 499 },
    
    // Groceries
    { product_title: "Organic Apples", product_category: "Groceries", product_img_url: "", product_id: 19, cost: 3 },
    { product_title: "Whole Grain Bread", product_category: "Groceries", product_img_url: "", product_id: 20, cost: 2 },
    { product_title: "Milk (1L)", product_category: "Groceries", product_img_url: "", product_id: 21, cost: 1 },
    { product_title: "Eggs (dozen)", product_category: "Groceries", product_img_url: "", product_id: 22, cost: 2 },
    { product_title: "Chicken Breast (1kg)", product_category: "Groceries", product_img_url: "", product_id: 23, cost: 10 },
    { product_title: "Fresh Spinach", product_category: "Groceries", product_img_url: "", product_id: 24, cost: 3 },
    { product_title: "Rice (5kg)", product_category: "Groceries", product_img_url: "", product_id: 25, cost: 15 },
    { product_title: "Pasta (500g)", product_category: "Groceries", product_img_url: "", product_id: 26, cost: 2 },
    { product_title: "Tomato Sauce", product_category: "Groceries", product_img_url: "", product_id: 27, cost: 2 },
    
    // Home
    { product_title: "Coffee Maker", product_category: "Home", product_img_url: "", product_id: 28, cost: 80 },
    { product_title: "Air Purifier", product_category: "Home", product_img_url: "", product_id: 29, cost: 150 },
    { product_title: "Vacuum Cleaner", product_category: "Home", product_img_url: "", product_id: 200, cost: 120 },
    { product_title: "Blender", product_category: "Home", product_img_url: "", product_id: 31, cost: 70 },
    { product_title: "Toaster", product_category: "Home", product_img_url: "", product_id: 32, cost: 40 },
    { product_title: "Dishwasher", product_category: "Home", product_img_url: "", product_id: 33, cost: 600 },
    { product_title: "Wall Clock", product_category: "Home", product_img_url: "", product_id: 34, cost: 25 },
    { product_title: "Curtains", product_category: "Home", product_img_url: "", product_id: 35, cost: 45 },
    
    // Beauty
    { product_title: "Moisturizer", product_category: "Beauty", product_img_url: "", product_id: 36, cost: 25 },
    { product_title: "Lipstick", product_category: "Beauty", product_img_url: "", product_id: 37, cost: 15 },
    { product_title: "Facial Cleanser", product_category: "Beauty", product_img_url: "", product_id: 38, cost: 20 },
    { product_title: "Eye Shadow Palette", product_category: "Beauty", product_img_url: "", product_id: 39, cost: 30 },
    { product_title: "Nail Polish", product_category: "Beauty", product_img_url: "", product_id: 40, cost: 10 },
    { product_title: "Sunscreen", product_category: "Beauty", product_img_url: "", product_id: 41, cost: 18 },
    { product_title: "Perfume", product_category: "Beauty", product_img_url: "", product_id: 42, cost: 60 },
    { product_title: "Hair Dryer", product_category: "Beauty", product_img_url: "", product_id: 43, cost: 50 },
    
    // Sports
    { product_title: "Running Shoes", product_category: "Sports", product_img_url: "", product_id: 44, cost: 70 },
    { product_title: "Yoga Mat", product_category: "Sports", product_img_url: "", product_id: 45, cost: 25 },
    { product_title: "Dumbbells Set", product_category: "Sports", product_img_url: "", product_id: 46, cost: 50 },
    { product_title: "Tennis Racket", product_category: "Sports", product_img_url: "", product_id: 47, cost: 80 },
    { product_title: "Soccer Ball", product_category: "Sports", product_img_url: "", product_id: 48, cost: 30 },
    { product_title: "Swimming Goggles", product_category: "Sports", product_img_url: "", product_id: 49, cost: 15 },
    { product_title: "Baseball Glove", product_category: "Sports", product_img_url: "", product_id: 50, cost: 35 },
    
    // Health
    { product_title: "Multivitamins", product_category: "Health", product_img_url: "", product_id: 51, cost: 20 },
    { product_title: "Protein Powder", product_category: "Health", product_img_url: "", product_id: 52, cost: 40 },
    { product_title: "Blood Pressure Monitor", product_category: "Health", product_img_url: "", product_id: 53, cost: 60 },
    { product_title: "Fitness Tracker", product_category: "Health", product_img_url: "", product_id: 54, cost: 70 },
    { product_title: "Yoga Block", product_category: "Health", product_img_url: "", product_id: 55, cost: 15 },
    
    // Books
    { product_title: "The Great Gatsby", product_category: "Books", product_img_url: "", product_id: 56, cost: 15 },
    { product_title: "1984 by George Orwell", product_category: "Books", product_img_url: "", product_id: 57, cost: 12 },
    { product_title: "To Kill a Mockingbird", product_category: "Books", product_img_url: "", product_id: 58, cost: 18 },
    { product_title: "Moby Dick", product_category: "Books", product_img_url: "", product_id: 59, cost: 22 },
    { product_title: "War and Peace", product_category: "Books", product_img_url: "", product_id: 60, cost: 25 },
    { product_title: "Pride and Prejudice", product_category: "Books", product_img_url: "", product_id: 61,

 cost: 20 },
    { product_title: "The Catcher in the Rye", product_category: "Books", product_img_url: "", product_id: 62, cost: 17 },
    
    // Toys
    { product_title: "Building Blocks", product_category: "Toys", product_img_url: "", product_id: 63, cost: 30 },
    { product_title: "Puzzle Game", product_category: "Toys", product_img_url: "", product_id: 64, cost: 25 },
    { product_title: "Action Figure", product_category: "Toys", product_img_url: "", product_id: 65, cost: 20 },
    { product_title: "Doll Set", product_category: "Toys", product_img_url: "", product_id: 66, cost: 35 },
    { product_title: "Remote Control Car", product_category: "Toys", product_img_url: "", product_id: 67, cost: 45 },
    
    // Baby
    { product_title: "Diapers (Pack of 30)", product_category: "Baby", product_img_url: "", product_id: 68, cost: 25 },
    { product_title: "Baby Wipes", product_category: "Baby", product_img_url: "", product_id: 69, cost: 10 },
    { product_title: "Baby Monitor", product_category: "Baby", product_img_url: "", product_id: 70, cost: 70 },
    { product_title: "Baby Stroller", product_category: "Baby", product_img_url: "", product_id: 71, cost: 120 },
    
    // Products
    { product_title: "Multi-Purpose Cleaner", product_category: "Products", product_img_url: "", product_id: 72, cost: 15 },
    { product_title: "Trash Bags (Pack of 50)", product_category: "Products", product_img_url: "", product_id: 73, cost: 20 },
    { product_title: "Paper Towels", product_category: "Products", product_img_url: "", product_id: 74, cost: 12 },
    
    // Automotive
    { product_title: "Car Wax", product_category: "Automotive", product_img_url: "", product_id: 75, cost: 15 },
    { product_title: "Tire Inflator", product_category: "Automotive", product_img_url: "", product_id: 80, cost: 30 },
    
    // Pet Supplies
    { product_title: "Dog Food (10kg)", product_category: "Pet Supplies", product_img_url: "", product_id: 81, cost: 45 },
    { product_title: "Cat Litter", product_category: "Pet Supplies", product_img_url: "", product_id: 82, cost: 20 },
    { product_title: "Dog Leash", product_category: "Pet Supplies", product_img_url: "", product_id: 83, cost: 15 },
];