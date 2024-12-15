document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.text-animation');
    const messages = [
        'Contact us on WhatsApp',
        'Subscribe to our YouTube Channel',
        'Follow us on TikTok',
        'Follow us on Instagram',
        'Like our Facebook Page',
        'Join us on Telegram',
        'Chat with us on Viber',
        'Message us on Messenger'
    ];
    
    let index = 0;
    
    function updateText() {
        textElement.textContent = messages[index];
        index = (index + 1) % messages.length;
    }
    
    setInterval(updateText, 2000); // Change message every 4 seconds
});


