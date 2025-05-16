document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Dummy user data (Replace with actual database authentication later)
    const users = {
        "student1@example.com": { password: "stu1", role: "student" },
        "student2@example.com": { password: "stu2", role: "student" },
        "student3@example.com": { password: "stu3", role: "student" },
        "admin@example.com": { password: "admin", role: "admin" }
    };

    if (users[email] && users[email].password === password) {
        localStorage.setItem('currentUserEmail', email);
        localStorage.setItem('userRole', users[email].role);
        
        if (users[email].role === "student") {
            window.location.href = "student.html";
        } else if (users[email].role === "admin") {
            window.location.href = "admin.html";
        }
    } else {
        alert("Invalid email or password!");
    }
    return false;
});