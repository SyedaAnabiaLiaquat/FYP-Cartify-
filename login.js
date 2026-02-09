// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const successModal = document.getElementById('successModal');
    const progressBar = document.getElementById('progressBar');
    const loginBtn = document.getElementById('loginBtn');
    const loginSpinner = document.getElementById('loginSpinner');

    // Form validation
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const nameError = document.getElementById('nameError');
        const phoneError = document.getElementById('phoneError');
        
        let isValid = true;
        
        // Reset errors
        nameError.textContent = '';
        phoneError.textContent = '';
        
        // Validate name
        if (!name) {
            nameError.textContent = 'Please enter your name';
            isValid = false;
        } else if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            isValid = false;
        }
        
        // Validate phone
        if (!phone) {
            phoneError.textContent = 'Please enter your phone number';
            isValid = false;
        } else if (!/^[0-9]{10,15}$/.test(phone)) {
            phoneError.textContent = 'Please enter a valid phone number (10-15 digits)';
            isValid = false;
        }
        
        if (isValid) {
            // Show loading state
            loginBtn.disabled = true;
            loginSpinner.style.display = 'block';
            
            // Store user data in localStorage
            const userData = {
                name: name,
                phone: phone,
                loginTime: new Date().toISOString()
            };
            
            localStorage.setItem('cartifyUser', JSON.stringify(userData));
            
            // Simulate API call
            setTimeout(() => {
                // Hide spinner
                loginSpinner.style.display = 'none';
                
                // Show success modal
                successModal.style.display = 'flex';
                
                // Animate progress bar
                let width = 0;
                const interval = setInterval(() => {
                    if (width >= 100) {
                        clearInterval(interval);
                        
                        // Redirect to home page after completion
                        window.location.href = 'index.html';
                    } else {
                        width += 2;
                        progressBar.style.width = width + '%';
                    }
                }, 20);
            }, 1500);
        }
    });
    
    // Auto-fill form if remembered
    const rememberMe = document.getElementById('rememberMe');
    const storedUser = localStorage.getItem('cartifyUser');
    
    if (storedUser) {
        const user = JSON.parse(storedUser);
        document.getElementById('name').value = user.name || '';
        document.getElementById('phone').value = user.phone || '';
        rememberMe.checked = true;
    }
    
    // Close modal if clicked outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});

// script.js - Cartify Login Page

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const rememberMe = document.getElementById('rememberMe');
    const loginBtn = document.getElementById('loginBtn');
    const loginSpinner = document.getElementById('loginSpinner');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const successModal = document.getElementById('successModal');
    const progressBar = document.getElementById('progressBar');

    // Check if user is already logged in
    checkExistingLogin();

    // Form Validation
    function validateForm() {
        let isValid = true;

        // Name validation
        const name = nameInput.value.trim();
        if (!name) {
            showError(nameError, 'Please enter your name');
            isValid = false;
        } else if (name.length < 2) {
            showError(nameError, 'Name must be at least 2 characters');
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            showError(nameError, 'Name can only contain letters and spaces');
            isValid = false;
        } else {
            clearError(nameError);
        }

        // Phone validation
        const phone = phoneInput.value.trim();
        const phoneRegex = /^[0-9]{10,15}$/;
        
        if (!phone) {
            showError(phoneError, 'Please enter your phone number');
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            showError(phoneError, 'Please enter a valid phone number (10-15 digits)');
            isValid = false;
        } else {
            clearError(phoneError);
        }

        return isValid;
    }

    // Error handling functions
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
        errorElement.parentElement.classList.add('error');
    }

    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
        errorElement.parentElement.classList.remove('error');
    }

    // Save user data to localStorage
    function saveUserData(name, phone) {
        const userData = {
            name: name,
            phone: phone,
            timestamp: new Date().toISOString(),
            remember: rememberMe.checked
        };
        
        localStorage.setItem('cartify_user', JSON.stringify(userData));
        
        // If remember me is checked, also save to sessionStorage for immediate access
        if (rememberMe.checked) {
            sessionStorage.setItem('cartify_user', JSON.stringify(userData));
        }
    }

    // Check for existing login
    function checkExistingLogin() {
        const savedUser = localStorage.getItem('cartify_user');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            
            // If remember me was checked, auto-fill the form
            if (userData.remember) {
                nameInput.value = userData.name;
                phoneInput.value = userData.phone;
                rememberMe.checked = true;
            }
        }
    }

    // Show success modal and redirect
    function showSuccessAndRedirect(name) {
        // Show modal
        successModal.classList.add('show');
        
        // Start progress bar
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                redirectToHome();
            } else {
                width += 1.67; // 3 seconds total
                progressBar.style.width = width + '%';
            }
        }, 50);
    }

    // Redirect to home page
    function redirectToHome() {
        // In a real application, this would redirect to your main site
        // For this demo, we'll create a simple home page redirect
        
        // Create a simple home page URL
        const homePage = window.location.href.replace('index.html', 'home.html');
        
        // If home.html doesn't exist, redirect to a demo page
        window.location.href = homePage;
    }

    // Create a demo home page if it doesn't exist
    function createDemoHomePage() {
        if (!localStorage.getItem('cartify_home_created')) {
            const homePageHTML = `
               
            `;
            
            // Create a Blob with the HTML content
            const blob = new Blob([homePageHTML], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            
            // Save the URL for later use
            sessionStorage.setItem('cartify_home_url', url);
            localStorage.setItem('cartify_home_created', 'true');
        }
    }

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Show loading state
        loginBtn.disabled = true;
        loginSpinner.classList.add('show');
        loginBtn.innerHTML = '<i class="fas fa-spinner"></i><span>Logging in...</span>';

        // Get form values
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        // Simulate API call delay
        setTimeout(() => {
            // Save user data
            saveUserData(name, phone);
            
            // Create demo home page if needed
            createDemoHomePage();
            
            // Reset button state
            loginBtn.disabled = false;
            loginSpinner.classList.remove('show');
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Login to Cartify</span>';
            
            // Show success modal
            showSuccessAndRedirect(name);
        }, 1500);
    });

    // Real-time validation
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim()) {
            clearError(nameError);
        }
    });

    phoneInput.addEventListener('input', function() {
        if (phoneInput.value.trim()) {
            clearError(phoneError);
        }
    });

    // Input formatting for phone number
    phoneInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.keyCode || e.which);
        if (!/^\d+$/.test(char)) {
            e.preventDefault();
            return false;
        }
    });

    // Add animation to form inputs on focus
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Add some interactivity to the feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl + Enter to submit form
        if (e.ctrlKey && e.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
        
        // Escape to clear form
        if (e.key === 'Escape') {
            nameInput.value = '';
            phoneInput.value = '';
            clearError(nameError);
            clearError(phoneError);
            nameInput.focus();
        }
    });

    // Auto-focus name field on page load
    nameInput.focus();

    // Add some console greeting for developers
    console.log('%c🚀 Welcome to Cartify Smart Shopping Trolley!', 'color: #FF6B35; font-size: 16px; font-weight: bold;');
    console.log('%cThis is a demo login system for a Final Year Project.', 'color: #666;');
    console.log('%cAll data is stored locally in your browser.', 'color: #666;');
});