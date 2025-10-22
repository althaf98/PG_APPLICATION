const express = require("express");
const { signup,login } = require("../controllers/userController");
const router = express.Router();

router.post("/user/signup",signup);
router.post("/user/login",login);


module.exports = router;