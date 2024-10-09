// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add a scroll effect to the navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation to skills list
const skillsList = document.querySelector('.skills-list');
if (skillsList) {
    const skills = skillsList.querySelectorAll('li');
    skills.forEach((skill, index) => {
        skill.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    });
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}