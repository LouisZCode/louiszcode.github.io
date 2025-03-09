document.addEventListener('DOMContentLoaded', function() {
    // Add lazy loading to images for better performance
    const images = document.querySelectorAll('img:not(.profile-circle img)');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Navigation menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Project filtering functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        // Add ARIA attributes for accessibility
        filterBtns.forEach((btn, index) => {
            // Set ARIA roles and attributes
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
            btn.setAttribute('id', `filter-tab-${btn.getAttribute('data-filter')}`);
            btn.setAttribute('aria-controls', 'project-grid');
            
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                
                const filter = btn.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                        card.setAttribute('aria-hidden', 'false');
                    } else {
                        const categories = card.getAttribute('data-category').split(' ');
                        if (categories.includes(filter)) {
                            card.style.display = 'block';
                            card.setAttribute('aria-hidden', 'false');
                        } else {
                            card.style.display = 'none';
                            card.setAttribute('aria-hidden', 'true');
                        }
                    }
                });
                
                // Announce filter change to screen readers
                const projectsContainer = document.querySelector('.projects-grid');
                if (projectsContainer) {
                    projectsContainer.setAttribute('aria-live', 'polite');
                    projectsContainer.setAttribute('id', 'project-grid');
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add a simple fade-in animation for project cards
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
        observer.observe(card);
    });

    // Add fade-in class for animation
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .fade-in {
                opacity: 1 !important;
            }
        </style>
    `);

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show button when user scrolls down 300px
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real scenario, you would send the form data to a server here
            // For now, we'll just simulate a successful submission
            
            // Hide the form and show success message
            contactForm.style.display = 'none';
            formSuccess.classList.add('visible');
            
            // Reset form fields
            contactForm.reset();
            
            // Optional: Hide success message and show form again after some time
            setTimeout(() => {
                formSuccess.classList.remove('visible');
                contactForm.style.display = 'flex';
            }, 5000);
        });
    }
});