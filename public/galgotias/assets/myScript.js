
  
  function openCourse(evt, tabName){
    var i, tabContent,tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

// Automatically open the "master" tab and set it as active when the page loads
document.addEventListener("DOMContentLoaded", function() {
  // Ensure only the master tab content is displayed
  document.getElementById("master").style.display = "block";
  
  // Set the "master" tab link as active
  document.querySelector(".tablinks[data-tab='master']").className += " active";
});

    //popup code

            // setTimeout(function() {
            //     $('#myModal').delay(800).fadeIn(400);
            // }, 8000);




			document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form'); // Select all forms on the page

    forms.forEach(function (form) {
        const submitButton = form.querySelector('.sub-btn'); // Find the submit button inside the form

        if (submitButton) { // Check if button exists
            form.addEventListener('submit', function (event) {
                // Disable the button and change its text
                submitButton.disabled = true;
                submitButton.textContent = 'Processing...';
            });
        }
    });
});



  document.addEventListener("DOMContentLoaded", function () {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach(input => {
        // Create an error message element
        const errorMessage = document.createElement("span");
        errorMessage.style.color = "red"; 
        errorMessage.style.display = "none";
        input.parentNode.insertBefore(errorMessage, input);

        const iti = window.intlTelInput(input, {
            initialCountry: "in", // Default country: India
            autoPlaceholder: "polite", // Show a placeholder for the format
            separateDialCode: true, // Display country code separately
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // Utilities for validation
        });

        // Validate phone number on input (real-time validation)
        input.addEventListener("input", function () {
            const phoneValue = input.value.trim();
            if (/[a-zA-Z]/.test(phoneValue)) {
                errorMessage.style.display = "block"; // Show error
                errorMessage.textContent = "Please enter a valid phone number (only numbers, no letters).";
                input.value = phoneValue.replace(/[a-zA-Z]/g, '');
            } else {
                errorMessage.style.display = "none";
            }
        });

        input.addEventListener("blur", function () {
            const phoneValue = input.value.trim();
            if (phoneValue) {
                if (!iti.isValidNumber()) {
                    errorMessage.style.display = "block"; // Show error
                    errorMessage.textContent = "Invalid phone number.";
                    input.value = '';
                    input.focus();
                } else {
                    errorMessage.style.display = "none"; // Hide error message if valid number
                    console.log("Valid Number:", iti.getNumber());
                }
            }
        });

        input.closest('form').addEventListener('submit', function (e) {
            const phoneValue = input.value.trim();
            if (!iti.isValidNumber() || /[a-zA-Z]/.test(phoneValue)) {
                e.preventDefault();
                alert("Please enter a valid phone number.");
                input.value = ''; 
                input.focus();
            } else {
                input.value = iti.getNumber();
            }
        });
    });
});
   