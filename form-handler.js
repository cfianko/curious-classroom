// public/form-handler.js

document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevents the form from submitting the traditional way

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send form data to the server using Fetch API
    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.text(); // Get the server response text
        document.getElementById('responseMessage').innerText = result; // Display response
    } catch (error) {
        console.error('Error submitting form:', error);
        document.getElementById('responseMessage').innerText = 'There was an error submitting the form. Please try again.';
    }
});
