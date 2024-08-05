document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    let cart = [];

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            cart.push(index);
            cartCount.textContent = cart.length;
            alert(`Product ${index + 1} added to cart!`);
        });
    });
});



