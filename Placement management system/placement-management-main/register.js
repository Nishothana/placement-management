document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    let userExists = users.some(user => user.email === email);
    
    if (userExists) {
        document.getElementById("message").textContent = "User already registered!";
        document.getElementById("message").style.color = "red";
    } else {
        // Add new user
        users.push({ email, password });

        // Store updated users in localStorage
        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("message").textContent = "Registration successful!";
        document.getElementById("message").style.color = "green";

        // Redirect to login page after 1 second
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    }
});
