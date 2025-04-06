document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Dummy user data (Replace this with actual database authentication later)
    const users = {
        "admin@example.com": { role: "admin", password: "admin123" },
        "student@example.com": { role: "student", password: "student123" }
    };

    if (users[email] && users[email].password === password) {
        // Redirect based on role
        if (users[email].role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "student.html";
        }
    } else {
        document.getElementById("error-message").textContent = "Invalid email or password!";
    }
});
