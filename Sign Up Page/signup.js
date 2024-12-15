document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        if (!validateSignupForm()) {
            event.preventDefault();
        }
    });
});
