document.addEventListener("DOMContentLoaded", function() {
    const text = "Learn more about our story, mission, and values.";
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


