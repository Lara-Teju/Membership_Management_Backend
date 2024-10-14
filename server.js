//server.js
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  
const memberRoutes = require('./routes/memberRoutes');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/members', memberRoutes);

app.use(session({
    secret: 'your-secret-key', // Use a secret key for sessions
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
