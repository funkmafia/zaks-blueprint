// --- 1. DOM ELEMENTS --- // 
const navSection = document.getElementById('navBar');
const heroSection = document.getElementById('hero'); 
const projectSection = document.getElementById('project'); 
const spotlightSection = document.getElementById('spotlight'); 

const form = document.getElementById('form'); 
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const submitBtn = document.getElementById('submit')
const feedback = document.getElementById('form-feedback'); // feedback to user

// Tip: Don't call .value too early – grab values inside event listeners // 
// --- 2. Variables --- // 

// -- 3. Event Listeners --- // 
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); 
    const isValid = validateForm(); // used to store the result in a const. 
    if(isValid) {
        showSuccess("Successfully submitted!");
        form.reset();
    }
}); 
    } 

// --- 4. Functions --- // 
// forms and feedback of forms // 
function validateForm() {
    const name = nameInput.value.trim(); 
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

    if (!name || !email || !message) {
        showError("Please fill in all fields.");
        return false;
    }

    if (!emailPattern.test(email)) {
        showError("Please enter a valid email address.");
        return false;
    }

    return true;
}

function showError(message) {
    if(feedback) {
        feedback.textContent = message;
        feedback.style.color = "#D04848"; // for error
    } else {
        alert(message); // fallback option 
    }
}

function showSuccess(message) {
    if (feedback) {
        feedback.textContent = message; 
        feedback.style.color = "#22C55E"; // for success
    } else {
        alert(message); 
    }
}