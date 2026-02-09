// scanner.js - Cartify Smart Shopping Scanner

document.addEventListener('DOMContentLoaded', function() {
    

    // Shopping Cart
    let cart = [];
    let isScanning = false;
    let scanningInterval = null;

    // DOM Elements
    const cameraFeed = document.getElementById('cameraFeed');
    const scannedProduct = document.getElementById('scannedProduct');
    const cartItems = document.getElementById('cartItems');
    const productGrid = document.getElementById('productGrid');
    const cartCount = document.querySelector('.cart-count');
    const totalItems = document.querySelector('.total-items');
    const totalAmount = document.querySelector('.total-amount');
    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const totalAmountDisplay = document.getElementById('totalAmount');

    // Buttons
    const startScanner = document.getElementById('startScanner');
    const stopScanner = document.getElementById('stopScanner');
    const simulateScan = document.getElementById('simulateScan');
    const enterBarcode = document.getElementById('enterBarcode');
    const barcodeInput = document.getElementById('barcodeInput');
    const clearCart = document.getElementById('clearCart');
    const checkout = document.getElementById('checkout');
    const quickButtons = document.querySelectorAll('.quick-btn');

    // Format price in Pakistani Rupees
    function formatPrice(price) {
        return `Rs ${price.toLocaleString('en-PK')}`;
    }

    // Generate star rating
    function generateStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        const container = document.getElementById('notificationContainer');
        container.appendChild(notification);
        
        // Add styles if not present
        if (!document.querySelector('.notification-styles')) {
            const style = document.createElement('style');
            style.className = 'notification-styles';
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                
                .notification.success {
                    background: var(--secondary);
                }
                
                .notification.error {
                    background: var(--danger);
                }
                
                .notification.info {
                    background: var(--primary);
                }
                
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
            `;
            document.head.appendChild(style);
        }
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Find product by barcode
    function findProductByBarcode(barcode) {
        return products.find(product => product.barcode === barcode);
    }

    // Simulate scanning animation
    function simulateScanning(barcode) {
        const product = findProductByBarcode(barcode);
        if (!product) {
            showNotification('Product not found in database', 'error');
            return;
        }

        // Show barcode in camera view
        cameraFeed.innerHTML = `
            <div class="scanned-barcode">
                <div class="barcode-display">
                    <div class="barcode-lines"></div>
                    <div class="barcode-number">${barcode}</div>
                </div>
                <p>Product detected: ${product.name}</p>
            </div>
        `;

        // Add barcode lines animation
        const barcodeLines = cameraFeed.querySelector('.barcode-lines');
        for (let i = 0; i < 20; i++) {
            const line = document.createElement('div');
            line.style.height = `${Math.random() * 60 + 20}px`;
            line.style.width = '3px';
            line.style.backgroundColor = 'white';
            line.style.margin = '0 2px';
            barcodeLines.appendChild(line);
        }

        // Show product in scanned product display
        showScannedProduct(product);
        
        // Add to cart
        addToCart(product);
        
        showNotification(`Scanned: ${product.name}`, 'success');
    }
    // Start-Shoping-page.js

document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Checkout Button Functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    checkoutBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation
        
        const cartItems = getCartItems(); // Get current cart items
        
        if (cartItems.length === 0) {
            alert('Your cart is empty! Please scan some items first.');
            return false;
        }
        
        // Calculate total
        const subtotal = calculateSubtotal();
        const tax = calculateTax(subtotal);
        const total = subtotal + tax;
        
        // Save cart data to localStorage for checkout page
        saveCartToStorage();
        
        // Show confirmation
        const proceed = confirm(
            `Proceed to checkout?\n\n` +
            `Items: ${cartItems.length}\n` +
            `Total: Rs ${total.toLocaleString('en-PK')}\n\n` +
            `Click OK to continue to payment.`
        );
        
        if (proceed) {
            // Navigate to checkout page
            window.location.href = 'checkout.html';
        }
    });
    
    // Function to get cart items
    function getCartItems() {
        // This should return your current cart items array
        // For example:
        return window.cartItems || [];
    }
    
    // Function to calculate subtotal
    function calculateSubtotal() {
        const cartItems = getCartItems();
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    // Function to calculate tax
    function calculateTax(subtotal) {
        return subtotal * 0.13; // 13% tax
    }
    
    // Function to save cart to localStorage
    function saveCartToStorage() {
        const cartItems = getCartItems();
        const cartData = {
            items: cartItems,
            subtotal: calculateSubtotal(),
            tax: calculateTax(calculateSubtotal()),
            total: calculateSubtotal() + calculateTax(calculateSubtotal()),
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('cartify_cart', JSON.stringify(cartData));
    }
    
    // ... rest of your existing code ...
});

    // Show scanned product details
    function showScannedProduct(product) {
        scannedProduct.innerHTML = `
            <div class="scanned-product-details product-scanned">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <div class="product-quality">
                        <span class="rating">${product.quality}/5</span>
                        <span class="stars">${generateStars(product.quality)}</span>
                    </div>
                    <div class="product-price">
                        <span class="price">${formatPrice(product.price)}</span>
                    </div>
                    <p class="product-desc">${product.description}</p>
                </div>
            </div>
        `;
        scannedProduct.classList.add('active');
    }

    // Add product to cart
    function addToCart(product) {
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartDisplay();
    }

    // Update cart quantity
    function updateCartQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(item => item.id !== productId);
            }
            updateCartDisplay();
        }
    }

    // Update cart display
    function updateCartDisplay() {
        // Update cart items list
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-cart-arrow-down fa-2x"></i>
                    <p>No items scanned yet</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Update cart summary
        const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const taxAmount = subtotalAmount * 0.13;
        const total = subtotalAmount + taxAmount;

        subtotal.textContent = formatPrice(subtotalAmount);
        tax.textContent = formatPrice(taxAmount);
        totalAmountDisplay.textContent = formatPrice(total);
        
        // Update header counters
        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        totalItems.textContent = `Items: ${totalItemsCount}`;
        totalAmount.textContent = `Total: ${formatPrice(total)}`;
        
        // Update cart count in navbar
        cartCount.textContent = totalItemsCount;
        cartCount.style.display = totalItemsCount > 0 ? 'flex' : 'none';
    }

    // Start scanning simulation
    function startScanning() {
        if (isScanning) return;
        
        isScanning = true;
        startScanner.disabled = true;
        stopScanner.disabled = false;
        
        showNotification('Scanner started. Ready to scan products.', 'info');
        
        // Simulate automatic scans
        scanningInterval = setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance to auto-scan
                const randomProduct = products[Math.floor(Math.random() * products.length)];
                simulateScanning(randomProduct.barcode);
            }
        }, 3000);
    }

    // Stop scanning
    function stopScanning() {
        if (!isScanning) return;
        
        isScanning = false;
        startScanner.disabled = false;
        stopScanner.disabled = true;
        
        clearInterval(scanningInterval);
        showNotification('Scanner stopped', 'info');
    }

    // Clear cart
    function clearAllCart() {
        cart = [];
        updateCartDisplay();
        scannedProduct.innerHTML = `
            <div class="placeholder">
                <i class="fas fa-shopping-basket fa-3x"></i>
                <p>Scan a product to see details here</p>
            </div>
        `;
        scannedProduct.classList.remove('active');
        cameraFeed.innerHTML = `
            <div class="placeholder">
                <i class="fas fa-barcode fa-4x"></i>
                <p>Ready to scan</p>
            </div>
        `;
        showNotification('Cart cleared', 'info');
    }

    // Initialize product database display
    function initProductDatabase() {
        productGrid.innerHTML = products.map(product => `
            <div class="db-product">
                <img src="${product.image}" alt="${product.name}" class="db-product-image">
                <div class="db-product-name">${product.name}</div>
                <div class="db-product-price">${formatPrice(product.price)}</div>
                <div class="db-product-barcode">Barcode: ${product.barcode}</div>
            </div>
        `).join('');
    }

    // Event Listeners
    startScanner.addEventListener('click', startScanning);
    stopScanner.addEventListener('click', stopScanning);
    
    simulateScan.addEventListener('click', () => {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        simulateScanning(randomProduct.barcode);
    });
    
    enterBarcode.addEventListener('click', () => {
        const barcode = barcodeInput.value.trim();
        if (barcode) {
            simulateScanning(barcode);
            barcodeInput.value = '';
        }
    });
    
    barcodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const barcode = barcodeInput.value.trim();
            if (barcode) {
                simulateScanning(barcode);
                barcodeInput.value = '';
            }
        }
    });
    
    clearCart.addEventListener('click', clearAllCart);
    
    checkout.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Add items to cart before checkout', 'error');
            return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        showNotification(`Proceeding to checkout. Total: ${formatPrice(total)}`, 'success');
        // In real app, this would redirect to checkout page
    });
    
    // Quick scan buttons
    quickButtons.forEach(button => {
        button.addEventListener('click', () => {
            const barcode = button.dataset.barcode;
            simulateScanning(barcode);
        });
    });

    // Make updateCartQuantity available globally for inline onclick
    window.updateCartQuantity = updateCartQuantity;

    // Initialize
    initProductDatabase();
    updateCartDisplay();
    
    // Initialize scanner state
    stopScanner.disabled = true;

    // Add scanner sound effect
    function playScanSound() {
        // In real app, play actual sound
        console.log('Beep! Product scanned.');
    }
});