const express = require('express');
const { signup, login, getProfile } = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../middleware/validation');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/profile', protect, getProfile);

module.exports = router;
