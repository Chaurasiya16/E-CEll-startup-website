console.log("JS is working")

// 1. Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // stop default jump

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 2. Button Click Action (Find Services)
const button = document.querySelector("#Home button");

button.addEventListener("click", function() {
    alert("Searching for nearby services... 🔍");
});


// 3. Simple Welcome Message
window.onload = function() {
    console.log("Welcome to QuickHelp 🚀");
};