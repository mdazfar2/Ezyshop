document.addEventListener("DOMContentLoaded", function () {
  const authButton = document.getElementById('authButton');
  const currentUser = localStorage.getItem('currentUser');

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
    });
  }
});