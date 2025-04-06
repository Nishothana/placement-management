document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists & password matches
    let validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        document.getElementById("error-message").textContent = "Login Successful!";
        document.getElementById("error-message").style.color = "green";

        // Redirect to dashboard after 1 second
        setTimeout(() => {
            window.location.href = "dashboard.html";  // Change this to your actual dashboard
        }, 1000);
    } else {
        document.getElementById("error-message").textContent = "Invalid email or password!";
        document.getElementById("error-message").style.color = "red";
    }
});
