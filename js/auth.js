document.addEventListener("DOMContentLoaded", function () {
  const authButton = document.getElementById('authButton');
  const currentUser = localStorage.getItem('currentUser');

  // some random changes
      if (confirmLogout) {
          // If confirmed, remove the current user from localStorage
          localStorage.removeItem('currentUser');
          // Go to the home page."
          location.href = "index.html";
      }
    });
  }
});

function isUserLoggedIn() {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser !== null;
}