
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const { users } = require('../data/data');
const { sessions } = require('../middleware/authMiddleware');

// Login
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(u =>
        u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: 'Invalid email or password'
        });
    }

    const token = crypto.randomBytes(32).toString('hex');

    sessions.set(token, {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    });

    res.json({
        message: 'Login successful',
        token: token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
});

// Logout
router.post('/logout', (req, res) => {
    const token = req.headers.authorization;

    if (!token || !sessions.has(token)) {
        return res.status(401).json({
            message: 'Invalid session'
        });
    }

    sessions.delete(token);

    res.json({
        message: 'Logout successful'
    });
});

module.exports = router;
