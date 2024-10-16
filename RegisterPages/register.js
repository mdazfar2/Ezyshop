const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const forgotPasswordLink = document.querySelector(".forgot-password-link");
const backToLoginLink = document.querySelector(".back-to-login-link");
const loginFormBox = document.querySelector(".form-box.login");
const forgotPasswordFormBox = document.querySelector(
	".form-box.forgot-password"
);
const registerFormBox = document.querySelector(".form-box.register");

registerLink.onclick = () => {
	wrapper.classList.add("active");
};

loginLink.onclick = () => {
	wrapper.classList.remove("active");
};

function popup(message) {
	// Show notification in the HTML element
	const notification = document.getElementById("notification");
	notification.innerText = `${message}`;
	notification.style.display = "block";

	// Hide notification after 3 seconds
	setTimeout(() => {
		notification.style.display = "none";
	}, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
	const registerForm = document.getElementById("registerForm");
	const loginForm = document.getElementById("loginForm");

	// Handle user registration
	registerForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the default form submission

		const username = document.getElementById("registerUsername").value;
		// const email = document.getElementById("registerEmail").value;
		const password = document.getElementById("registerPassword").value;
		const confirmPassword =
			document.getElementById("confirmPassword").value;
		if (password === confirmPassword) {
			const userData = {
				username: username,
				password: password,
			};
			localStorage.setItem("user", JSON.stringify(userData)); // Store user data
			popup("Registration successful! You can now log in."); // Notify user
			registerForm.classList.add("hidden"); // Add hidden class to hide registration form
			loginForm.classList.remove("hidden"); // Remove hidden class to show login form

			// Optionally reset the registration form
			registerForm.reset(); // Reset the form
		} else {
			popup("Password do not match, Try again .");
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
			popup("Login successful!"); // Notify user of successfull login.
			setTimeout(() => {
				history.back(); //  Return back to the page, from where user requested login.
			}, 2000);
		} else {
			popup("Invalid username or password."); // Notify user of failure
		}
	});
});

// Log when forgot password link is clicked
forgotPasswordLink.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("Forgot Password clicked");
	loginFormBox.style.display = "none";
	registerFormBox.style.display = "none";
	forgotPasswordFormBox.style.display = "block";
});

// Log when back to login link is clicked
backToLoginLink.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("Back to Login clicked");
	forgotPasswordFormBox.style.display = "none";
	loginFormBox.style.display = "block";
});

// Switch to the registration form
registerLink.onclick = () => {
	wrapper.classList.add("active");
	loginFormBox.style.display = "none";
	registerFormBox.style.display = "block";
	forgotPasswordFormBox.style.display = "none";
};

// Switch to the login form
loginLink.onclick = () => {
	wrapper.classList.remove("active");
	loginFormBox.style.display = "block";
	registerFormBox.style.display = "none";
	forgotPasswordFormBox.style.display = "none";
};

// Forgot Password form submission simulation
forgotPasswordForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const email = document.getElementById("forgotPasswordEmail").value;
	console.log(`Forgot Password form submitted for email: ${email}`);
	alert(`Password reset link has been sent to ${email}`);
});

// Handle Visibility Toggle
const lockIcons = document.querySelectorAll(".bxs-lock-alt");

lockIcons.forEach((icon) => {
	icon.addEventListener("click", function () {
		const passwordInput = this.closest(".input-box").querySelector(
			'input[type="password"], input[type="text"]'
		);
		// Toggle password visibility
		if (passwordInput.type === "password") {
			passwordInput.type = "text";
			this.classList.remove("bxs-lock-alt");
			this.classList.add("bxs-lock-open");
		} else {
			passwordInput.type = "password";
			this.classList.remove("bxs-lock-open");
			this.classList.add("bxs-lock-alt");
		}
	});
});
