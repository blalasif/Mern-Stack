const express = require('express');
const router = express.Router();
// const validate = require('../middleware/validate-middleware')
// const validate = require('../middleware/validate-middleware.js')
// const signupSchema = require('../validators/auth-validatore')
const authController = require('../controllers/auth-controller')
const authMiddleware = require('../middleware/authMiddleware')
router.route("/").get(authController.home)
router.route("/register").post(authController.register)
router.route("/login").post(authController.login)
router.route("/getuser/:username").get(authController.getUser);
router.route("/user").get(authMiddleware, authController.user)
module.exports = router;




//😀
