(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    // Function to check if user is logged in
    function isLoggedIn() {
        return localStorage.getItem('currentUser') !== null;
    }

    // Function to show login alert
    function showLoginAlert() {
        alert("Please login first.");
    }

    // Cart and Wishlist functionality
    let cart = [];
    let wishlist = [];

    // Function to add items to wishlist
    function addToWishlist(productName, price) {
        if (!isLoggedIn()) {
            showLoginAlert();
            return;
        }
        const existingItem = wishlist.find(item => item.name === productName);
        if (!existingItem) {
            wishlist.push({ name: productName, price: price });
            displayWishlist();
            alert(`${productName} added to wishlist!`);
        } else {
            alert(`${productName} is already in your wishlist!`);
        }
    }

    // Function to remove items from wishlist
    function removeFromWishlist(index) {
        if (!isLoggedIn()) {
            showLoginAlert();
            return;
        }
        wishlist.splice(index, 1);
        displayWishlist();
    }

    // Function to display wishlist
    function displayWishlist() {
        const wishlistCount = document.getElementById('wishlist-count');
        wishlistCount.textContent = wishlist.length;
    }

    // Function to add items to cart
    function addToCart(productName, price) {
        if (!isLoggedIn()) {
            showLoginAlert();
            return;
        }
        const existingItem = cart.find(item => item.name === productName);
        if (!existingItem) {
            cart.push({ name: productName, price: price, quantity: 1 });
        } else {
            existingItem.quantity += 1;
        }
        updateCartDisplay();
        alert(`${productName} added to cart!`);
    }

    // Function to remove items from cart
    function removeFromCart(index) {
        if (!isLoggedIn()) {
            showLoginAlert();
            return;
        }
        cart.splice(index, 1);
        updateCartDisplay();
    }

    // Function to update cart display
    function updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        const cartDropdown = document.getElementById('cart-dropdown');
        
        if (cartCount) {
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }
        
        if (cartDropdown) {
            let cartHTML = '<ul class="list-group">';
            let total = 0;
            
            cart.forEach((item, index) => {
                cartHTML += `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
                        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
                    </li>
                `;
                total += item.price * item.quantity;
            });
            
            cartHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Total:</strong>
                    <strong>$${total.toFixed(2)}</strong>
                </li>
            </ul>`;
            
            cartDropdown.innerHTML = cartHTML;
        }
    }

    // My Order functionality
    $(document).ready(function() {
        $('.nav-link.dropdown-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).next('.dropdown-menu').toggleClass('show');
        });

        // Close dropdown when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.nav-item.dropdown').length) {
                $('.dropdown-menu').removeClass('show');
            }
        });

        // Track Order functionality
        $('#track-order').on('click', function(e) {
            e.preventDefault();
            if (!isLoggedIn()) {
                showLoginAlert();
                return;
            }
            alert('Tracking your order... (This is a placeholder)');
        });

        // Edit Order functionality
        $('#edit-order').on('click', function(e) {
            e.preventDefault();
            if (!isLoggedIn()) {
                showLoginAlert();
                return;
            }
            alert('Editing your order... (This is a placeholder)');
        });

        // Wishlist functionality
        $('#wishlist').on('click', function(e) {
            e.preventDefault();
            if (!isLoggedIn()) {
                showLoginAlert();
                return;
            }
            alert(`You have ${wishlist.length} item(s) in your wishlist.`);
        });

        // Cart functionality
        $('#cart').on('click', function(e) {
            e.preventDefault();
            if (!isLoggedIn()) {
                showLoginAlert();
                return;
            }
            updateCartDisplay();
        });

        // Initial cart display update
        if (isLoggedIn()) {
            updateCartDisplay();
        }
    });

    // Expose functions to global scope
    window.addToWishlist = addToWishlist;
    window.removeFromWishlist = removeFromWishlist;
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;

})(jQuery);