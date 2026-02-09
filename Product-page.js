// products.js - Cartify Products Page
document.addEventListener('DOMContentLoaded', function() {
    // Product data with real images and Pakistani Rupees prices
    const products = [
        // Existing Products
        {
            id: 1,
            name: " Apples",
            category: "Fruits",
            price: 250,
            originalPrice: 300,
            quality: 4.5,
            description: " Juicy and naurally sweet grab teh freshest pic for your daily dose of health",
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop",
            badge: "organic"
        },
        {
            id: 2,
            name: "Whole Wheat Bread",
            category: "Bakery",
            price: 120,
            originalPrice: 150,
            quality: 4.2,
            description: "Soft wholesome and fiber sich the perfect healthy choice for your family's  ",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
            badge: "new"
        },
        {
            id: 3,
            name: "Organic Milk",
            category: "Dairy",
            price: 180,
            originalPrice: 220,
            quality: 4.7,
            description: "Farm fresh your daily of calcium for stronger bones and a brighter day ",
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
            badge: "organic"
        },
        {
            id: 4,
            name: " Eggs",
            category: "Dairy",
            price: 320,
            originalPrice: 380,
            quality: 4.8,
            description: "Fresh from the farm to your kitchen packed with pure protein for your health",
            image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
            badge: "popular"
        },
        
         {
            id: 5,
            name: "Fresh Strawberries",
            category: "Fruits",
            price: 450,
            originalPrice: 550,
            quality: 4.3,
            description: "Sweet and juicy with flavor the perfect berry treat to brighten up your snalks and desserts ",
            image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
            badge: "sale"
        },
      
        {
            id: 6,
            name: "Fresh Avocados",
            category: "Vegetables",
            price: 280,
            originalPrice: 350,
            quality: 4.4,
            description: "Heart healthy the ultimate Superfood to level up your toast and salads",
            image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop",
            badge: "popular"
        },
        {
            id: 7,
            name: "Orange Juice",
            category: "Beverages",
            price: 320,
            originalPrice: 380,
            quality: 4.5,
            description: "100% pure orange juice loaded with vitamin C",
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
            badge: "sale"
        },
        {
            id: 8,
            name: "Whole Chicken",
            category: "Meat",
            price: 750,
            originalPrice: 850,
            quality: 4.7,
            description: "Fresh whole chicken  te perfect high protein choise for your favorite meals",
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
            badge: "sale"
        },
        {
            id:9,
            name: "Organic Spinach",
            category: "Vegetables",
            price: 120,
            originalPrice: 150,
            quality: 4.3,
            description: "Fresh organic spinach leaves, iron packed power up your health ",
            image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
            badge: "organic"
        },
        {
            id: 10,
            name: "Artisan Cheese",
            category: "Dairy",
            price: 650,
            originalPrice: 750,
            quality: 4.8,
            description: "Aged artisan cheese with rich flavor, elevate your snacks with a touch of gourment flavor",
            image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop",
            badge: "new"
        },
        {
            id: 11,
            name: "Fresh Bananas",
            category: "Fruits",
            price: 100,
            originalPrice: 130,
            quality: 4.4,
            description: "The perfect naturally wraped energy snack ",
            image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
            badge: "popular"
        },
        {
            id: 12,
            name: "Basmati Rice",
            category: "Grains",
            price: 220,
            originalPrice: 280,
            quality: 4.6,
            description: "Premium quality basmati rice, choice to make every meal a royal feast ",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
            badge: "popular"
        },
        
       
        {
            id: 13,
            name: "Fresh Tomatoes",
            category: "Vegetables",
            price: 80,
            originalPrice: 100,
            quality: 4.2,
            description: "Fresh red tomatoes, add a vibrant burst of flavour to your salads and sauces ",
            image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
            badge: "sale"
        },

        // Toothpaste (
        {
            id: 14,
            name: "Sensodyne Sensitivity",
            category: "Personal Care",
            price: 450,
            originalPrice: 500,
            quality: 4.7,
            description: "For sensitive teeth protection",
            image: "https://tse1.mm.bing.net/th/id/OIP.ocxWKdoLl_pWz-zPeXIZiAHaHa?w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "new"
        },
        {
            id: 15,
            name: "CloseUp Red Hot",
            category: "Personal Care",
            price: 280,
            originalPrice: 320,
            quality: 4.4,
            description: "Fresh breath with cooling crystals",
            image: "https://tse2.mm.bing.net/th/id/OIP.q2y-CmtA3U-NjuGNUdXdPgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "sale"
        },

        // Snacks
        {
            id: 16,
            name: "Lays Classic Chips",
            category: "Snacks",
            price: 100,
            originalPrice: 120,
            quality: 4.5,
            description: "Classic salted potato chips",
            image: "https://tse2.mm.bing.net/th/id/OIP.laa1-H5Ge6dpu_Ir-UKeRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "popular"
        },
        {
            id: 17,
            name: "Kurkure Masala Munch",
            category: "Snacks",
            price: 80,
            originalPrice: 100,
            quality: 4.3,
            description: "Spicy corn snacks",
            image: "https://tse4.mm.bing.net/th/id/OIP.aOeronuURFcJCCCxKMWqvAHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "new"
        },
        {
            id: 18,
            name: "Cadbury Dairy Milk",
            category: "Snacks",
            price: 180,
            originalPrice: 220,
            quality: 4.7,
            description: "Creamy milk chocolate bar",
            image: "https://dgroce.com/Company/Uploads/Products/11582/101734/1.jpg",
            badge: "new"
        },

        // Soap 
        {
            id: 19,
            name: "Dettol Soap",
            category: "Personal Care",
            price: 120,
            originalPrice: 150,
            quality: 4.6,
            description: "Antibacterial protection soap",
            image: "https://tse4.mm.bing.net/th/id/OIP.MyhgtO3LjL3Cpas_K74vRgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "popular"
        },
        {
            id: 20,
            name: "Lux Velvet Touch",
            category: "Personal Care",
            price: 95,
            originalPrice: 120,
            quality: 4.4,
            description: "Silky smooth beauty soap",
            image: "https://arysahulatbazar.ae/wp-content/uploads/2022/11/a9737480d0-Lux-Velvet-Jasmine-almond_1024x_11zon.jpg",
            badge: "new"
        },
      
        // Sauces (2 items) 
        {
            id: 21,
            name: "National Tomato Ketchup",
            category: "Cooking",
            price: 180,
            originalPrice: 220,
            quality: 4.5,
            description: "Rich tomato ketchup",
            image: "https://tse2.mm.bing.net/th/id/OIP.Mz8_C70mliSIAx7F8VKq6QHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1.5&o=7&rm=3",
            badge: "popular"
        },
        {
            id: 22,
            name: "Shan Tikka Masala",
            category: "Cooking",
            price: 120,
            originalPrice: 150,
            quality: 4.6,
            description: "Spicy tikka masala sauce",
            image: "https://www.shanfoods.com/wp-content/uploads/2016/10/Chicken-Tikka-2.png",
            badge: "new"
        },

        // Biscuits (2 items) - CORRECTED IMAGES
        {
            id: 23,
            name: "Peek Freans Family",
            category: "Snacks",
            price: 220,
            originalPrice: 250,
            quality: 4.5,
            description: "Assorted cream biscuits",
            image: "https://tse1.mm.bing.net/th/id/OIP.m0CojrmRkqEM-QMG2Jm7WAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "popular"
        },
     

        // Diapers 
    
        {
            id: 24,
            name: "Molfix Premium",
            category: "Baby Care",
            price: 950,
            originalPrice: 1100,
            quality: 4.6,
            description: "Premium quality baby diapers",
            image: "https://tse2.mm.bing.net/th/id/OIP.90OJfOKnI-2I0FNs6483kAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "sale"
        },

        // 10 More Items - CORRECTED IMAGES
        {
            id: 25,
            name: "Nescafe Classic Coffee",
            category: "Beverages",
            price: 450,
            originalPrice: 500,
            quality: 4.7,
            description: "Instant coffee granules",
            image: "https://tse4.mm.bing.net/th/id/OIP.iq6c1qIbbwWHXIPhf-eWLgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "popular"
        },
        {
            id: 26,
            name: "Tapal Danedar Tea",
            category: "Beverages",
            price: 280,
            originalPrice: 320,
            quality: 4.6,
            description: "Strong loose tea leaves",
            image: "https://fazco.co/wp-content/uploads/2024/11/Tapal-Danedar-900g.jpg",
            badge: "new"
        },
        {
            id: 27,
            name: "Head & Shoulders Shampoo",
            category: "Personal Care",
            price: 550,
            originalPrice: 650,
            quality: 4.7,
            description: "Anti-dandruff shampoo",
            image: "https://tse3.mm.bing.net/th/id/OIP._yx1xas-sP__hLklpy0j6AAAAA?w=450&h=450&rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "popular"
        },
        {
            id: 28,
            name: "Vaseline Petroleum Jelly",
            category: "Personal Care",
            price: 200,
            originalPrice: 250,
            quality: 4.5,
            description: "Skin moisturizing jelly",
            image: "https://tse4.mm.bing.net/th/id/OIP.IOQMDRHtFbWEDg-77PcA0AHaE8?w=615&h=410&rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "sale"
        },
        {
            id: 29,
            name: "Knorr Chicken Cube",
            category: "Cooking",
            price: 45,
            originalPrice: 60,
            quality: 4.4,
            description: "Chicken flavor bouillon cubes",
            image: "https://zbga.shopsuki.ph/cdn/shop/files/4800888601025_800x.jpg?v=1714736499",
            badge: "popular"
        },
        {
            id: 30,
            name: "National Mayonnaise",
            category: "Cooking",
            price: 220,
            originalPrice: 280,
            quality: 4.3,
            description: "Creamy sandwich mayonnaise",
            image: "https://tse4.mm.bing.net/th/id/OIP.5J0ncixij3qIpmTqPPPdsQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "new"
        },
        {
            id: 31,
            name: "Surf Excel Detergent",
            category: "Cleaning",
            price: 320,
            originalPrice: 380,
            quality: 4.6,
            description: "Stain removal detergent",
            image: "https://tse2.mm.bing.net/th/id/OIP.JIpFaTh_bLzMG2d3CxBfoAHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "popular"
        },
        {
            id: 32,
            name: "Lifebuoy Handwash",
            category: "Personal Care",
            price: 180,
            originalPrice: 220,
            quality: 4.5,
            description: "Antibacterial hand wash",
            image: "https://tse2.mm.bing.net/th/id/OIP.MTRMut97aTm2PsCUt2WdAwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "sale"
        },
        {
            id: 33,
            name: "Bisconni Chocolate Chip",
            category: "Snacks",
            price: 150,
            originalPrice: 180,
            quality: 4.4,
            description: "Chocolate chip cookies",
            image: "https://www.dsmonline.pk/media/catalog/product/cache/cf9e9dcdf2f43be3d6b30b56d00bb544/b/i/bisconni_chocolate_chip_10s_packs.png",
            badge: "popular"
        },
        {
            id: 34,
            name: "Red Bull Energy Drink",
            category: "Beverages",
            price: 300,
            originalPrice: 350,
            quality: 4.5,
            description: "Energy boosting drink",
            image: "https://tse4.mm.bing.net/th/id/OIP.XR51tvgTH68RVTwY-AzWXwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            
            badge: "new"
        },

        
        {
            id: 35,
            name: "Kidney Beans (Lobiya) ",
            category: "Grains",
            price: 150,
            originalPrice: 180,
            quality: 4.5,
            description: "Premium quality kidney beans",
            image: "https://tse2.mm.bing.net/th/id/OIP.m_rEmUur2nyUe0EdJ36blAHaIK?rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "organic"
        },
        {
            id: 36,
            name: "Chickpeas (Chana)",
            category: "Grains",
            price: 120,
            originalPrice: 150,
            quality: 4.4,
            description: "Protein-rich chickpeas",
            image: "https://4.imimg.com/data4/NO/XE/MY-32772701/black-gram-dal-500x500.jpg",
            badge: "popular"
        },
      
    

        {
            id: 37,
            name: "Fresh Potatoes",
            category: "Vegetables",
            price: 60,
            originalPrice: 80,
            quality: 4.4,
            description: "Fresh local potatoes",
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
            badge: "popular"
        },
        
        {
            id: 38,
            name: "Fresh Onions",
            category: "Vegetables",
            price: 70,
            originalPrice: 90,
            quality: 4.3,
            description: "Fresh red onions",
            image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=400&h=300&fit=crop",
            badge: "popular"
        },
        {
            id: 39,
            name: "Green Bell Peppers",
            category: "Vegetables",
            price: 120,
            originalPrice: 150,
            quality: 4.5,
            description: "Fresh capsicum",
            image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop",
            badge: "organic"
        },
        {
            id: 40,
            name: "Fresh Cauliflower",
            category: "Vegetables",
            price: 110,
            originalPrice: 140,
            quality: 4.4,
            description: "Fresh white cauliflower",
            image: "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=400&h=300&fit=crop",
            badge: "sale"
        },

   
        {
            id: 41,
            name: "Fresh Mangoes",
            category: "Fruits",
            price: 300,
            originalPrice: 380,
            quality: 4.7,
            description: "Seasonal  mangoes",
            image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
            badge: "popular"
        },
        
       
        {
            id: 42,
            name: "Fresh Kiwis",
            category: "Fruits",
            price: 280,
            originalPrice: 330,
            quality: 4.5,
            description: "Vitamin C rich kiwis",
            image: "https://tse4.mm.bing.net/th/id/OIP.MiXuM9iEBaezrxo1wjd2GAHaE7?w=1380&h=918&rs=1&pid=ImgDetMain&o=7&rm=3",
            badge: "organic"
        }
    ];

    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const filterSelects = document.querySelectorAll('.filter-select');

    // Format price in Pakistani Rupees
    function formatPrice(price) {
        return `Rs ${price.toLocaleString('en-PK')}`;
    }

    // Generate star rating HTML
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

    // Get badge class
    function getBadgeClass(badge) {
        return `badge-${badge}`;
    }

    // Create product card HTML - REMOVED ADD TO CART BUTTON
    function createProductCard(product) {
        return `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="position-relative">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <span class="product-badge ${getBadgeClass(product.badge)}">${product.badge}</span>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-quality">
                        <span class="rating">${product.quality}/5</span>
                        <span class="stars">${generateStars(product.quality)}</span>
                    </div>
                    <div class="price-section">
                        <div>
                            <div class="price">${formatPrice(product.price)}</div>
                            ${product.originalPrice > product.price ? 
                                `<div class="original-price">${formatPrice(product.originalPrice)}</div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Render products to the grid
    function renderProducts(productsArray = products) {
        productsGrid.innerHTML = '';
        productsArray.forEach(product => {
            productsGrid.innerHTML += createProductCard(product);
        });
    }

    // Filter products based on search and category
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = filterSelects[0].value;
        
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                  product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'All Categories' || product.category === category;
            
            return matchesSearch && matchesCategory;
        });
    }

    // Sort products
    function sortProducts(productsArray, sortBy) {
        switch(sortBy) {
            case 'Price: Low to High':
                return [...productsArray].sort((a, b) => a.price - b.price);
            case 'Price: High to Low':
                return [...productsArray].sort((a, b) => b.price - a.price);
            case 'Highest Rated':
                return [...productsArray].sort((a, b) => b.quality - a.quality);
            default:
                return productsArray;
        }
    }

    // Event Listeners
    searchInput.addEventListener('input', function() {
        const filteredProducts = filterProducts();
        const sortBy = filterSelects[1].value;
        const sortedProducts = sortProducts(filteredProducts, sortBy);
        renderProducts(sortedProducts);
    });

    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            const filteredProducts = filterProducts();
            const sortBy = filterSelects[1].value;
            const sortedProducts = sortProducts(filteredProducts, sortBy);
            renderProducts(sortedProducts);
        });
    });

    // Global functions for product interaction
    window.viewProduct = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            alert(`Viewing: ${product.name}\nPrice: ${formatPrice(product.price)}\nCategory: ${product.category}\nRating: ${product.quality}/5`);
        }
    };

    // REMOVED addToCart function since button is removed

    // Initial render
    renderProducts();
});