// confirmation.js - Cartify Payment Confirmation Page

document.addEventListener('DOMContentLoaded', function() {
    // Sample order data with Pakistani Rupees pricing
    const orderData = {
        orderNumber: 'CTF-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 100000)).padStart(5, '0'),
        transactionId: 'TXN-' + Date.now(),
        dateTime: new Date(),
        items: [
            {
                id: 1,
                name: "Fresh Apples",
                category: "Fruits",
                price: 250,
                quantity: 2,
                image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=100&h=100&fit=crop"
            },
            {
                id: 2,
                name: "Organic Milk",
                category: "Dairy",
                price: 180,
                quantity: 1,
                image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&h=100&fit=crop"
            },
            {
                id: 3,
                name: "Whole Wheat Bread",
                category: "Bakery",
                price: 120,
                quantity: 3,
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop"
            },
            {
                id: 4,
                name: "Free Range Eggs",
                category: "Dairy",
                price: 320,
                quantity: 1,
                image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=100&h=100&fit=crop"
            },
            {
                id: 5,
                name: "Fresh Tomatoes",
                category: "Vegetables",
                price: 90,
                quantity: 2,
                image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop"
            }
        ],
        deliveryFee: 150,
        taxRate: 0.13,
        discountRate: 0.05,
        discountApplied: true,
        paymentMethod: 'Cartify Wallet',
        amountPaid: 0, // Will be calculated
        customerInfo: {
            name: "Muhammad Ahmed",
            email: "ahmed@example.com",
            phone: "+92 300 1234567",
            address: "House #123, Street 45, Sector G-10/4, Islamabad"
        },
        deliveryInfo: {
            method: "Standard Delivery",
            time: "Today, 4:00 PM - 6:00 PM",
            contact: "+92 300 1234567"
        },
        orderNotes: "Please deliver before 6 PM"
    };

    // DOM Elements
    const orderNumber = document.getElementById('orderNumber');
    const orderDateTime = document.getElementById('orderDateTime');
    const customerName = document.getElementById('customerName');
    const customerPhone = document.getElementById('customerPhone');
    const customerEmail = document.getElementById('customerEmail');
    const deliveryAddress = document.getElementById('deliveryAddress');
    const orderItems = document.getElementById('orderItems');
    const subtotalAmount = document.getElementById('subtotalAmount');
    const deliveryFee = document.getElementById('deliveryFee');
    const taxAmount = document.getElementById('taxAmount');
    const discountAmount = document.getElementById('discountAmount');
    const grandTotal = document.getElementById('grandTotal');
    const amountPaid = document.getElementById('amountPaid');
    const transactionId = document.getElementById('transactionId');
    const smsPhoneNumber = document.getElementById('smsPhoneNumber');
    const smsMessage = document.getElementById('smsMessage');
    const smsTime = document.getElementById('smsTime');
    const deliveryPerson = document.getElementById('deliveryPerson');
    const estimatedDelivery = document.getElementById('estimatedDelivery');
    const deliveryContact = document.getElementById('deliveryContact');
    const step1Time = document.getElementById('step1Time');

    // Buttons
    const sendSMSBtn = document.getElementById('sendSMSBtn');
    const editSMSNumber = document.getElementById('editSMSNumber');
    const printBillBtn = document.getElementById('printBillBtn');
    const sendBillSMSBtn = document.getElementById('sendBillSMSBtn');
    const emailBillBtn = document.getElementById('emailBillBtn');
    const savePDFBtn = document.getElementById('savePDFBtn');
    const shareOrderBtn = document.getElementById('shareOrderBtn');

    // Overlays & Toasts
    const loadingOverlay = document.getElementById('loadingOverlay');
    const successToast = document.getElementById('successToast');
    const toastMessage = document.getElementById('toastMessage');

    // State
    let smsSent = false;
    let lastSMSTime = null;

    // Format price in Pakistani Rupees
    function formatPrice(price) {
        return `Rs ${price.toLocaleString('en-PK')}`;
    }

    // Format date and time
    function formatDateTime(date) {
        const options = { 
            weekday: 'long',
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        return date.toLocaleDateString('en-PK', options);
    }

    // Format time for relative display
    function formatRelativeTime(date) {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        
        if (minutes < 1) return 'Just now';
        if (minutes === 1) return '1 minute ago';
        if (minutes < 60) return `${minutes} minutes ago`;
        
        const hours = Math.floor(minutes / 60);
        if (hours === 1) return '1 hour ago';
        return `${hours} hours ago`;
    }

    // Calculate order totals
    function calculateTotals() {
        const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = orderData.discountApplied ? subtotal * orderData.discountRate : 0;
        const tax = (subtotal - discount) * orderData.taxRate;
        const total = subtotal + orderData.deliveryFee + tax - discount;
        
        return { subtotal, discount, tax, total };
    }

    // Generate SMS message
    function generateSMSMessage() {
        const { total } = calculateTotals();
        const time = new Date().toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' });
        
        return `Cartify: Order Confirmed! Order #${orderData.orderNumber}\nAmount: ${formatPrice(total)}\nItems: ${orderData.items.length}\nDelivery: ${orderData.deliveryInfo.time}\nThank you for shopping with us!`;
    }

    // Update order display
    function updateOrderDisplay() {
        const { subtotal, discount, tax, total } = calculateTotals();
        
        // Update order data
        orderData.amountPaid = total;
        
        // Update basic info
        orderNumber.textContent = orderData.orderNumber;
        orderDateTime.textContent = formatDateTime(orderData.dateTime);
        customerName.textContent = orderData.customerInfo.name;
        customerPhone.textContent = orderData.customerInfo.phone;
        customerEmail.textContent = orderData.customerInfo.email;
        deliveryAddress.textContent = orderData.customerInfo.address;
        transactionId.textContent = orderData.transactionId;
        
        // Update totals
        subtotalAmount.textContent = formatPrice(subtotal);
        deliveryFee.textContent = formatPrice(orderData.deliveryFee);
        taxAmount.textContent = formatPrice(tax);
        discountAmount.textContent = `- ${formatPrice(discount)}`;
        grandTotal.textContent = formatPrice(total);
        amountPaid.textContent = formatPrice(total);
        
        // Update delivery info
        deliveryPerson.textContent = orderData.customerInfo.name;
        estimatedDelivery.textContent = orderData.deliveryInfo.time;
        deliveryContact.textContent = orderData.deliveryInfo.contact;
        
        // Update step time
        step1Time.textContent = formatRelativeTime(orderData.dateTime);
        
        // Update order items
        orderItems.innerHTML = orderData.items.map(item => `
            <div class="order-item-row">
                <div class="col-product">
                    <div class="item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-category">${item.category}</div>
                    </div>
                </div>
                <div class="col-quantity">${item.quantity}</div>
                <div class="col-price">${formatPrice(item.price)}</div>
                <div class="col-total">${formatPrice(item.price * item.quantity)}</div>
            </div>
        `).join('');
    }

    // Update SMS display
    function updateSMSDisplay() {
        smsPhoneNumber.textContent = orderData.customerInfo.phone;
        smsMessage.textContent = generateSMSMessage();
        
        if (lastSMSTime) {
            smsTime.textContent = `Sent at ${lastSMSTime.toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' })}`;
        } else {
            smsTime.textContent = 'Not sent yet';
        }
    }

    // Show toast notification
    function showToast(message, duration = 3000) {
        toastMessage.textContent = message;
        successToast.classList.add('show');
        
        setTimeout(() => {
            successToast.classList.remove('show');
        }, duration);
    }

    // Show loading overlay
    function showLoading(message = 'Processing...') {
        loadingOverlay.querySelector('h3').textContent = message;
        loadingOverlay.style.display = 'flex';
    }

    // Hide loading overlay
    function hideLoading() {
        loadingOverlay.style.display = 'none';
    }

    // Simulate SMS sending
    function sendSMS() {
        if (smsSent) {
            // Show loading for resend
            showLoading('Resending SMS...');
        } else {
            showLoading('Sending SMS confirmation...');
        }
        
        // Simulate API call delay
        setTimeout(() => {
            smsSent = true;
            lastSMSTime = new Date();
            
            // Update SMS display
            updateSMSDisplay();
            
            // Hide loading
            hideLoading();
            
            // Show success toast
            showToast(smsSent ? 'SMS sent successfully!' : 'SMS resent successfully!');
            
            // Update SMS status
            document.getElementById('smsStatus').innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>SMS ${smsSent ? 'Sent' : 'Resent'}</span>
            `;
            
        }, 2000);
    }

    // Edit SMS phone number
    function editSMSNumber() {
        const newNumber = prompt('Enter phone number for SMS:', orderData.customerInfo.phone);
        if (newNumber && newNumber.trim()) {
            orderData.customerInfo.phone = newNumber.trim();
            orderData.deliveryInfo.contact = newNumber.trim();
            updateOrderDisplay();
            updateSMSDisplay();
            showToast('Phone number updated successfully!');
        }
    }

    // Print bill
    function printBill() {
        showLoading('Preparing for printing...');
        
        setTimeout(() => {
            hideLoading();
            
            // Add print-specific styles temporarily
            const style = document.createElement('style');
            style.textContent = `
                @media print {
                    .navbar,
                    .actions-section,
                    .cta-section,
                    .sms-controls,
                    .success-toast {
                        display: none !important;
                    }
                    
                    body {
                        background: white !important;
                        padding: 0 !important;
                    }
                    
                    .receipt-section {
                        box-shadow: none !important;
                        border: 1px solid #000 !important;
                        margin: 0 !important;
                    }
                    
                    .main-content {
                        display: block !important;
                    }
                    
                    .container {
                        max-width: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    
                    .success-header {
                        padding: 1rem 0 !important;
                    }
                    
                    .success-icon {
                        font-size: 3rem !important;
                    }
                    
                    .success-header h1 {
                        font-size: 1.5rem !important;
                    }
                    
                    .success-badges {
                        display: none !important;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Trigger print
            window.print();
            
            // Remove the print styles after printing
            setTimeout(() => {
                document.head.removeChild(style);
            }, 100);
            
            showToast('Print dialog opened. Select your printer.');
        }, 1000);
    }

    // Send bill via SMS
    function sendBillViaSMS() {
        showLoading('Preparing bill for SMS...');
        
        setTimeout(() => {
            hideLoading();
            
            // Simulate sending detailed bill via SMS
            const { total } = calculateTotals();
            const billDetails = `Cartify Bill Details\nOrder: ${orderData.orderNumber}\nItems:\n${
                orderData.items.map(item => `• ${item.name} x${item.quantity}: ${formatPrice(item.price * item.quantity)}`).join('\n')
            }\nTotal: ${formatPrice(total)}\nThank you!`;
            
            alert('SMS Bill Preview:\n\n' + billDetails + '\n\n(This would be sent via SMS in real implementation)');
            
            showToast('Bill prepared for SMS. Check your messages.');
        }, 1500);
    }

    // Email receipt
    function emailReceipt() {
        showLoading('Preparing email receipt...');
        
        setTimeout(() => {
            hideLoading();
            
            // Simulate email sending
            const emailSubject = `Your Cartify Receipt - Order #${orderData.orderNumber}`;
            const emailBody = `Thank you for your purchase! Here are your order details...`;
            
            // In a real app, this would open mail client or send via API
            alert('Email receipt prepared. Would be sent to: ' + orderData.customerInfo.email);
            
            showToast('Email receipt sent to ' + orderData.customerInfo.email);
        }, 1500);
    }

    // Save as PDF
    function saveAsPDF() {
        showLoading('Generating PDF...');
        
        setTimeout(() => {
            hideLoading();
            
            // Simulate PDF generation and download
            const { total } = calculateTotals();
            const pdfContent = `
                Cartify Receipt
                Order #${orderData.orderNumber}
                Date: ${formatDateTime(orderData.dateTime)}
                
                Customer: ${orderData.customerInfo.name}
                Phone: ${orderData.customerInfo.phone}
                
                Items:
                ${orderData.items.map(item => `${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`).join('\n')}
                
                Subtotal: ${formatPrice(calculateTotals().subtotal)}
                Delivery: ${formatPrice(orderData.deliveryFee)}
                Tax: ${formatPrice(calculateTotals().tax)}
                Discount: -${formatPrice(calculateTotals().discount)}
                Total: ${formatPrice(total)}
                
                Thank you for shopping with Cartify!
            `;
            
            // Create a blob and download link
            const blob = new Blob([pdfContent], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Cartify-Receipt-${orderData.orderNumber}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showToast('PDF downloaded successfully!');
        }, 2000);
    }

    // Share order
    function shareOrder() {
        const { total } = calculateTotals();
        const shareText = `I just ordered from Cartify! Order #${orderData.orderNumber} - ${formatPrice(total)}\nCheck out Cartify for great deals!`;
        
        // Check if Web Share API is available
        if (navigator.share) {
            navigator.share({
                title: 'My Cartify Order',
                text: shareText,
                url: window.location.href
            })
            .then(() => showToast('Order shared successfully!'))
            .catch(() => {
                // Fallback to copy to clipboard
                copyToClipboard(shareText);
                showToast('Order details copied to clipboard!');
            });
        } else {
            // Fallback to copy to clipboard
            copyToClipboard(shareText);
            showToast('Order details copied to clipboard!');
        }
    }

    // Copy text to clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // Initialize event listeners
    function initEventListeners() {
        // SMS buttons
        sendSMSBtn.addEventListener('click', sendSMS);
        editSMSNumber.addEventListener('click', editSMSNumber);
        
        // Action buttons
        printBillBtn.addEventListener('click', printBill);
        sendBillSMSBtn.addEventListener('click', sendBillViaSMS);
        emailBillBtn.addEventListener('click', emailReceipt);
        savePDFBtn.addEventListener('click', saveAsPDF);
        shareOrderBtn.addEventListener('click', shareOrder);
        
        // Auto-send SMS on page load (after a delay)
        setTimeout(() => {
            if (!smsSent) {
                sendSMS();
            }
        }, 2000);
    }

    // Initialize
    function init() {
        updateOrderDisplay();
        updateSMSDisplay();
        initEventListeners();
        
        // Show welcome message
        setTimeout(() => {
            showToast('Payment confirmed! SMS sent to your phone.', 4000);
        }, 1000);
    }

    // Initialize when DOM is loaded
    init();

    // Demo functions for testing
    window.demoAddItem = function() {
        const newItem = {
            id: orderData.items.length + 1,
            name: "Sample Product",
            category: "Demo",
            price: Math.floor(Math.random() * 500) + 50,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=100&h=100&fit=crop"
        };
        
        orderData.items.push(newItem);
        updateOrderDisplay();
        updateSMSDisplay();
        showToast('Demo item added to order');
    };

    window.demoClearOrder = function() {
        if (confirm('Clear all items from order?')) {
            orderData.items = [];
            updateOrderDisplay();
            updateSMSDisplay();
            showToast('Order cleared', 'info');
        }
    };

    window.demoUpdateTotal = function() {
        // Recalculate with random discount
        orderData.discountApplied = Math.random() > 0.5;
        updateOrderDisplay();
        updateSMSDisplay();
        showToast('Totals updated with random discount');
    };
});