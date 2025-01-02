document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const overlay = document.getElementById("overlay");
    const loginFormContainer = document.getElementById("login-form");
    const closeLoginButton = document.getElementById("close-login");
    const loginForm = loginFormContainer.querySelector("form");

    loginButton.addEventListener("click", function () {
        overlay.style.display = "block";
        loginFormContainer.style.display = "block";
    });

    closeLoginButton.addEventListener("click", function () {
        overlay.style.display = "none";
        loginFormContainer.style.display = "none";
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        if (username === "admin" && password === "123") {
            alert("Login successful!");
            overlay.style.display = "none";
            loginFormContainer.style.display = "none";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        loginFormContainer.style.display = "none";
    });
});
