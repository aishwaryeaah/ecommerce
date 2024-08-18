document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleBtn = document.querySelector("#password ~ .toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye");
    }
}

function toggleSignupPassword() {
    const passwordField = document.getElementById("signup-password");
    const toggleBtn = document.querySelector("#signup-container #signup-password ~ .toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye");
    }
}

function toggleConfirmPassword() {
    const confirmPasswordField = document.getElementById("confirm-password");
    const toggleBtn = document.querySelector("#signup-container #confirm-password ~ .toggle-password");
    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash");
    } else {
        confirmPasswordField.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye");
    }
}

function toggleSignup() {
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
}

function toggleLogin() {
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
}

function validateSignupForm() {
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        document.getElementById("password-error").textContent = "Passwords do not match!";
        document.getElementById("password-error").style.display = "block";
        return false;
    }
    return true;
}
