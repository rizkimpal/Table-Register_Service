// const { response } = require("express");
const express = require("express");
const router = express.Router();
const usercontrol = require("../controller/user_control");

router.route("/user").get(usercontrol.get).post(usercontrol.post);

// Srouter.get('/create', usercontrol.create)

router.get("/user/:noReg", usercontrol.getUserbynoReg);
router.put("/user/:noReg", usercontrol.put);
router.delete("/user/:noReg", usercontrol.del);

module.exports = router;
