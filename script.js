// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarElement = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  
  // Toggle the icon between bars and X
  if (mobileMenu.style.display === 'block') {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbarElement.classList.add('scrolled');
  } else {
    navbarElement.classList.remove('scrolled');
  }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.querySelector('.toast-close');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For this demo, we'll just show a success message
    
    // Show success toast
    showToast('Message sent!', 'Thanks for reaching out. I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
  });
}

// Toast notification functionality
function showToast(title, message, type = 'success') {
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  
  // Add or remove error class based on type
  if (type === 'error') {
    toast.classList.add('error');
  } else {
    toast.classList.remove('error');
  }
  
  // Show the toast
  toast.parentElement.classList.add('show');
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    toast.parentElement.classList.remove('show');
  }, 5000);
}

// Close toast when clicking the X
if (toastClose) {
  toastClose.addEventListener('click', () => {
    toast.parentElement.classList.remove('show');
  });
}

// Set current year in footer copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add smooth scrolling for hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Get the target element
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    
    // Calculate position accounting for navbar height
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    
    // Smooth scroll to target
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Update URL hash without scrolling
    history.pushState(null, null, targetId);
  });
});

// Simple animation on scroll for elements
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.hobby-card, .achievement-card, .family-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    }
  });
};

// Set initial styles for elements to be animated
document.querySelectorAll('.hobby-card, .achievement-card, .family-card').forEach(element => {
  element.style.transform = 'translateY(20px)';
  element.style.opacity = '0';
  element.style.transition = 'all 0.5s ease';
});

// Listen for scroll events to trigger animations
window.addEventListener('scroll', animateOnScroll);
// Trigger once on page load
window.addEventListener('load', animateOnScroll);

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`;
});

 