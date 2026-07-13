const phoneInputs = document.querySelectorAll("#phone");
const submitButton = document.querySelector("#submit-button"); // Keep one submit button, or handle multiple if needed

// Initialize intl-tel-input for each phone input field
phoneInputs.forEach((phoneInput) => {
  const errorMessage = phoneInput.nextElementSibling; // Assume error message is directly after the input

  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "in", // Default country: India
    autoPlaceholder: "polite", // Show a placeholder for the format
    separateDialCode: true, // Display country code separately
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Load utility script for formatting
  });

  // Validate and allow only numbers
  phoneInput.addEventListener("input", () => {
    const value = phoneInput.value;

    // Check for non-numeric characters
    if (/[^0-9+]/.test(value)) {
      errorMessage.style.display = "block"; // Show error message
      errorMessage.textContent = "Invalid input: Please enter numbers only.";
      phoneInput.value = value.replace(/[^0-9+]/g, ""); // Remove invalid characters
    } else {
      errorMessage.style.display = "none"; // Hide error message
    }
  });

  // Validate phone number on blur
  phoneInput.addEventListener("blur", () => {
    const number = phoneInput.value.trim();

    if (number) {
      if (iti.isValidNumber()) {
        errorMessage.style.display = "none"; // Hide error message if valid
        console.log("Valid Number:", iti.getNumber()); // Log the full international number
      } else {
        errorMessage.style.display = "block"; // Show error message if invalid
        errorMessage.textContent = "Invalid phone number.";
        phoneInput.value = ""; // Clear the phone input field
      }
    } else {
      errorMessage.style.display = "none"; // Hide error message if empty
    }
  });

  // Add the intl-tel-input instance to the input for later access
  phoneInput.iti = iti;
});

// Handle form submission
submitButton.addEventListener("click", () => {
  phoneInputs.forEach((phoneInput) => {
    const errorMessage = phoneInput.nextElementSibling;
    const iti = phoneInput.iti; // Access the intl-tel-input instance

    if (iti.isValidNumber()) {
      const fullNumber = iti.getNumber(); // Get full international number (E.164 format)
      console.log("Sending this number to CRM:", fullNumber);

      // Pass the full number to your CRM integration here
      alert("Submitted Number: " + fullNumber);

      // Example: Simulate CRM submission (replace this with your actual logic)
      // sendToCRM(fullNumber); // Replace with your CRM API call
    } else {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please enter a valid phone number before submitting.";
    }
  });
});
