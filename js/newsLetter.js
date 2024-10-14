document.getElementById('newsForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get the input elements
    const nameField = document.getElementById('newsletterName');
    const emailField = document.getElementById('newsletterMail');

    // Get their values
    const name = nameField.value;
    const email = emailField.value;

    // Regular Expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Standard email format

    // Validate Name
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (alphabets only).");
        return;
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Show the thank you message 
    document.getElementById('thankYouMessage').style.display = 'flex';

    // Hide the thank you message after 3 seconds and restore the background
    setTimeout(function() {
        document.getElementById('thankYouMessage').style.display = 'none';
        document.getElementById('news-form-section').style.opacity = '1'; // Restore form opacity
    }, 3000); // 3 seconds timeout

    // Clear the input fields
    nameField.value = "";
    emailField.value = "";
});