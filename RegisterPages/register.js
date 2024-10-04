const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}

//otp
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("oInlsyImVTDKcEumx"); // Initialize EmailJS

    let generatedOtp; // Declare OTP variable outside for broader access

    // Switch to registration form
    document.querySelectorAll('.register-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.form-box.login').style.display = 'none';
            document.querySelector('.form-box.register').style.display = 'block';
        });
    });

    // Switch to login form
    document.querySelectorAll('.login-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.form-box.register').style.display = 'none';
            document.querySelector('.form-box.login').style.display = 'block';
        });
    });

    // Handle OTP verification
    document.getElementById("otpBtn").addEventListener("click", function () {
        const email = document.getElementById("registerEmail").value;

        if (email === "") {
            alert("Please enter a valid email address.");
            return;
        }

        // Generate a random 4-digit OTP
        generatedOtp = Math.floor(1000 + Math.random() * 9000);

        // Send OTP email using EmailJS
        emailjs.send("service_plcacw9", "template_4mbymlc", {
            user_email: email,
            otp: generatedOtp
        }).then(function (response) {
            alert("OTP has been sent to your email.");
            document.getElementById("otpSection").style.display = "block"; // Show OTP input

            // Validate the entered OTP
            document.getElementById("otpInput").addEventListener("input", function () {
                const enteredOtp = document.getElementById("otpInput").value;

                if (enteredOtp.length === 4) { // Assuming a 4-digit OTP
                    if (enteredOtp == generatedOtp) {
                        // OTP is correct, hide username, email, and OTP fields
                        document.getElementById("registerUsername").parentElement.style.display = "none"; // Hide username
                        document.getElementById("registerEmail").parentElement.style.display = "none"; // Hide email
                        document.getElementById("otpSection").style.display = "none"; // Hide OTP input
                        document.getElementById("otpBtn").style.display="none";
                        
                        // Show password fields and sign-up button
                        document.getElementById("passwordSection").style.display = "block";
                        document.getElementById("confirmPasswordSection").style.display = "block";
                        document.getElementById("submitBtn").style.display = "block"; // Show sign-up button
                    } else {
                        alert("Incorrect OTP. Please try again.");
                    }
                }
            });
        }, function (error) {
            alert("Error sending OTP. Please try again.");
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Handle user registration
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword=document.getElementById('confirmPassword').value;
        if(password===confirmPassword){
            const userData = {
                username: username,
                email: email,
                password: password,
                
            };
            localStorage.setItem('user', JSON.stringify(userData)); // Store user data
            alert('Registration successful! You can now log in.'); // Notify user
            registerForm.classList.add('hidden'); // Add hidden class to hide registration form
            loginForm.classList.remove('hidden'); // Remove hidden class to show login form
    
            // Optionally reset the registration form
            registerForm.reset(); // Reset the form

        }
        else{
            alert("Password do not match, Try again .");

        }

    });

   // Handle user login
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if credentials match
    if (storedUser && loginUsername === storedUser.username && loginPassword === storedUser.password) {
        alert('Login successful! Redirecting to home page...'); // Notify user
        localStorage.setItem('currentUser', loginUsername); // Store the current user's username
        window.location.href = "../index.html"; // Redirect to home page
    } else {
        alert('Invalid username or password.'); // Notify user of failure
    }
});
});

// Handle Visibility Toggle
document.querySelector(".bxs-lock-alt").addEventListener("click", function () {
    const passwordInput = document.getElementById("loginPassword");
    // Toggle password visibility
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.classList.remove('bxs-lock-alt');  
      this.classList.add('bxs-lock-open');  
      passwordInput.type = "password";
      this.classList.remove('bxs-lock-open'); 
      this.classList.add('bxs-lock-alt');     
    }
  });
  


