const express = require('express');
const authMiddleware = require('../middleware/checkAuthToken');
const {
  signupAdmin,
  AdminLogin,
  AdminSignout,
  getAllAdmins,
} = require('../controllers/adminController');

const router = express.Router();

router.route('/signup').post(signupAdmin);
router.route('/login').post(AdminLogin);
router.route('/logout').post(authMiddleware, AdminSignout);
router.route('/').get(getAllAdmins);

module.exports = router;
