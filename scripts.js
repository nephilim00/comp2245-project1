// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = document.querySelector('input[type="email"]');
        const userEmail = emailInput.value;

        if (!userEmail) {
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${userEmail} has been added to our mailing list!`;
            messageDiv.style.color = 'green';

            form.reset();
        }
    });
});
