document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburger.classList.toggle('active');
      });
    }

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTop.classList.remove('opacity-0', 'pointer-events-none');
          backToTop.classList.add('opacity-100');
        } else {
          backToTop.classList.add('opacity-0', 'pointer-events-none');
          backToTop.classList.remove('opacity-100');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm && formSuccess) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we just simulate success.
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');

        // After 5 seconds, reset the form and show it again
        setTimeout(() => {
          contactForm.reset();
          contactForm.classList.remove('hidden');
          formSuccess.classList.add('hidden');
        }, 5000);
      });
    }

    // Add lazy loading to images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust for sticky header height
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation for elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with the .fade-in-scroll class
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

// Certificate modal functions (defined globally to be accessible from onclick attributes)
const certModal = document.getElementById('cert-modal');
const certModalImage = document.getElementById('cert-modal-image');
const certModalTitle = document.getElementById('cert-modal-title');

function openCertModal(imageSrc, title) {
  if (certModal && certModalImage && certModalTitle) {
    certModalImage.src = imageSrc;
    certModalTitle.textContent = title;
    certModal.classList.remove('hidden');
    certModal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeCertModal() {
  if (certModal) {
    certModal.classList.add('hidden');
    certModal.classList.remove('flex');
    document.body.style.overflow = ''; // Restore background scrolling
  }
}

// Event listener to close modal on backdrop click
if (certModal) {
  certModal.addEventListener('click', (e) => {
    // If the click is on the modal backdrop (the modal itself), close it
    if (e.target === certModal) {
      closeCertModal();
    }
  });
}

// Event listener to close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !certModal.classList.contains('hidden')) {
    closeCertModal();
  }
});