// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        const isOpen = menu.classList.contains('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

// Email functionality
function sendMail() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        // Validate form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        const parms = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        emailjs.send("service_39xrlgo", "template_sbawup5", parms)
            .then(() => {
                alert("Email Sent Successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error('Email error:', error);
                alert("Failed to send email. Please try again.");
            });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current navigation item
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Apply fade-in animation if on home page
    const fadeInText = document.querySelector('.fade-in-text');
    if (fadeInText) {
        fadeInText.style.opacity = '1';
    }
});