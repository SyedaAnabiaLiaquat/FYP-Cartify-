// Import Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Initialize Supabase
const supabaseUrl = "https://snrycfyxxtbbfnaixotx.supabase.co"
const supabaseKey = "sb_publishable_6zmzDWqfQzP2PpqdP-G-DA_kK-81kwM"

const supabase = createClient(supabaseUrl, supabaseKey)

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

    // Form Validation (Updated for your table constraints)
    function validateForm() {
        let isValid = true;

        // Name validation - username must be at least 3 characters
        const name = nameInput.value.trim();
        if (!name) {
            showError(nameError, 'Please enter your name');
            isValid = false;
        } else if (name.length < 3) {
            showError(nameError, 'Name must be at least 3 characters');
            isValid = false;
        } else {
            clearError(nameError);
        }

        // Phone validation - must be exactly 11 digits
        const phone = phoneInput.value.trim();
        const phoneRegex = /^[0-9]{11}$/; // Exactly 11 digits
        
        if (!phone) {
            showError(phoneError, 'Please enter your phone number');
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            showError(phoneError, 'Please enter a valid 11-digit phone number');
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
    }

    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    // Save user data to Supabase (Updated for users_login table)
    async function saveUserToDatabase(name, phone) {
        try {
            console.log('Attempting to save:', { username: name, phone_number: phone });
            
            const { data, error } = await supabase
                .from('users_login')  // Table name updated
                .insert([
                    { 
                        username: name,           // Column name updated
                        phone_number: phone       // Column name updated
                        // created_at auto-generates
                    }
                ])
                .select();

            if (error) {
                // Check for duplicate phone number
                if (error.code === '23505') { // Unique violation
                    console.log('User already exists with this phone number');
                    return { success: true, exists: true };
                }
                throw error;
            }
            
            console.log('User saved successfully:', data);
            return { success: true, data };
            
        } catch (error) {
            console.error('Error saving user:', error.message);
            return { success: false, error: error.message };
        }
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
        
        if (rememberMe.checked) {
            sessionStorage.setItem('cartify_user', JSON.stringify(userData));
        }
    }

    // Check for existing login
    function checkExistingLogin() {
        const savedUser = localStorage.getItem('cartify_user');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            if (userData.remember) {
                nameInput.value = userData.name;
                phoneInput.value = userData.phone;
                rememberMe.checked = true;
            }
        }
    }

    // Show success modal and redirect
    function showSuccessAndRedirect() {
        successModal.classList.add('show');
        
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                redirectToHome();
            } else {
                width += 1.67;
                progressBar.style.width = width + '%';
            }
        }, 50);
    }

    // Redirect to home page
    function redirectToHome() {
        window.location.href = 'Home.html';
    }

    // Handle form submission
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Show loading state
        loginBtn.disabled = true;
        loginSpinner.style.display = 'inline-block';
        loginBtn.querySelector('span').textContent = 'Logging in...';

        // Get form values
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        try {
            // Save to Supabase
            const result = await saveUserToDatabase(name, phone);
            
            if (result.success) {
                // Save user data locally
                saveUserData(name, phone);
                
                // Reset button state
                loginBtn.disabled = false;
                loginSpinner.style.display = 'none';
                loginBtn.querySelector('span').textContent = 'Login to Cartify';
                
                // Show success modal
                showSuccessAndRedirect();
            } else {
                // Handle error
                alert('Error: ' + result.error);
                
                // Reset button state
                loginBtn.disabled = false;
                loginSpinner.style.display = 'none';
                loginBtn.querySelector('span').textContent = 'Login to Cartify';
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred. Please try again.');
            
            loginBtn.disabled = false;
            loginSpinner.style.display = 'none';
            loginBtn.querySelector('span').textContent = 'Login to Cartify';
        }
    });

    // Real-time validation
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim()) {
            clearError(nameError);
        }
    });

    phoneInput.addEventListener('input', function() {
        const phone = phoneInput.value.trim();
        if (phone.length === 11 && /^[0-9]+$/.test(phone)) {
            clearError(phoneError);
        }
    });

    // Input formatting for phone number (max 11 digits)
    phoneInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
    });

    nameInput.focus();

    console.log('%c🚀 Welcome to Cartify!', 'color: #FF6B35; font-size: 16px; font-weight: bold;');
});