// FINAL WORKING LANGUAGE MANAGER
class LanguageManager {
    constructor() {
        this.translations = {
            'en': {
                'nav.home': 'Home',
                'nav.startShopping': 'Start Shopping',
                'nav.products': 'Products',
                'nav.liveBilling': 'Live Billing',
                'shopping.title': 'Ready for Smart Shopping?',
                'shopping.subtitle': 'Cartify is a smart shopping system using barcode scanning and real-time billing. Experience the future of shopping with our intelligent trolley system.',
                'trolley.features': 'Smart Features',
                'feature.barcode': 'Barcode Scanning',
                'feature.billing': 'Real-Time Billing',
                'feature.obstacle': 'Obstacle Detection',
                'feature.mobile': 'Mobile Integration',
                'section.howItWorks': 'How Cartify Works',
                'section.experience': 'Experience seamless shopping with our intelligent system',
                'feature.scan': 'Scan Products',
                'feature.scanDesc': 'Simply scan barcodes using the built-in scanner. Items are automatically added to your cart.',
                'step.1': 'Step 1',
                'feature.billingDesc': 'Watch your bill update instantly as you add items. No surprises at checkout!',
                'step.2': 'Step 2',
                'feature.navigation': 'Smart Navigation',
                'feature.navigationDesc': 'The trolley detects obstacles and helps navigate through crowded aisles safely.',
                'step.3': 'Step 3',
                'feature.checkout': 'Quick Checkout',
                'feature.checkoutDesc': 'Skip the queues! Pay directly from your cart and receive a digital receipt.',
                'step.4': 'Step 4',
                'section.popularProducts': 'Popular Products',
                'section.startJourney': 'Start your smart shopping journey with these popular items',
                'footer.description': 'Smart Shopping Trolley System<br>Final Year Project',
                'footer.quickLinks': 'Quick Links',
                'footer.features': 'Features',
                'footer.contact': 'Contact',
                'footer.address': 'Smart Shopping<br>University Campus',
                'footer.copyright': '© 2024 Cartify Smart Shopping Trolley. All rights reserved.',
                'footer.project': 'Final Year Project - Department of Information Technology',
                'greeting.goodMorning': 'Good Morning',
                'greeting.goodAfternoon': 'Good Afternoon',
                'greeting.goodEvening': 'Good Evening'
            },
            'es': {  // Urdu
                'nav.home': 'ہوم',
                'nav.startShopping': 'خریداری شروع کریں',
                'nav.products': 'مصنوعات',
                'nav.liveBilling': 'لائیو بلنگ',
                'shopping.title': 'سمارٹ شاپنگ کے لیے تیار؟',
                'shopping.subtitle': 'کارٹیفائی ایک سمارٹ شاپنگ سسٹم ہے جو بارکوڈ اسکیننگ اور ریئل ٹائم بلنگ استعمال کرتا ہے۔ ہمارے ذہین ٹرالی سسٹم کے ساتھ شاپنگ کا مستقبل تجربہ کریں۔',
                'trolley.features': 'خصوصیات',
                'feature.barcode': 'بارکوڈ اسکیننگ',
                'feature.billing': 'ریئل ٹائم بلنگ',
                'feature.obstacle': 'رکاوٹ کا پتہ لگانا',
                'feature.mobile': 'موبائل انٹیگریشن',
                'section.howItWorks': 'کارٹیفائی کیسے کام کرتا ہے',
                'section.experience': 'ہمارے ذہین سسٹم کے ساتھ ہموار شاپنگ کا تجربہ کریں',
                'feature.scan': 'مصنوعات اسکین کریں',
                'feature.scanDesc': 'بلٹ ان اسکینر کا استعمال کرتے ہوئے بارکوڈ اسکین کریں۔ اشیاء خود بخود آپ کی کارٹ میں شامل ہو جائیں گی۔',
                'step.1': 'مرحلہ 1',
                'feature.billingDesc': 'اشیاء شامل کرتے ہی آپ کا بل فوری طور پر اپ ڈیٹ ہوتا دیکھیں۔ چیک آؤٹ پر کوئی حیرانی نہیں!',
                'step.2': 'مرحلہ 2',
                'feature.navigation': 'ذہین نیویگیشن',
                'feature.navigationDesc': 'ٹرالی رکاوٹوں کا پتہ لگاتی ہے اور ہجوم والے راستوں میں محفوظ طریقے سے تشریف لے جانے میں مدد کرتی ہے۔',
                'step.3': 'مرحلہ 3',
                'feature.checkout': 'فوری چیک آؤٹ',
                'feature.checkoutDesc': 'قطاروں کو چھوڑیں! براہ راست اپنی کارٹ سے ادائیگی کریں اور ڈیجیٹل رسید حاصل کریں۔',
                'step.4': 'مرحلہ 4',
                'section.popularProducts': 'مقبول مصنوعات',
                'section.startJourney': 'ان مشہور اشیاء کے ساتھ اپنی سمارٹ شاپنگ کا سفر شروع کریں',
                'footer.description': 'سمارٹ شاپنگ ٹرالی سسٹم<br>فائنل ایئر پراجیکٹ',
                'footer.quickLinks': 'فوری روابط',
                'footer.features': 'خصوصیات',
                'footer.contact': 'رابطہ کریں',
                'footer.address': 'سمارٹ شاپنگ<br>یونیورسٹی کیمپس',
                'footer.copyright': '© 2024 کارٹیفائی سمارٹ شاپنگ ٹرالی۔ جملہ حقوق محفوظ ہیں۔',
                'footer.project': 'فائنل ایئر پراجیکٹ - شعبہ انفارمیشن ٹیکنالوجی',
                'greeting.goodMorning': 'صبح بخیر',
                'greeting.goodAfternoon': 'دوپہر بخیر',
                'greeting.goodEvening': 'شام بخیر'
            },
            'fr': {  // Sindhi
                'nav.home': 'گھر',
                'nav.startShopping': 'خريداري شروع ڪريو',
                'nav.products': 'پيداوار',
                'nav.liveBilling': 'لائيڪ بلنگ',
                'shopping.title': 'سمارٽ شاپنگ لاءِ تيار؟',
                'shopping.subtitle': 'ڪارٽيفاءِ ھڪ سمارٽ شاپنگ سسٽم آھي جيڪو بارڪوڊ اسڪيننگ ۽ ريئل ٽائم بلنگ استعمال ڪري ٿو. اسانجي ذھين ٽرالي سسٽم سان شاپنگ جو مستقبل تجربو ڪريو.',
                'trolley.features': 'خصوصيتون',
                'feature.barcode': 'بارڪوڊ اسڪيننگ',
                'feature.billing': 'ريئل ٽائم بلنگ',
                'feature.obstacle': 'رڪاوٽ جي ڳولا',
                'feature.mobile': 'موبائل انٽيگريشن',
                'section.howItWorks': 'ڪارٽيفاءِ ڪيئن ڪم ڪري ٿو',
                'section.experience': 'اسانجي ذھين سسٽم سان آسان شاپنگ جو تجربو ڪريو',
                'feature.scan': 'پيداوار اسڪين ڪريو',
                'feature.scanDesc': 'بلٽ ان اسڪينر استعمال ڪندي بارڪوڊ اسڪين ڪريو. شيون خود بخود توهانجي ڪارٽ ۾ شامل ٿي وينديون.',
                'step.1': 'قدم 1',
                'feature.billingDesc': 'شيون شامل ڪرڻ سان توهانجو بل فوري طور اپڊيٽ ٿيندو ڏسو. چيڪ آئوٽ تي ڪا به حيراني ناهي!',
                'step.2': 'قدم 2',
                'feature.navigation': 'ذھين نيويگيشن',
                'feature.navigationDesc': 'ٽرالي رڪاوٽن جي ڳولا ڪري ٿي ۽ گھڻي ھجوم وارن رستن ۾ محفوظ طريقي سان ھلڻ ۾ مدد ڪري ٿي.',
                'step.3': 'قدم 3',
                'feature.checkout': 'فوري چيڪ آئوٽ',
                'feature.checkoutDesc': 'قطارن کي ڇڏي ڏيو! سڌو سنئون پنھنجي ڪارٽ مان ادائيگي ڪريو ۽ ڊجيٽل رسيد حاصل ڪريو.',
                'step.4': 'قدم 4',
                'section.popularProducts': 'مقبول پيداوار',
                'section.startJourney': 'انھن مشهور شين سان پنھنجو سمارٽ شاپنگ سفر شروع ڪريو',
                'footer.description': 'سمارٽ شاپنگ ٽرالي سسٽم<br>فائنل ائر پراجيڪٽ',
                'footer.quickLinks': 'فوري لنڪ',
                'footer.features': 'خصوصيتون',
                'footer.contact': 'رابطو',
                'footer.address': 'سمارٽ شاپنگ<br>يونيورسٽي ڪيمپس',
                'footer.copyright': '© 2024 ڪارٽيفاءِ سمارٽ شاپنگ ٽرالي. سڀ حق محفوظ آھن.',
                'footer.project': 'فائنل ائر پراجيڪٽ - شعبو انفارميشن ٽيڪنالاجي',
                'greeting.goodMorning': 'صبح جو سلام',
                'greeting.goodAfternoon': 'منجھند جو سلام',
                'greeting.goodEvening': 'شام جو سلام'
            },
            'de': {  // Pashto
                'nav.home': 'کور',
                'nav.startShopping': 'پیرود پیل کړئ',
                'nav.products': 'توکي',
                'nav.liveBilling': 'ژوندی بیلنگ',
                'shopping.title': 'سمارټ شاپنگ لپاره چمتو یاست؟',
                'shopping.subtitle': 'کارټیفای یو سمارټ شاپنگ سیسټم دی چې د بارکوډ سکین کولو او ریښتیني وخت بلینګ څخه کار اخلي. زموږ د هوښیارټرالي سیسټم سره د پیرود راتلونکی تجربه کړئ.',
                'trolley.features': 'ځانګړتیاوې',
                'feature.barcode': 'بارکوډ سکین کول',
                'feature.billing': 'ریښتیني وخت بلینګ',
                'feature.obstacle': 'خنډ موندنه',
                'feature.mobile': 'موبایل ادغام',
                'section.howItWorks': 'کارټیفای څنګه کار کوي',
                'section.experience': 'زموږ د هوښیار سیسټم سره بې سیمه پیرود تجربه کړئ',
                'feature.scan': 'توکي سکین کړئ',
                'feature.scanDesc': 'د جوړ شوي سکینر په کارولو سره بارکوډ سکین کړئ. توکي په اتوماتيک ډول ستاسو کارټ کې اضافه کیږي.',
                'step.1': 'لومړی ګام',
                'feature.billingDesc': 'لکه څنګه چې تاسو توکي اضافه کوئ سمدلاسه خپل بل وګورئ. په چیک آوټ کې حیرانتیا نشته!',
                'step.2': 'دوهم ګام',
                'feature.navigation': 'هوښیار نیویگیشن',
                'feature.navigationDesc': 'ټرالی خنډونه کشف کوي او د ګڼې ګوڼې لارو کې په خوندي ډول تګ راتګ کې مرسته کوي.',
                'step.3': 'درېیم ګام',
                'feature.checkout': 'چټک چیک آوټ',
                'feature.checkoutDesc': 'قطارونه پریږدئ! مستقیم له خپل کارټ څخه تادیه وکړئ او ډیجیټل رسید ترلاسه کړئ.',
                'step.4': 'څلورم ګام',
                'section.popularProducts': 'مشهور توکي',
                'section.startJourney': 'د دې مشهورو توکو سره خپل سمارټ پیرود سفر پیل کړئ',
                'footer.description': 'سمارټ شاپنگ ټرالی سیسټم<br>وروستی کال پروژه',
                'footer.quickLinks': 'چټک لینکونه',
                'footer.features': 'ځانګړتیاوې',
                'footer.contact': 'اړیکه',
                'footer.address': 'سمارټ شاپنگ<br>پوهنتون کیمپس',
                'footer.copyright': '© 2024 کارټیفای سمارټ شاپنگ ټرالی. ټول حقونه خوندي دي.',
                'footer.project': 'وروستی کال پروژه - د معلوماتي ټیکنالوژۍ څانګه',
                'greeting.goodMorning': 'سحر مو پخیر',
                'greeting.goodAfternoon': 'ماسپښین مو پخیر',
                'greeting.goodEvening': 'ماښام مو پخیر'
            }
        };
        
        this.currentLang = localStorage.getItem('cartify_language') || 'en';
        this.init();
    }
    
    init() {
        this.applyTranslations();
        this.setupEventListeners();
        this.updateButtonText();
        this.setDirection();
    }
    
    setupEventListeners() {
        const langBtn = document.getElementById('languageBtn');
        const options = document.querySelectorAll('.language-option');
        
        if (langBtn) {
            langBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dropdown = document.getElementById('languageDropdown');
                dropdown.classList.toggle('show');
            });
        }
        
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = opt.dataset.lang; // 'en', 'es', 'fr', 'de'
                this.changeLanguage(lang);
                document.getElementById('languageDropdown').classList.remove('show');
            });
        });
        
        document.addEventListener('click', () => {
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown) dropdown.classList.remove('show');
        });
    }
    
    changeLanguage(langCode) {
        if (!this.translations[langCode]) return;
        this.currentLang = langCode;
        localStorage.setItem('cartify_language', langCode);
        this.applyTranslations();
        this.updateButtonText();
        this.setDirection();
        this.updateWelcomeTime();
        // Show notification
        const msg = langCode === 'en' ? 'English selected' : 
                    langCode === 'es' ? 'Urdu selected' :
                    langCode === 'fr' ? 'Sindhi selected' : 'Pashto selected';
        this.showNotification(msg);
    }
    
    applyTranslations() {
        const t = this.translations[this.currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });
    }
    
    updateButtonText() {
        const btnSpan = document.querySelector('#languageBtn span');
        if (btnSpan) {
            let code = this.currentLang.toUpperCase();
            if (code === 'ES') code = 'UR';
            else if (code === 'FR') code = 'SD';
            else if (code === 'DE') code = 'PS';
            btnSpan.textContent = code;
        }
        // Update active class on dropdown
        document.querySelectorAll('.language-option').forEach(opt => {
            if (opt.dataset.lang === this.currentLang) {
                opt.classList.add('active');
                const checkIcon = opt.querySelector('.fa-check');
                if (checkIcon) checkIcon.style.opacity = '1';
            } else {
                opt.classList.remove('active');
                const checkIcon = opt.querySelector('.fa-check');
                if (checkIcon) checkIcon.style.opacity = '0';
            }
        });
    }
    
    setDirection() {
        const isRTL = (this.currentLang === 'es' || this.currentLang === 'fr' || this.currentLang === 'de');
        document.body.style.direction = isRTL ? 'rtl' : 'ltr';
        document.body.style.textAlign = isRTL ? 'right' : 'left';
    }
    
    updateWelcomeTime() {
        const welcomeEl = document.getElementById('welcomeTime');
        if (!welcomeEl) return;
        const now = new Date();
        const hours = now.getHours();
        let greeting = '';
        if (hours < 12) greeting = this.translations[this.currentLang]['greeting.goodMorning'];
        else if (hours < 17) greeting = this.translations[this.currentLang]['greeting.goodAfternoon'];
        else greeting = this.translations[this.currentLang]['greeting.goodEvening'];
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();
        welcomeEl.textContent = `${greeting} • ${timeString} • ${dateString}`;
    }
    
    showNotification(msg) {
        const div = document.createElement('div');
        div.textContent = msg;
        div.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#FF6B35; color:white; padding:10px 20px; border-radius:8px; z-index:9999;';
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
});