// ------------------ Supabase Setup ------------------
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://YOUR_SUPABASE_URL' // replace with your Supabase URL
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY'       // replace with your anon key
const supabase = createClient(supabaseUrl, supabaseKey)

// ------------------ Cart Variables ------------------
let cart = []
let subtotal = 0

// ------------------ Helper Functions ------------------
function updateCartUI(product) {
    const cartItemsDiv = document.getElementById('cartItems')
    const scannedProductDiv = document.getElementById('scannedProduct')

    // Update scanned product with Rs formatting
    scannedProductDiv.innerHTML = `
        <div class="product-info">
            <h5>${product.name}</h5>
            <p>Price: Rs ${product.price.toLocaleString('en-PK')}</p>
        </div>
    `

    // Add to cart array
    cart.push(product)

    // Update cart items
    let cartHtml = ''
    cart.forEach((item, index) => {
        cartHtml += `<div class="cart-item">
                        <span>${item.name}</span>
                        <span>Rs ${item.price.toLocaleString('en-PK')}</span>
                     </div>`
    })
    cartItemsDiv.innerHTML = cartHtml

    // Update totals
    subtotal = cart.reduce((acc, item) => acc + item.price, 0)
    const tax = subtotal * 0.13
    const total = subtotal + tax

    document.getElementById('subtotal').innerText = `Rs ${subtotal.toLocaleString('en-PK')}`
    document.getElementById('tax').innerText = `Rs ${tax.toFixed(2).toLocaleString('en-PK')}`
    document.getElementById('totalAmount').innerText = `Rs ${total.toFixed(2).toLocaleString('en-PK')}`
}

// ------------------ Fetch Product from Supabase ------------------
async function fetchProduct(barcode) {
    const { data, error } = await supabase
        .from('products')
        .select('name, price')
        .eq('barcode', barcode)
        .single()

    if (error || !data) {
        alert('Product not found in database')
        return null
    }
    return data
}

// ------------------ Initialize Quagga ------------------
function startScanner() {
    Quagga.init({
        inputStream: {
            type: "LiveStream",
            target: document.querySelector('#cameraFeed'),
            constraints: { facingMode: "environment" } // back camera
        },
        decoder: { readers: ["ean_reader", "code_128_reader"] }
    }, function(err) {
        if (err) { console.log(err); return; }
        Quagga.start();
    });

    Quagga.onDetected(async function(result) {
        let code = result.codeResult.code

        // Fetch product from Supabase
        let product = await fetchProduct(code)
        if (product) updateCartUI(product)

        Quagga.stop() // stop after successful scan
    });
}

// ------------------ Event Listeners ------------------
document.getElementById('startScanner').addEventListener('click', startScanner)

document.getElementById('clearCart').addEventListener('click', () => {
    cart = []
    subtotal = 0
    document.getElementById('cartItems').innerHTML = `
        <div class="empty-cart">
            <i class="fas fa-cart-arrow-down fa-2x"></i>
            <p>No items scanned yet</p>
        </div>
    `
    document.getElementById('scannedProduct').innerHTML = `
        <div class="placeholder">
            <i class="fas fa-shopping-basket fa-3x"></i>
            <p>Scan a product to see details here</p>
        </div>
    `
    document.getElementById('subtotal').innerText = 'Rs 0'
    document.getElementById('tax').innerText = 'Rs 0'
    document.getElementById('totalAmount').innerText = 'Rs 0'
})
