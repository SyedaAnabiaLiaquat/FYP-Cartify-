document.addEventListener('DOMContentLoaded', function() {
    // Sample order data
    const orderData = {
        items: [
            { name: "Fresh Mangoes", category: "Fruits", price: 350, quantity: 2 },
            { name: "Basmati Rice", category: "Grains", price: 220, quantity: 3 },
            { name: "Cooking Oil", category: "Essentials", price: 550, quantity: 1 }
        ],
        deliveryFee: 150,
        taxRate: 0.13,
        walletBalance: 2500
    };

    // DOM Elements
    const orderItems = document.querySelector('.order-items');
    const subtotalEl = document.getElementById('subtotal');
    const deliveryEl = document.getElementById('delivery');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    const orderTotalEl = document.getElementById('orderTotal');
    const walletUsedEl = document.getElementById('walletUsed');
    const amountToPayEl = document.getElementById('amountToPay');
    const payBtn = document.getElementById('payNowBtn');
    
    // Payment Options
    const walletOption = document.getElementById('walletOption');
    const cardOption = document.getElementById('cardOption');
    const cashOption = document.getElementById('cashOption');
    
    // Customer Info
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');

    // Calculate totals
    function calculateTotals() {
        const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * orderData.taxRate;
        const total = subtotal + orderData.deliveryFee + tax;
        
        return { subtotal, tax, total };
    }

    // Update order display
    function updateOrderDisplay() {
        const { subtotal, tax, total } = calculateTotals();
        
        // Update order items
        orderItems.innerHTML = orderData.items.map(item => `
            <div class="order-item">
                <div class="item-img">
                    <i class="fas fa-box"></i>
                </div>
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-meta">${item.category} • Qty: ${item.quantity}</div>
                </div>
                <div class="item-price">Rs ${(item.price * item.quantity).toLocaleString('en-PK')}</div>
            </div>
        `).join('');
        
        // Update totals
        subtotalEl.textContent = `Rs ${subtotal.toLocaleString('en-PK')}`;
        deliveryEl.textContent = `Rs ${orderData.deliveryFee.toLocaleString('en-PK')}`;
        taxEl.textContent = `Rs ${Math.round(tax).toLocaleString('en-PK')}`;
        totalEl.textContent = `Rs ${Math.round(total).toLocaleString('en-PK')}`;
        orderTotalEl.textContent = `Rs ${Math.round(total).toLocaleString('en-PK')}`;
        
        // Update payment summary
        updatePaymentSummary();
    }

    // Update payment summary
    function updatePaymentSummary() {
        const { total } = calculateTotals();
        const walletUsed = Math.min(orderData.walletBalance, total);
        const amountToPay = total - walletUsed;
        
        walletUsedEl.textContent = `- Rs ${walletUsed.toLocaleString('en-PK')}`;
        amountToPayEl.textContent = `Rs ${Math.round(amountToPay).toLocaleString('en-PK')}`;
        
        // Update pay button
        payBtn.innerHTML = `<i class="fas fa-lock"></i> Pay Now - Rs ${Math.round(amountToPay).toLocaleString('en-PK')}`;
    }

    // Set payment method
    function setPaymentMethod(method) {
        // Remove selected class from all
        walletOption.classList.remove('selected');
        cardOption.classList.remove('selected');
        cashOption.classList.remove('selected');
        
        // Add selected class to chosen method
        if (method === 'wallet') {
            walletOption.classList.add('selected');
        } else if (method === 'card') {
            cardOption.classList.add('selected');
        } else {
            cashOption.classList.add('selected');
        }
        
        // If not wallet, reset wallet usage
        if (method !== 'wallet') {
            orderData.walletBalance = 0;
            updatePaymentSummary();
        }
    }

    // Process payment
    function processPayment() {
        const { total } = calculateTotals();
        const walletUsed = Math.min(orderData.walletBalance, total);
        const amountToPay = total - walletUsed;
        
        // Validate customer info
        if (!nameInput.value.trim() || !phoneInput.value.trim() || !addressInput.value.trim()) {
            alert('Please fill in all required customer information');
            return;
        }
        
        // Validate terms agreement
        if (!document.getElementById('agreeTerms').checked) {
            alert('Please agree to terms & conditions');
            return;
        }
        
        // Simple confirmation
        const confirmMsg = `
Confirm Order:
Total: Rs ${Math.round(total).toLocaleString('en-PK')}
Wallet Used: Rs ${walletUsed.toLocaleString('en-PK')}
Amount to Pay: Rs ${Math.round(amountToPay).toLocaleString('en-PK')}
        
Deliver to: ${addressInput.value}
        `;
        
        if (confirm(confirmMsg)) {
            alert('Order placed successfully! Thank you for shopping with Cartify.');
            
            // Reset form
            nameInput.value = '';
            phoneInput.value = '';
            emailInput.value = '';
            addressInput.value = '';
            orderData.items = [];
            updateOrderDisplay();
        }
    }

    // Initialize event listeners
    function initEventListeners() {
        // Payment method selection
        walletOption.addEventListener('click', () => setPaymentMethod('wallet'));
        cardOption.addEventListener('click', () => setPaymentMethod('card'));
        cashOption.addEventListener('click', () => setPaymentMethod('cash'));
        
        // Pay button
        payBtn.addEventListener('click', processPayment);
        
        // Add sample item button (for testing)
        const addSampleBtn = document.createElement('button');
        addSampleBtn.textContent = 'Add Sample Item';
        addSampleBtn.style.cssText = 'padding: 10px 20px; background: #FF6B35; color: white; border: none; border-radius: 5px; margin-top: 20px; cursor: pointer;';
        addSampleBtn.addEventListener('click', function() {
            const sampleItems = [
                { name: "Toothpaste", category: "Personal Care", price: 250, quantity: 1 },
                { name: "Mineral Water", category: "Beverages", price: 70, quantity: 6 },
                { name: "Sugar", category: "Essentials", price: 120, quantity: 2 }
            ];
            const randomItem = sampleItems[Math.floor(Math.random() * sampleItems.length)];
            orderData.items.push(randomItem);
            updateOrderDisplay();
            alert(`Added: ${randomItem.name}`);
        });
        
        document.querySelector('.order-summary').appendChild(addSampleBtn);
    }

    // Initialize
    function init() {
        // Set sample customer info
        nameInput.value = "Muhammad Ahmed";
        phoneInput.value = "030";
       
    
        
        updateOrderDisplay();
        initEventListeners();
        
        // Set initial payment method
        setPaymentMethod('wallet');
    }

    // Start
    init();
});