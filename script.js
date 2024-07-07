// JavaScript for toggle switch
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle-switch');
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');

    toggleSwitch.addEventListener('click', function () {
        moonIcon.classList.toggle('active');
        sunIcon.classList.toggle('active');
        document.body.classList.toggle('light-mode');
    });
});

// JavaScript for mobile menu toggle
function myMenuFunction() {
    var navMenu = document.getElementById('myNavMenu');
    navMenu.classList.toggle('active');
}
