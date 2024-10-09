const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // Handle user registration
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("registerUsername").value;
    // const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
      const userData = {
        username: username,
        password: password,
      };
      localStorage.setItem("user", JSON.stringify(userData)); // Store user data
      alert("Registration successful! You can now log in."); // Notify user
      registerForm.classList.add("hidden"); // Add hidden class to hide registration form
      loginForm.classList.remove("hidden"); // Remove hidden class to show login form

      // Optionally reset the registration form
      registerForm.reset(); // Reset the form
    } else {
      alert("Password do not match, Try again .");
    }
  });

  // Handle user login
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if credentials match
    if (
      storedUser &&
      loginUsername === storedUser.username &&
      loginPassword === storedUser.password
    ) {
      localStorage.setItem("currentUser", loginUsername); // Store the current user's username
      alert("Login successful!"); // Notify user of successfull login.
      history.back(); //  Return back to the page, from where user requested login.
    } else {
      alert("Invalid username or password."); // Notify user of failure
    }
  });
});

// Handle Visibility Toggle
document.querySelector(".bxs-lock-alt").addEventListener("click", function () {
  const passwordInput = document.getElementById("loginPassword");
  // Toggle password visibility
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.classList.remove("bxs-lock-alt");
    this.classList.add("bxs-lock-open");
    passwordInput.type = "password";
    this.classList.remove("bxs-lock-open");
    this.classList.add("bxs-lock-alt");
  }
});