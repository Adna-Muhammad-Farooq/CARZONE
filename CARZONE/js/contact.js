// ===================================
// CONTACT.JS - Form validation logic
// ===================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const formSuccess = document.getElementById("formSuccess");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop actual form submission since we have no backend

    let isValid = true;

    // --- Validate Full Name ---
    if (fullName.value.trim() === "") {
      showError(fullName, "fullNameError", "Please enter your name.");
      isValid = false;
    } else if (fullName.value.trim().length < 3) {
      showError(fullName, "fullNameError", "Name must be at least 3 characters.");
      isValid = false;
    } else {
      clearError(fullName, "fullNameError");
    }

    // --- Validate Email ---
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      showError(email, "emailError", "Please enter your email.");
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "emailError", "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(email, "emailError");
    }

    // --- Validate Phone ---
    const phonePattern = /^[0-9+\-\s()]{7,15}$/;
    if (phone.value.trim() === "") {
      showError(phone, "phoneError", "Please enter your phone number.");
      isValid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
      showError(phone, "phoneError", "Please enter a valid phone number.");
      isValid = false;
    } else {
      clearError(phone, "phoneError");
    }

    // --- Validate Subject ---
    if (subject.value.trim() === "") {
      showError(subject, "subjectError", "Please enter a subject.");
      isValid = false;
    } else {
      clearError(subject, "subjectError");
    }

    // --- Validate Message ---
    if (message.value.trim() === "") {
      showError(message, "messageError", "Please write a message.");
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, "messageError", "Message must be at least 10 characters.");
      isValid = false;
    } else {
      clearError(message, "messageError");
    }

    // --- If everything passed, show success and reset form ---
    if (isValid) {
      formSuccess.style.display = "block";
      contactForm.reset();

      // Hide success message after a few seconds
      setTimeout(() => {
        formSuccess.style.display = "none";
      }, 4000);
    } else {
      formSuccess.style.display = "none";
    }
  });

  // ===== HELPER: show error message + red border on field =====
  function showError(input, errorId, message) {
    input.classList.add("input-error");
    document.getElementById(errorId).textContent = message;
  }

  // ===== HELPER: clear error message + red border on field =====
  function clearError(input, errorId) {
    input.classList.remove("input-error");
    document.getElementById(errorId).textContent = "";
  }

  // ===== BONUS: clear error as soon as user starts typing again =====
  [fullName, email, phone, subject, message].forEach(field => {
    field.addEventListener("input", function () {
      this.classList.remove("input-error");
      const errorId = this.id + "Error";
      const errorEl = document.getElementById(errorId);
      if (errorEl) errorEl.textContent = "";
    });
  });
}
