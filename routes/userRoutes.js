const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

router.route('/:id').get(authController.protect, userController.getUser);

// ADMIN
router
    .route('/')
    .get(
        authController.protect,
        authController.restrictTo('admin'),
        userController.getAllUser
    );

module.exports = router;