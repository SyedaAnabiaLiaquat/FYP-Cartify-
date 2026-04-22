// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    const userDisplayName = document.getElementById('userDisplayName');
    const userName = document.getElementById('userName');
    const welcomeTime = document.getElementById('welcomeTime');
    const userBtn = document.getElementById('userBtn');

    // Load user data from localStorage
    function loadUserData() {
        const userData = JSON.parse(localStorage.getItem('cartifyUser'));
        
        if (userData && userData.name) {
            userName.textContent = userData.name;
            userDisplayName.textContent = userData.name;
        } else {
            userName.textContent = 'Guest';
            userDisplayName.textContent = 'Guest';
        }
    }

    // Set welcome time with greeting
    function setWelcomeTime() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;
        
        if (hours < 12) greeting = 'Good Morning';
        else if (hours < 17) greeting = 'Good Afternoon';
        else greeting = 'Good Evening';
        
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        
        const dateString = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
        });
        
        welcomeTime.textContent = `${greeting} • ${timeString} • ${dateString}`;
    }

    // Theme Toggle Function
    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('cartify_theme', isDarkMode ? 'dark' : 'light');
        
        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');
        
        if (isDarkMode) {
            moonIcon.style.opacity = '1';
            sunIcon.style.opacity = '0.5';
        } else {
            moonIcon.style.opacity = '0.5';
            sunIcon.style.opacity = '1';
        }
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('cartify_theme');
        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            moonIcon.style.opacity = '1';
            sunIcon.style.opacity = '0.5';
        } else {
            document.body.classList.remove('dark-mode');
            moonIcon.style.opacity = '0.5';
            sunIcon.style.opacity = '1';
        }
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        document.addEventListener('click', function(e) {
            if (navMenu && mobileMenuBtn) {
                if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    navMenu.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    }

    // User logout function
    function initUserLogout() {
        if (userBtn) {
            userBtn.addEventListener('click', function() {
                const confirmLogout = confirm('Do you want to logout?');
                if (confirmLogout) {
                    localStorage.removeItem('cartifyUser');
                    window.location.href = 'login.html';
                }
            });
        }
    }

    // Update cart stats (if elements exist)
    function updateCartStats() {
        const cartItems = document.getElementById('cartItems');
        const timeSaved = document.getElementById('timeSaved');
        const totalSavings = document.getElementById('totalSavings');
        
        if (cartItems || timeSaved || totalSavings) {
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
            
            if (cartItems) cartItems.textContent = itemCount;
            
            const minutesSaved = itemCount * 2;
            const hours = Math.floor(minutesSaved / 60);
            const minutes = minutesSaved % 60;
            
            if (timeSaved) {
                if (hours > 0) timeSaved.textContent = `${hours}h ${minutes}m`;
                else timeSaved.textContent = `${minutes}m`;
            }
            
            const savings = itemCount * 50;
            if (totalSavings) totalSavings.textContent = `RS ${savings}`;
        }
    }

    function initAddToCart() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('.product-name').textContent;
                const productPriceText = productCard.querySelector('.product-price').textContent;
                const productPrice = parseFloat(productPriceText.replace('RS', '').trim());
                
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                this.style.backgroundColor = 'var(--success)';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.backgroundColor = '';
                }, 2000);
                
                updateCart(productName, productPrice);
                updateCartStats();
            });
        });
    }

    function updateCart(name, price) {
        let cart = [];
        const savedCart = localStorage.getItem('cartify_cart');
        if (savedCart) cart = JSON.parse(savedCart);
        
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) existingItem.quantity += 1;
        else cart.push({ id: Date.now(), name: name, price: price, quantity: 1 });
        
        localStorage.setItem('cartify_cart', JSON.stringify(cart));
        showNotification(`${name} added to cart!`);
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `<i class="fas fa-shopping-cart"></i><span>${message}</span>`;
        notification.style.cssText = `
            position: fixed; top: 100px; right: 20px;
            background: linear-gradient(135deg, #FF6B35, #FF9F1C);
            color: white; padding: 15px 25px; border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            display: flex; align-items: center; gap: 10px;
            z-index: 1000; font-weight: 500;
            animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
        `;
        if (!document.querySelector('#notificationStyles')) {
            const style = document.createElement('style');
            style.id = 'notificationStyles';
            style.textContent = `
                @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
                @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
            `;
            document.head.appendChild(style);
        }
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    function initShoppingCart() {
        if (!localStorage.getItem('cartify_cart')) {
            const initialCart = [
                { id: 1, name: 'Fresh Milk', price: 200, quantity: 1 },
                { id: 2, name: 'Whole Wheat Bread', price: 120, quantity: 2 },
                { id: 3, name: 'Organic Eggs', price: 320, quantity: 1 }
            ];
            localStorage.setItem('cartify_cart', JSON.stringify(initialCart));
        }
        updateCartStats();
    }

    // Initialize everything
    function init() {
        loadUserData();
        setWelcomeTime();
        loadTheme();
        initMobileMenu();
        initShoppingCart();
        initAddToCart();
        initUserLogout();
        
        setInterval(setWelcomeTime, 60000);
        
        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
        
        console.log('%c🛒 Welcome to Cartify Smart Shopping!', 'color: #FF6B35; font-size: 16px; font-weight: bold;');
    }

    init();
});