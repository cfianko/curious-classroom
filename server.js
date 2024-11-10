// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.static('public'));

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form Data:', { name, email, message });
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
