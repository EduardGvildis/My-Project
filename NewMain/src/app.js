const express = require('express');
const connectDB = require('../config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'TaskMaster API is running!' });
});

app.post('/api/auth/register', (req, res) => {
    // TODO: Implement user registration
    res.json({ message: 'User registration endpoint' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
