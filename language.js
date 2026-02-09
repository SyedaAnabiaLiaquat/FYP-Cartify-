// language-selector.js - Simplified Integration

class LanguageManager {
    constructor() {
        this.currentLang = 'en';
        this.languages = {
            'en': {
                name: 'English',
                dir: 'ltr',
                translations: {
                    // Navigation
                    'nav.home': 'Home',
                    'nav.startShopping': 'Start Shopping',
                    'nav.products': 'Products',
                    'nav.liveBilling': 'Live Billing',
                    'nav.scanner': 'Scanner',
                    'nav.checkout': 'Checkout',
                    
                    // Shopping Page
                    'shopping.title': 'Smart Shopping Scanner',
                    'shopping.subtitle': 'Scan products to add them to your cart instantly',
                    'shopping.startScanner': 'Start Scanner',
                    'shopping.liveCart': 'Live Cart',
                    'shopping.scannedItems': 'Scanned Items',
                    'shopping.totalItems': 'Items',
                    'shopping.totalAmount': 'Total',
                    'shopping.clearCart': 'Clear Cart',
                    'shopping.proceedCheckout': 'Proceed to Checkout',
                    'shopping.emptyCart': 'No items scanned yet',
                    
                    // Checkout Page
                    'checkout.title': 'Cartify Checkout',
                    'checkout.orderSummary': 'Order Summary',
                    'checkout.subtotal': 'Subtotal',
                    'checkout.deliveryFee': 'Delivery Fee',
                    'checkout.tax': 'Tax (13%)',
                    'checkout.totalAmount': 'Total Amount',
                    'checkout.customerInfo': 'Customer Information',
                    'checkout.fullName': 'Full Name',
                    'checkout.phone': 'Phone Number',
                    'checkout.email': 'Email Address',
                    'checkout.address': 'Delivery Address',
                    'checkout.city': 'City',
                    'checkout.notes': 'Order Notes',
                    'checkout.payNow': 'Pay Now'
                }
            },
            'ur': {
                name: 'اردو',
                dir: 'rtl',
                translations: {
                    // Navigation
                    'nav.home': 'ہوم',
                    'nav.startShopping': 'خریداری شروع کریں',
                    'nav.products': 'مصنوعات',
                    'nav.liveBilling': 'لائیو بلنگ',
                    'nav.scanner': 'سکینر',
                    'nav.checkout': 'چیک آؤٹ',
                    
                    // Shopping Page
                    'shopping.title': 'اسمارٹ شاپنگ سکینر',
                    'shopping.subtitle': 'مصنوعات سکین کریں اور فوری کارٹ میں شامل کریں',
                    'shopping.startScanner': 'سکینر شروع کریں',
                    'shopping.liveCart': 'لائیو کارٹ',
                    'shopping.scannedItems': 'سکین شدہ اشیاء',
                    'shopping.totalItems': 'اشیاء',
                    'shopping.totalAmount': 'کل',
                    'shopping.clearCart': 'کارٹ صاف کریں',
                    'shopping.proceedCheckout': 'چیک آؤٹ پر جائیں',
                    'shopping.emptyCart': 'کوئی شے سکین نہیں ہوئی',
                    
                    // Checkout Page
                    'checkout.title': 'کارٹیفائی چیک آؤٹ',
                    'checkout.orderSummary': 'آرڈر کا خلاصہ',
                    'checkout.subtotal': 'ذیلی کل',
                    'checkout.deliveryFee': 'ڈیلیوری فیس',
                    'checkout.tax': 'ٹیکس (13%)',
                    'checkout.totalAmount': 'کل رقم',
                    'checkout.customerInfo': 'گاہک کی معلومات',
                    'checkout.fullName': 'پورا نام',
                    'checkout.phone': 'فون نمبر',
                    'checkout.email': 'ای میل ایڈریس',
                    'checkout.address': 'ڈیلیوری ایڈریس',
                    'checkout.city': 'شہر',
                    'checkout.notes': 'آرڈر نوٹس',
                    'checkout.payNow': 'ابھی ادا کریں'
                }
            },
            'sd': {
                name: 'سنڌي',
                dir: 'rtl',
                translations: {
                    // Navigation
                    'nav.home': 'گھر',
                    'nav.startShopping': 'خريداري شروع ڪريو',
                    'nav.products': 'پيداوار',
                    'nav.liveBilling': 'لائيڪ بلنگ',
                    'nav.scanner': 'سڪينر',
                    'nav.checkout': 'چيڪ آئوٽ',
                    
                    // Shopping Page
                    'shopping.title': 'سمارٽ شاپنگ سڪينر',
                    'shopping.subtitle': 'پيداوار سڪين ڪريو ۽ فوري ڪارٽ ۾ شامل ڪريو',
                    'shopping.startScanner': 'سڪينر شروع ڪريو',
                    'shopping.liveCart': 'لائيڪ ڪارٽ',
                    'shopping.scannedItems': 'سڪين ٿيل شيون',
                    'shopping.totalItems': 'شيون',
                    'shopping.totalAmount': 'ڪل',
                    'shopping.clearCart': 'ڪارٽ صاف ڪريو',
                    'shopping.proceedCheckout': 'چيڪ آئوٽ تي وڃو',
                    'shopping.emptyCart': 'ڪا به شيء سڪين نه ٿي',
                    
                    // Checkout Page
                    'checkout.title': 'ڪارٽيفائي چيڪ آئوٽ',
                    'checkout.orderSummary': 'آرڊر جو خلاصو',
                    'checkout.subtotal': 'ذيل ڪل',
                    'checkout.deliveryFee': 'ڊليوري فيس',
                    'checkout.tax': 'ٽيڪس (13%)',
                    'checkout.totalAmount': 'ڪل رقم',
                    'checkout.customerInfo': 'گهربار جي معلومات',
                    'checkout.fullName': 'مڪمل نالو',
                    'checkout.phone': 'فون نمبر',
                    'checkout.email': 'اي ميل ايڊريس',
                    'checkout.address': 'ڊليوري ايڊريس',
                    'checkout.city': 'شهر',
                    'checkout.notes': 'آرڊر نوٽس',
                    'checkout.payNow': 'ھاڻي ادا ڪريو'
                }
            },
            'ps': {
                name: 'پښتو',
                dir: 'rtl',
                translations: {
                    // Navigation
                    'nav.home': 'کور',
                    'nav.startShopping': 'پیرود پیل کړئ',
                    'nav.products': 'توکي',
                    'nav.liveBilling': 'ژوندی بیلنگ',
                    'nav.scanner': 'سکینر',
                    'nav.checkout': 'چیک آوټ',
                    
                    // Shopping Page
                    'shopping.title': 'سمارټ شاپنگ سکینر',
                    'shopping.subtitle': 'توکي سکین کړئ او فوري کارټ کې اضافه کړئ',
                    'shopping.startScanner': 'سکینر پیل کړئ',
                    'shopping.liveCart': 'ژوندی کارټ',
                    'shopping.scannedItems': 'سکین شوي توکي',
                    'shopping.totalItems': 'توکي',
                    'shopping.totalAmount': 'ټول',
                    'shopping.clearCart': 'کارټ پاک کړئ',
                    'shopping.proceedCheckout': 'چیک آوټ ته لاړشئ',
                    'shopping.emptyCart': 'هیڅ توکی سکین نه شوی',
                    
                    // Checkout Page
                    'checkout.title': 'کارټیفای چیک آوټ',
                    'checkout.orderSummary': 'د امر لنډیز',
                    'checkout.subtotal': 'فرعي ټول',
                    'checkout.deliveryFee': 'د تحویلي فیس',
                    'checkout.tax': 'مالیه (13%)',
                    'checkout.totalAmount': 'ټوله پیسې',
                    'checkout.customerInfo': 'د پیرودونکي معلومات',
                    'checkout.fullName': 'بشپړ نوم',
                    'checkout.phone': 'د تلیفون شمیره',
                    'checkout.email': 'ایمیل آدرس',
                    'checkout.address': 'د تحویلی پته',
                    'checkout.city': 'ښار',
                    'checkout.notes': 'د امر یادښتونه',
                    'checkout.payNow': 'اوس تادیه کړئ'
                }
            }
        };
        
        this.initialize();
    }
    
    initialize() {
        // Load saved language
        const savedLang = localStorage.getItem('cartify_language');
        if (savedLang && this.languages[savedLang]) {
            this.currentLang = savedLang;
        }
        
        // Initialize existing dropdown
        this.initExistingDropdown();
        
        // Apply language
        this.applyLanguage();
    }
    
    initExistingDropdown() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (!languageBtn || !languageDropdown) {
            console.error('Language selector elements not found');
            return;
        }
        
        // Update button text
        this.updateButtonText();
        
        // Update dropdown options
        this.updateDropdownOptions();
        
        // Add event listeners
        this.addDropdownListeners();
    }
    
    updateButtonText() {
        const languageBtn = document.getElementById('languageBtn');
        if (languageBtn) {
            const span = languageBtn.querySelector('span');
            if (span) {
                span.textContent = this.currentLang.toUpperCase();
            }
        }
    }
    
    updateDropdownOptions() {
        const languageDropdown = document.getElementById('languageDropdown');
        if (!languageDropdown) return;
        
        // Map your existing codes to our language codes
        const codeMap = {
            'en': 'en',
            'es': 'ur',  // es is actually Urdu in your HTML
            'fr': 'sd',  // fr is actually Sindhi
            'de': 'ps'   // de is actually Pashto
        };
        
        // Update each option
        const options = languageDropdown.querySelectorAll('.language-option');
        options.forEach(option => {
            const oldCode = option.dataset.lang;
            const newCode = codeMap[oldCode];
            
            if (newCode) {
                // Remove active class from all
                option.classList.remove('active');
                
                // Add active class to current language
                if (newCode === this.currentLang) {
                    option.classList.add('active');
                    
                    // Update check icon
                    let checkIcon = option.querySelector('i.fa-check');
                    if (!checkIcon) {
                        checkIcon = document.createElement('i');
                        checkIcon.className = 'fas fa-check';
                        option.prepend(checkIcon);
                    }
                } else {
                    // Remove check icon
                    const checkIcon = option.querySelector('i.fa-check');
                    if (checkIcon) {
                        checkIcon.remove();
                    }
                }
                
                // Update option text based on language
                const langName = this.languages[newCode]?.name || oldCode;
                const textNode = Array.from(option.childNodes).find(node => 
                    node.nodeType === Node.TEXT_NODE && node.textContent.trim()
                );
                
                if (textNode) {
                    textNode.textContent = ` ${langName}`;
                } else {
                    // If no text node, add one
                    option.appendChild(document.createTextNode(` ${langName}`));
                }
            }
        });
    }
    
    addDropdownListeners() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (!languageBtn || !languageDropdown) return;
        
        // Toggle dropdown
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
        
        // Handle option selection
        const options = languageDropdown.querySelectorAll('.language-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Map your old codes to our language codes
                const codeMap = {
                    'en': 'en',
                    'es': 'ur',
                    'fr': 'sd',
                    'de': 'ps'
                };
                
                const oldCode = option.dataset.lang;
                const newCode = codeMap[oldCode];
                
                if (newCode && newCode !== this.currentLang) {
                    this.changeLanguage(newCode);
                }
                
                languageDropdown.classList.remove('show');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                languageDropdown.classList.remove('show');
            }
        });
    }
    
    changeLanguage(langCode) {
        if (this.languages[langCode] && this.currentLang !== langCode) {
            this.currentLang = langCode;
            localStorage.setItem('cartify_language', langCode);
            
            // Update UI
            this.updateButtonText();
            this.updateDropdownOptions();
            
            // Apply language changes
            this.applyLanguage();
            
            // Show notification
            this.showNotification(`Language changed to ${this.languages[langCode].name}`);
        }
    }
    
    applyLanguage() {
        const lang = this.languages[this.currentLang];
        
        // Update HTML direction and language
        document.documentElement.dir = lang.dir;
        document.documentElement.lang = this.currentLang;
        
        // Apply RTL styles if needed
        this.applyRTLStyles();
        
        // Apply translations
        this.translatePage();
    }
    
    applyRTLStyles() {
        const isRTL = this.languages[this.currentLang].dir === 'rtl';
        
        // Remove existing RTL styles
        const existingStyle = document.getElementById('rtl-styles');
        if (existingStyle) existingStyle.remove();
        
        if (isRTL) {
            const style = document.createElement('style');
            style.id = 'rtl-styles';
            style.textContent = `
                /* RTL Layout */
                body {
                    text-align: right;
                    direction: rtl;
                }
                
                /* Navigation */
                .nav-menu {
                    padding-right: 0;
                }
                
                .nav-item {
                    margin-left: 10px;
                    margin-right: 0;
                }
                
                /* Buttons */
                .btn i {
                    margin-right: 0;
                    margin-left: 5px;
                }
                
                /* Inputs */
                input, textarea, select {
                    text-align: right;
                }
                
                /* Flex containers */
                .d-flex {
                    flex-direction: row-reverse;
                }
                
                /* Margins */
                .me-2, .me-3, .me-4 {
                    margin-left: 0.5rem !important;
                    margin-right: 0 !important;
                }
                
                .ms-2, .ms-3, .ms-4 {
                    margin-right: 0.5rem !important;
                    margin-left: 0 !important;
                }
                
                /* Text alignment */
                .text-start { text-align: right !important; }
                .text-end { text-align: left !important; }
                
                /* Shopping page specific */
                .scanner-section {
                    direction: ltr; /* Keep scanner LTR */
                }
                
                .cart-section {
                    text-align: right;
                }
                
                .order-item {
                    flex-direction: row-reverse;
                }
                
                .item-details {
                    text-align: right;
                }
                
                /* Checkout page specific */
                .checkout-header {
                    flex-direction: row-reverse;
                }
                
                .checkout-steps {
                    flex-direction: row-reverse;
                }
                
                .step {
                    flex-direction: row-reverse;
                }
                
                .order-summary, .payment-section {
                    text-align: right;
                }
                
                .total-row, .summary-row {
                    flex-direction: row-reverse;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    translatePage() {
        const lang = this.languages[this.currentLang];
        
        // Apply translations to elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.dataset.i18n;
            if (lang.translations[key]) {
                this.applyTranslation(element, lang.translations[key]);
            }
        });
        
        // Auto translate common elements
        this.autoTranslate();
    }
    
    applyTranslation(element, text) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    }
    
    autoTranslate() {
        const lang = this.languages[this.currentLang];
        
        // Auto translate based on text content
        this.translateByTextContent('Home', 'nav.home');
        this.translateByTextContent('Start Shopping', 'nav.startShopping');
        this.translateByTextContent('Products', 'nav.products');
        this.translateByTextContent('Live Billing', 'nav.liveBilling');
        this.translateByTextContent('Scanner', 'nav.scanner');
        this.translateByTextContent('Checkout', 'nav.checkout');
        
        // Shopping page translations
        this.translateByTextContent('Smart Shopping Scanner', 'shopping.title');
        this.translateByTextContent('Scan products to add them to your cart instantly', 'shopping.subtitle');
        this.translateByTextContent('Start Scanner', 'shopping.startScanner');
        this.translateByTextContent('Live Cart', 'shopping.liveCart');
        this.translateByTextContent('Scanned Items', 'shopping.scannedItems');
        this.translateByTextContent('Items', 'shopping.totalItems');
        this.translateByTextContent('Total', 'shopping.totalAmount');
        this.translateByTextContent('Clear Cart', 'shopping.clearCart');
        this.translateByTextContent('Proceed to Checkout', 'shopping.proceedCheckout');
        this.translateByTextContent('No items scanned yet', 'shopping.emptyCart');
        
        // Checkout page translations
        this.translateByTextContent('Cartify Checkout', 'checkout.title');
        this.translateByTextContent('Order Summary', 'checkout.orderSummary');
        this.translateByTextContent('Subtotal', 'checkout.subtotal');
        this.translateByTextContent('Delivery Fee', 'checkout.deliveryFee');
        this.translateByTextContent('Tax (13%)', 'checkout.tax');
        this.translateByTextContent('Total Amount', 'checkout.totalAmount');
        this.translateByTextContent('Customer Information', 'checkout.customerInfo');
        this.translateByTextContent('Full Name', 'checkout.fullName');
        this.translateByTextContent('Phone Number', 'checkout.phone');
        this.translateByTextContent('Email Address', 'checkout.email');
        this.translateByTextContent('Delivery Address', 'checkout.address');
        this.translateByTextContent('City', 'checkout.city');
        this.translateByTextContent('Order Notes', 'checkout.notes');
        this.translateByTextContent('Pay Now', 'checkout.payNow');
    }
    
    translateByTextContent(text, translationKey) {
        const lang = this.languages[this.currentLang];
        if (!lang.translations[translationKey]) return;
        
        // Find all elements with this text
        const xpath = `//*[text()='${text}' or text()='${text} ' or text()=' ${text}' or normalize-space(text())='${text}']`;
        const result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        
        for (let i = 0; i < result.snapshotLength; i++) {
            const element = result.snapshotItem(i);
            if (element && !element.dataset.i18n) {
                element.textContent = lang.translations[translationKey];
            }
        }
        
        // Also check for partial matches (for placeholders, etc)
        document.querySelectorAll('*').forEach(element => {
            if (element.textContent && element.textContent.includes(text) && !element.dataset.i18n) {
                element.textContent = element.textContent.replace(text, lang.translations[translationKey]);
            }
        });
    }
    
    showNotification(message) {
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'lang-notification';
        notification.innerHTML = `
            <i class="fas fa-language"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .lang-notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #FF6B35;
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 9999;
                animation: slideIn 0.3s ease;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageManager = new LanguageManager();
    
    // Add data-i18n attributes to key elements
    setTimeout(() => {
        // Add data-i18n to navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            const text = link.textContent.trim();
            if (text) {
                link.dataset.i18n = `nav.${text.toLowerCase().replace(/\s+/g, '')}`;
            }
        });
        
        // Add data-i18n to buttons
        document.querySelectorAll('button').forEach(btn => {
            const text = btn.textContent.trim();
            if (text && text.length < 30) {
                btn.dataset.i18n = `button.${text.toLowerCase().replace(/\s+/g, '')}`;
            }
        });
        
        // Add data-i18n to headings
        document.querySelectorAll('h1, h2, h3, h4').forEach(heading => {
            const text = heading.textContent.trim();
            if (text) {
                heading.dataset.i18n = `heading.${text.toLowerCase().replace(/\s+/g, '')}`;
            }
        });
        
        // Apply translations
        window.languageManager.translatePage();
    }, 100);
});