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


