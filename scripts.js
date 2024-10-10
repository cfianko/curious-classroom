// JavaScript for form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        e.preventDefault();  // Prevent form from submitting if fields are empty
    } else {
        alert('Form submitted successfully!');
    }
});
