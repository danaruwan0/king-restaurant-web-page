function submitComment(cardId) {
    const comment = document.getElementById(`comment-${cardId}`).value;
    alert(`Comment for ${cardId}: ${comment}`);
}

function orderNow(cardId) {
    const productName = document.querySelector(`#${cardId} .card-title`).textContent;
    const price = parseFloat(document.querySelector(`#${cardId} .card-price`).textContent.replace('Price: $', ''));
    const specialPrice = parseFloat(document.querySelector(`#${cardId} .card-special-price`).textContent.replace("Today's Special Price: $", ''));

    document.getElementById('order-product-name').textContent = productName;
    document.getElementById('order-price-value').textContent = price.toFixed(2);
    document.getElementById('order-special-price-value').textContent = specialPrice.toFixed(2);

    const quantity = document.getElementById('order-quantity').value;
    const total = specialPrice * quantity;
    document.getElementById('order-total').textContent = total.toFixed(2);

    document.getElementById('order-card').style.display = 'block';
}

function closeAlert() {
    document.getElementById('alert-box').style.display = 'none';
}

document.getElementById('confirm-order').addEventListener('click', function() {
    alert('Order confirmed!');
    document.getElementById('order-card').style.display = 'none';
});

document.getElementById('cancel-order').addEventListener('click', function() {
    alert('Order cancelled!');
    document.getElementById('order-card').style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function() {
    const text = "Providing exceptional dining, private events, efficient delivery, and catering services";
    const textContainer = document.querySelector(".text-animation");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textContainer.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the speed here (milliseconds)
        }
    }

    typeText();
});