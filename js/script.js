// Restoring San Diego - JavaScript

// Leader Bio Toggle Functionality
function toggleBio(leaderId) {
    const bioElement = document.getElementById(`bio-${leaderId}`);
    const buttonElement = document.querySelector(`[data-leader="${leaderId}"] .bio-toggle-btn`);
    const buttonText = buttonElement.querySelector('span');
    
    if (!bioElement || !buttonElement) return;
    
    // Toggle the expanded class
    bioElement.classList.toggle('expanded');
    buttonElement.classList.toggle('active');
    
    // Update button text and accessibility
    if (bioElement.classList.contains('expanded')) {
        buttonText.textContent = 'Hide Bio';
        buttonElement.setAttribute('aria-expanded', 'true');
    } else {
        buttonText.textContent = 'Read Bio';
        buttonElement.setAttribute('aria-expanded', 'false');
    }
    
    // Close other open bios (optional - uncomment for accordion behavior)
    /*
    const allBios = document.querySelectorAll('.leader-bio-expandable');
    const allButtons = document.querySelectorAll('.bio-toggle-btn');
    
    allBios.forEach((bio, index) => {
        if (bio.id !== `bio-${leaderId}` && bio.classList.contains('expanded')) {
            bio.classList.remove('expanded');
            allButtons[index].classList.remove('active');
            allButtons[index].querySelector('span').textContent = 'Read Bio';
            allButtons[index].setAttribute('aria-expanded', 'false');
        }
    });
    */
}



// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-item, .contact-item, .about-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone Number Click Tracking (for analytics)
document.querySelectorAll('a[href^="tel:"]').forEach(phoneLink => {
    phoneLink.addEventListener('click', function() {
        // Track phone clicks for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_call', {
                'event_category': 'contact',
                'event_label': this.href
            });
        }
    });
});

// Email Click Tracking (for analytics)
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function() {
        // Track email clicks for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                'event_category': 'contact',
                'event_label': this.href
            });
        }
    });
});

// Emergency Contact Button Highlight
function highlightEmergencyContact() {
    const emergencyButtons = document.querySelectorAll('a[href^="tel:"]');
    emergencyButtons.forEach(button => {
        if (button.textContent.includes('Call Now') || button.textContent.includes('Emergency')) {
            button.style.animation = 'pulse 2s infinite';
        }
    });
}

// Add pulse animation CSS if not already present
if (!document.querySelector('#pulse-animation')) {
    const style = document.createElement('style');
    style.id = 'pulse-animation';
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize emergency contact highlighting
document.addEventListener('DOMContentLoaded', highlightEmergencyContact);

// Form Validation (if contact form is added later)
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            field.style.borderColor = '#d1d5db';
        }
    });
    
    return isValid;
}

// Service Area Detection (if geolocation is needed)
function checkServiceArea() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Basic San Diego County bounds check
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            // Approximate San Diego County bounds
            const isInServiceArea = (
                lat >= 32.5 && lat <= 33.5 &&
                lng >= -117.6 && lng <= -116.1
            );
            
            if (isInServiceArea) {
                console.log('User is in San Diego County service area');
                // Could show special messaging or priority contact options
            }
        });
    }
}

// Initialize service area check
document.addEventListener('DOMContentLoaded', checkServiceArea);

console.log('Restoring San Diego website loaded successfully');