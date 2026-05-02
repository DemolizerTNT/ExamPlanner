const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
const errorHandler = require('./middleware/errorHandler');

// Main entry point for the Express backend.
const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware for the entire application.
app.use(cors()); // Allows requests from other origins (e.g. mobile devices)
app.use(express.json({ limit: '15mb' })); // Allows the server to parse JSON and accept base64 avatars

// Simple health/test route
app.get('/', (req, res) => {
    res.send('Express server is running.');
});


app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
// Central error handler should be attached last.
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});

