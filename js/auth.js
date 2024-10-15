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
