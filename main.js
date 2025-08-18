
// Sacred Hands Coffee - Main JavaScript

// DOM elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// Mobile menu toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Sticky navbar on scroll
if (navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Load products from JSON (for shop page)
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error loading products:', error);
        // Return fallback products if JSON fails to load
        return [
            {
                id: 1,
                name: "Ruiru Estate",
                image: "images/product1.jpg",
                roast: "Light Roast",
                notes: "Floral, Citrus, Bright",
                price: "$16.00"
            },
            {
                id: 2,
                name: "Sacred Hills Lot #3",
                image: "images/product2.jpg",
                roast: "Medium Roast",
                notes: "Chocolate, Stone Fruit, Balanced",
                price: "$18.50"
            },
            {
                id: 3,
                name: "Msitu Blend",
                image: "images/product3.jpg",
                roast: "Medium Roast",
                notes: "Caramel, Nuts, Smooth",
                price: "$15.00"
            },
            {
                id: 4,
                name: "Western Reserve",
                image: "images/product4.jpg",
                roast: "Dark Roast",
                notes: "Chocolate, Smoky, Bold",
                price: "$17.00"
            }
        ];
    }
}

// Display products
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" 
             onerror="this.src='images/placeholder-coffee.jpg'">
        <div class="p-6">
            <span class="inline-block bg-brand-primary text-white px-2 py-1 rounded-full text-xs font-semibold mb-2">
                ${product.roast}
            </span>
            <h3 class="text-xl font-serif font-bold text-brand-coffee mb-2">${product.name}</h3>
            <p class="text-gray-600 mb-3">${product.notes}</p>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-brand-coffee">${product.price}</span>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
    
    return card;
}

// Add to cart functionality (mock)
function addToCart(productId) {
    alert(`Product ${productId} added to cart! (This is a demo - integrate with your e-commerce solution)`);
}

// Product filtering
function filterProducts(roastType) {
    const products = window.allProducts || [];
    const filteredProducts = roastType === 'all' ? products : products.filter(p => p.roast === roastType);
    displayProducts(filteredProducts, 'products-grid');
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${roastType}"]`).classList.add('active');
}

// Newsletter subscription
function subscribeNewsletter(email) {
    // Mock newsletter subscription
    console.log('Newsletter subscription for:', email);
    alert('Thank you for subscribing! (This is a demo - integrate with your email service)');
}

// Contact form submission
function submitContactForm(formData) {
    // Mock form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours. (This is a demo)');
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', async function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Shop page initialization
    if (currentPage === 'shop.html' || currentPage === '') {
        const products = await loadProducts();
        window.allProducts = products;
        
        displayProducts(products, 'products-grid');
        
        // Set up filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                filterProducts(filter);
            });
        });
    }
    
    // Home page featured products
    if (currentPage === 'index.html' || currentPage === '') {
        const products = await loadProducts();
        const featuredProducts = products.slice(0, 4);
        displayProducts(featuredProducts, 'featured-products');
    }
    
    // Newsletter forms
    document.querySelectorAll('form').forEach(form => {
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.placeholder.includes('email')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = emailInput.value;
                if (email) {
                    subscribeNewsletter(email);
                    emailInput.value = '';
                }
            });
        }
    });
    
    // Contact form
    const contactForm = document.querySelector('form[class*="space-y"]');
    if (contactForm && currentPage === 'contact.html') {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            submitContactForm(data);
            this.reset();
        });
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Image lazy loading fallback for browsers without native support
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling for missing images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'images/placeholder-coffee.jpg';
    }
}, true);

// Console message for developers
console.log('%c🌱 Sacred Hands Coffee Website', 'color: #C6A988; font-size: 16px; font-weight: bold;');
console.log('%cCoffee with a purpose, from sacred hands to yours.', 'color: #6F4E37; font-size: 12px;');

document.addEventListener('DOMContentLoaded', () => {
  // Load featured products
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById('featured-products');
      container.innerHTML = '';

      products.slice(0, 4).forEach(p => {
        const card = document.createElement('div');
        card.className = 'bg-white shadow rounded-lg overflow-hidden';

        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold">${p.name}</h3>
            <p class="text-gray-600 mt-2">${p.description}</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-lg font-bold text-brand-coffee">${p.price}</span>
              <button class="btn-primary">Buy Now</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error('Error loading products:', err));
});
