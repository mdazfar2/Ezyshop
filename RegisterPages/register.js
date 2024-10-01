const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}



document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Handle user registration
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Store user data in local storage (you can use a more secure method in a real application)
        const userData = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(userData)); // Store user data
        alert('Registration successful! You can now log in.'); // Notify user
        registerForm.reset(); // Reset the form
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



