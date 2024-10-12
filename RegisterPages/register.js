const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const forgotPasswordLink = document.querySelector('.forgot-password-link');
const backToLoginLink = document.querySelector('.back-to-login-link');
const loginFormBox = document.querySelector('.form-box.login');
const forgotPasswordFormBox = document.querySelector('.form-box.forgot-password');
const registerFormBox = document.querySelector('.form-box.register');

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

    /*let passwordVisibility = document.getElementById("togglePassword");
    let password = document.getElementById("registerPassword");

    togglePassword.onclick = function(){
      if(password.type === "registerPassword"){
        password.type = "text" ;
      } else {
        password.type = "password" ;
      }
      }
    };*/
    
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

// Log when forgot password link is clicked
forgotPasswordLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("Forgot Password clicked");
  loginFormBox.style.display = 'none';
  registerFormBox.style.display = 'none';
  forgotPasswordFormBox.style.display = 'block';
});

// Log when back to login link is clicked
backToLoginLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("Back to Login clicked");
  forgotPasswordFormBox.style.display = 'none';
  loginFormBox.style.display = 'block';
});

// Switch to the registration form
registerLink.onclick = () => {
  wrapper.classList.add('active');
  loginFormBox.style.display = 'none';
  registerFormBox.style.display = 'block';
  forgotPasswordFormBox.style.display = 'none';
};

//Password visibility in Login page
//togglePassword
    let togglePassword = document.getElementById("togglePassword");
    let password = document.getElementById("registerPassword");

    togglePassword.onclick = function(){
      if(password.type === "password"){
        password.type = "text";
        togglePassword.src="../img/eyeIcon/view.png";

      } else {
        password.type = "password";
        togglePassword.src="../img/eyeIcon/hide.png";
      }
      }

  //toggleConfirmPassword

    let toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    let confirmPassword = document.getElementById("confirmPassword");

    toggleConfirmPassword.onclick = function(){
      if(confirmPassword.type === "password"){
        confirmPassword.type = "text";
        toggleConfirmPassword.src="../img/eyeIcon/view.png";

      } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.src="../img/eyeIcon/hide.png";
      }
      }


// Switch to the login form
loginLink.onclick = () => {
  wrapper.classList.remove('active');
  loginFormBox.style.display = 'block';
  registerFormBox.style.display = 'none';
  forgotPasswordFormBox.style.display = 'none';
};

// Forgot Password form submission simulation
forgotPasswordForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('forgotPasswordEmail').value;
  console.log(`Forgot Password form submitted for email: ${email}`);
  alert(`Password reset link has been sent to ${email}`);
});


//Password visibility in Login page
let toggleLogPassword = document.getElementById("toggleLogPassword");
let loginPassword = document.getElementById("loginPassword");

toggleLogPassword.onclick = function(){
  if(loginPassword.type === "password"){
    loginPassword.type = "text";
    toggleLogPassword.src="../img/eyeIcon/view.png";

  } else {
    loginPassword.type = "password";
    toggleLogPassword.src="../img/eyeIcon/hide.png";
  }
  }

/* // Handle Visibility Toggle
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
}); */