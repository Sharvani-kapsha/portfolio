document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle-switch');
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');

    toggleSwitch.addEventListener('click', function () {
        moonIcon.classList.toggle('active');
        sunIcon.classList.toggle('active');
        document.body.classList.toggle('light-mode');
    });

    // Enable copying functionality if enable_product is true
    if (enable_product) {
        enableCopying();
    }
});

// JavaScript for mobile menu toggle
function myMenuFunction() {
    var navMenu = document.getElementById('myNavMenu');
    navMenu.classList.toggle('active');
}

// Example to enable copying functionality
var enable_product = true; // Ensure this variable is properly set to true

// Functionality related to copying content
function enableCopying() {
    console.log("Copying functionality enabled.");
    // Your copying logic here
}

// Call enableCopying() or any other relevant function to activate copying functionality
if (enable_product) {
    enableCopying();
}
