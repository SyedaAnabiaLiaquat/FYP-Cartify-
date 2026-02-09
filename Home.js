// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Load user data from localStorage
    const userData = JSON.parse(localStorage.getItem('cartifyUser'));
    const userNameElement = document.getElementById('userName');
    const userDisplayNameElement = document.getElementById('userDisplayName');
    
    if (userData && userData.name) {
        userNameElement.textContent = userData.name;
        userDisplayNameElement.textContent = userData.name;
    }
    
    // Set welcome time
    const welcomeTimeElement = document.getElementById('welcomeTime');
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    welcomeTimeElement.textContent = `${timeString} • ${dateString}`;
    
    // Add other home page functionality as needed
    // (theme toggle, language selector, etc.)
});

// script.js - Cartify Home Page

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    const userDisplayName = document.getElementById('userDisplayName');
    const userName = document.getElementById('userName');
    const welcomeTime = document.getElementById('welcomeTime');
    const cartItems = document.getElementById('cartItems');
    const timeSaved = document.getElementById('timeSaved');
    const totalSavings = document.getElementById('totalSavings');

    // Load user data from localStorage
    function loadUserData() {
        const savedUser = localStorage.getItem('cartify_user');
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                if (userData.name) {
                    userDisplayName.textContent = userData.name;
                    userName.textContent = userData.name.split(' ')[0]; // First name only
                }
            } catch (e) {
                console.error('Error parsing user data:', e);
            }
        }
    }

    // Set welcome time
    function setWelcomeTime() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;
        
        if (hours < 12) {
            greeting = 'Good Morning';
        } else if (hours < 17) {
            greeting = 'Good Afternoon';
        } else {
            greeting = 'Good Evening';
        }
        
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        
        welcomeTime.textContent = `${greeting} • ${timeString}`;
        
        // Update cart stats
        updateCartStats();
    }

    // Update cart statistics
    function updateCartStats() {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('cartify_cart');
        let itemCount = 0;
        
        if (savedCart) {
            try {
                const cart = JSON.parse(savedCart);
                itemCount = cart.reduce((total, item) => total + item.quantity, 0);
            } catch (e) {
                console.error('Error parsing cart data:', e);
            }
        }
        
        cartItems.textContent = itemCount;
        
        // Calculate time saved (2 minutes per item)
        const minutesSaved = itemCount * 2;
        const hours = Math.floor(minutesSaved / 60);
        const minutes = minutesSaved % 60;
        
        if (hours > 0) {
            timeSaved.textContent = `${hours}h ${minutes}m`;
        } else {
            timeSaved.textContent = `${minutes}m`;
        }
        
        // Calculate savings (average $1 per item)
        const savings = itemCount * 1;
        totalSavings.textContent = `$${savings.toFixed(2)}`;
    }

    // Theme Toggle
    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('cartify_theme', isDarkMode ? 'dark' : 'light');
        
        // Update theme toggle icon
        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');
        
        if (isDarkMode) {
            moonIcon.style.color = 'var(--white)';
            sunIcon.style.color = 'var(--gray)';
        } else {
            moonIcon.style.color = 'var(--gray)';
            sunIcon.style.color = 'var(--white)';
        }
    }

    // Load saved theme
    function loadTheme() {
        const savedTheme = localStorage.getItem('cartify_theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Language Selector
    function initLanguageSelector() {
        const languageOptions = languageDropdown.querySelectorAll('.language-option');
        
        // Load saved language
        const savedLang = localStorage.getItem('cartify_language') || 'en';
        setActiveLanguage(savedLang);
        
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.dataset.lang;
                setActiveLanguage(lang);
                localStorage.setItem('cartify_language', lang);
                
                // Update button text
                const langSpan = languageBtn.querySelector('urdu');
                langSpan.textContent = lang.toUpperCase();
                
                // Close dropdown
                languageDropdown.style.opacity = '0';
                languageDropdown.style.visibility = 'hidden';
            });
        });
        
        // Show/hide dropdown
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = languageDropdown.style.visibility === 'visible';
            languageDropdown.style.opacity = isVisible ? '0' : '1';
            languageDropdown.style.visibility = isVisible ? 'hidden' : 'visible';
            languageDropdown.style.transform = isVisible ? 'translateY(-10px)' : 'translateY(0)';
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            languageDropdown.style.opacity = '0';
            languageDropdown.style.visibility = 'hidden';
            languageDropdown.style.transform = 'translateY(-10px)';
        });
    }

    function setActiveLanguage(lang) {
        const languageOptions = languageDropdown.querySelectorAll('.language-option');
        
        languageOptions.forEach(option => {
            option.classList.remove('active');
            const icon = option.querySelector('i');
            if (icon) icon.style.opacity = '0';
            
            if (option.dataset.lang === lang) {
                option.classList.add('active');
                const icon = option.querySelector('i');
                if (icon) icon.style.opacity = '1';
            }
        });
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Update button icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    }

    // Initialize shopping cart simulation
    function initShoppingCart() {
        // Create initial cart if not exists
        if (!localStorage.getItem('cartify_cart')) {
            const initialCart = [
                { id: 1, name: 'Milk', price: 2.99, quantity: 1 },
                { id: 2, name: 'Bread', price: 1.99, quantity: 2 },
                { id: 3, name: 'Eggs', price: 3.49, quantity: 1 }
            ];
            localStorage.setItem('cartify_cart', JSON.stringify(initialCart));
        }
    }

    // Add to cart functionality for demo products
    function initAddToCart() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('.product-name').textContent;
                const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.replace('$', ''));
                
                // Add animation
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                this.style.backgroundColor = 'var(--success)';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                    this.style.backgroundColor = '';
                }, 2000);
                
                // Update cart in localStorage
                updateCart(productName, productPrice);
                
                // Update cart stats
                updateCartStats();
            });
        });
    }

    function updateCart(name, price) {
        let cart = [];
        const savedCart = localStorage.getItem('cartify_cart');
        
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
        
        // Check if item already exists
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: Date.now(),
                name: name,
                price: price,
                quantity: 1
            });
        }
        
        localStorage.setItem('cartify_cart', JSON.stringify(cart));
        
        // Show notification
        showNotification(`${name} added to cart!`);
    }

    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-shopping-cart"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--gradient-warm);
            color: white;
            padding: 15px 25px;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
        `;
        
        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Remove notification after animation
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 3000);
    }

    // Initialize everything
    function init() {
        loadUserData();
        setWelcomeTime();
        loadTheme();
        initLanguageSelector();
        initMobileMenu();
        initShoppingCart();
        initAddToCart();
        
        // Update time every minute
        setInterval(setWelcomeTime, 60000);
        
        // Event Listeners
        themeToggle.addEventListener('click', toggleTheme);
        
        // User button click
        const userBtn = document.getElementById('userBtn');
        userBtn.addEventListener('click', function() {
            const confirmLogout = confirm('Do you want to logout?');
            if (confirmLogout) {
                localStorage.removeItem('cartify_user');
                window.location.href = 'login.html';
            }
        });
        
        // Console greeting
        console.log('%c🛒 Welcome to Cartify Smart Shopping!', 'color: #FF6B35; font-size: 16px; font-weight: bold;');
        console.log('%cSmart shopping begins here.', 'color: #FF9F1C;');
    }

    // Start the application
    init();
});