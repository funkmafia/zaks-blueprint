// --- 1. DOM ELEMENTS --- // 
const navSection = document.getElementById('navBar');
const heroSection = document.getElementById('hero'); 
const projectSection = document.getElementById('project'); 
const spotlightSection = document.getElementById('spotlight'); 
const navMenu = document.getElementById('menu-button')
const navLinks = document.getElementById('navLinks')

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

// Animating the slide toggle NEW . max-h-0 heigh to zero, max-h-[300px] allows the content to expand vertically
// transition-all+duration-500 - so smooth transition over 500ms 

    navMenu.addEventListener("click", function() {
       
        navLinks.classList.toggle("max-h-0"); 
        navLinks.classList.toggle("max-h-[300px]"); 
        navLinks.classList.toggle("transition-all"); 
        navLinks.classList.toggle("duration-500"); 

    const icon = navMenu.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    
    // for improvement of accessibility 
    const expanded = navLinks.contains("max-h-[300px]"); 
    navMenu.setAttribute("aria-expanded", expanded);
    
}); 


// classlist.toggle will: add the class if its not there, remove the class if IT IS there !! 
// using the <i> inside the hamburger burger button / using the font awesome links

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






/* 
JAVASCRIPT TOGGLE LOGIC - 
    Add a click listener to your hamburger button.
	Toggle the nav menu’s visibility by adding/removing Tailwind classes:
navLinks.classList.toggle("max-h-0");
navLinks.classList.toggle("max-h-[300px]");
*/ 

/*
    SWAP THE ICON (☰ to ✖) using:
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
*/ 

/* clean code practices 
    •	Keep selectors (getElementById, querySelector) at the top of your JS file.
	•	Use meaningful class names and structure for readability.
	•	Avoid combining hidden with max-height !! pick one strategy.
*/
