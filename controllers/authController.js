// /controllers/authController.js
const User = require('../models/userModel');

// Login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user && user.password === password) {
            // Simplified without JWT
            req.session.user = user;
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error logging in' });
    }
};

// Logout
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        } else {
            res.clearCookie('connect.sid');
            return res.status(200).json({ message: 'Logout successful' });
        }
    });
};
