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

// Game scaling
document.addEventListener('DOMContentLoaded', function() {
    const gameFrame = document.querySelector('.game-frame');
    
    if (gameFrame) {
        gameFrame.addEventListener('load', function() {
            try {
                // Attempt to style the game canvas after iframe loads
                const iframeDoc = gameFrame.contentDocument || gameFrame.contentWindow.document;
                
                // Add scaling styles to the iframe's document
                const style = iframeDoc.createElement('style');
                style.textContent = `
                    body, html {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: transparent !important;
                    }
                    canvas {
                        max-width: 100% !important;
                        max-height: 100% !important;
                        width: auto !important;
                        height: auto !important;
                        object-fit: contain !important;
                    }
                `;
                iframeDoc.head.appendChild(style);
            } catch (e) {
                console.log('Cross-origin restrictions prevent iframe styling');
            }
        });
    }
});
 
// Disable arrow key scrolling on demo.html page
window.addEventListener("keydown", function(e) {
    if (["Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        return;
    }
    
    // Fallback for older browsers using keyCode
    if ([32, 37, 38, 39, 40].includes(e.keyCode)) {
        e.preventDefault();
    }
}, false);
