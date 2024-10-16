document.addEventListener("DOMContentLoaded", function () {
  const authButton = document.getElementById('authButton');
  const profileButton = document.getElementById('profileButton');
  const cartPop = document.getElementById('cartPop');
  const cartButton = document.getElementById('cartButton');
  const cartCount = document.getElementById('cartCount'); 
  const wishlistPop = document.getElementById('wishlistPop');
  const savedButton = document.getElementById('savedButton');
  const currentUser = localStorage.getItem('currentUser');

  updateAuthButton(); // Update the authButton initially

  // Handle click on the profile button
  profileButton.addEventListener('mouseenter', function () {
    authButton.style.display = 'block'; // Show authButton when hovering over profileButton
});

// Add mouseleave event for profileButton
profileButton.addEventListener('mouseleave', function () {
    if (!authButton.matches(':hover')) {
        authButton.style.display = 'none'; // Hide if not hovering over authButton
    }
});

// Add mouseenter event for authButton
authButton.addEventListener('mouseenter', function () {
    authButton.style.display = 'block'; // Keep authButton visible while hovering
});

// Add mouseleave event for authButton
authButton.addEventListener('mouseleave', function () {
    authButton.style.display = 'none'; // Hide when not hovering over authButton
});

  // Handle logout
  authButton.addEventListener('click', function (event) {
      if (currentUser) { // Only prompt for logout if user is logged in
          event.preventDefault(); 
          const confirmLogout = confirm('Do you want to logout?');
          if (confirmLogout) {
              localStorage.removeItem('currentUser');
              updateAuthButton(); // Update authButton after logout
              location.href = "index.html";
          }
      }else{
        event.preventDefault(); 
          const confirmLogin = confirm('Do you want to login/signup?');
          if (confirmLogin) {
            localStorage.removeItem('login.signup');
            updateAuthButton(); // Update authButton after logout
            location.href = "register.html";
        }
      }
  });

  // Cart and wishlist hover functionality
  setupHover(cartButton, cartPop);
  setupHover(savedButton, wishlistPop);
});

  // Simulate the cart count (replace with your actual logic to get cart count)
  let itemCount = 0; // Example count, replace this with actual count from your cart
  const initialCartCount = 0; // Replace this with your actual logic to get the initial count

  // Function to update the cart count display
  function updateCartCount(count) {
      itemCount = count; // Update the item count
      cartCount.textContent = itemCount; // Update the badge text
      cartCount.style.display = itemCount >= 0 ? 'block' : 'none'; // Show/hide badge based on count
  }

  // Update the cart count initially
  updateCartCount(initialCartCount); // Set initial count

  // Check if there's a logged-in user
  function updateAuthButton() {
      if (currentUser) {
          authButton.textContent = currentUser;
          authButton.href = "#"; 
          authButton.classList.add('btn-secondary'); 
      } else {
          authButton.textContent = "Login/Signup"; // Set default text
          authButton.href = "RegisterPages/register.html"; // Redirect to login/signup page

// Check if there's a logged-in user
  if (currentUser) {
      authButton.textContent = currentUser; // Change button text to username
      authButton.href = "#"; // Optionally, change the link to something else or remove it
      authButton.classList.add('btn-secondary'); // Optionally change button style

    // Add event listener for logout
    authButton.addEventListener('click', function () {
      // Show confirmation dialog before logging out
      const confirmLogout = confirm('Do you want to logout?');

      if (confirmLogout) {
          // If confirmed, remove the current user from localStorage
          localStorage.removeItem('currentUser');
          // Go to the home page."
          location.href = "index.html";

      }
  }

  updateAuthButton(); // Update the authButton initially

  // Handle click on the profile button
  profileButton.addEventListener('mouseenter', function () {
    authButton.style.display = 'block'; // Show authButton when hovering over profileButton
});

// Add mouseleave event for profileButton
profileButton.addEventListener('mouseleave', function () {
    if (!authButton.matches(':hover')) {
        authButton.style.display = 'none'; // Hide if not hovering over authButton
    }
});

// Add mouseenter event for authButton
authButton.addEventListener('mouseenter', function () {
    authButton.style.display = 'block'; // Keep authButton visible while hovering
});

// Add mouseleave event for authButton
authButton.addEventListener('mouseleave', function () {
    authButton.style.display = 'none'; // Hide when not hovering over authButton
});

  // Handle logout
  authButton.addEventListener('click', function (event) {
      if (currentUser) { // Only prompt for logout if user is logged in
          event.preventDefault(); 
          const confirmLogout = confirm('Do you want to logout?');
          if (confirmLogout) {
              localStorage.removeItem('currentUser');
              updateAuthButton(); // Update authButton after logout
              location.href = "index.html";
          }
      }else{
        event.preventDefault(); 
          const confirmLogin = confirm('Do you want to login/signup?');
          if (confirmLogin) {
            localStorage.removeItem('login.signup');
            updateAuthButton(); // Update authButton after logout
            location.href = "register.html";
        }
      }
  });

  // Cart and wishlist hover functionality
  setupHover(cartButton, cartPop);
  setupHover(savedButton, wishlistPop);
});


// Function to set up hover effects
function setupHover(button, pop) {
  button.addEventListener('mouseenter', function () {
      pop.style.display = 'block';
  });
  pop.addEventListener('mouseenter', function () {
      pop.style.display = 'block';
  });
  button.addEventListener('mouseleave', function () {
      if (!pop.matches(':hover')) {
          pop.style.display = 'none';
      }
  });
  pop.addEventListener('mouseleave', function () {
      pop.style.display = 'none';
  });
}

// Load shops based on category from URL parameters
// document.addEventListener('DOMContentLoaded', function() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const category = urlParams.get('category') || 'all';
//   displayShops(category);
// });

// Check if user is logged in
function isUserLoggedIn() {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser !== null;
}
