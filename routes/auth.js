const express = require("express");
const { register, login, logout } = require("../controllers/auth");
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.post("/register", register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/getme', protect);

module.exports = router;
