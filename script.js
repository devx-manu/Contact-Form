// ===============================
// Futuristic Contact Form Script
// ===============================

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Email regex (supports new TLDs, up to 63 chars)
const emailRegex = /^[\w.-]+@([\w-]+\.)+[A-Za-z]{2,63}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Reset errors
  clearErrors();

  // Validate Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, nameError, "Name is required");
    valid = false;
  } else {
    setSuccess(nameInput);
  }

  // Validate Email
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, emailError, "Enter a valid email");
    valid = false;
  } else {
    setSuccess(emailInput);
  }

  // Validate Message
  if (messageInput.value.trim() === "") {
    showError(messageInput, messageError, "Message cannot be empty");
    valid = false;
  } else {
    setSuccess(messageInput);
  }

  // If all valid
  if (valid) {
    successMessage.textContent = "✅ Message submitted successfully!";
    successMessage.style.display = "block";

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Reset form after 2s
    setTimeout(() => {
      form.reset();
      clearBorders();
    }, 2000);
  }
});

// Utility functions
function showError(input, errorField, message) {
  errorField.textContent = message;
  errorField.style.display = "block";
  input.classList.add("error-border");
}

function setSuccess(input) {
  input.classList.remove("error-border");
  input.classList.add("success-border");
}

function clearErrors() {
  [nameError, emailError, messageError].forEach(err => {
    err.textContent = "";
    err.style.display = "none";
  });
  successMessage.style.display = "none";
}

function clearBorders() {
  [nameInput, emailInput, messageInput].forEach(input => {
    input.classList.remove("error-border", "success-border");
  });
}
