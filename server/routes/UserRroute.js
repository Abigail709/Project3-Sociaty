const { signup } = require("../controller/usercontrol");
const { login } = require("../controller/usercontrol");
const { getAllUsers } = require("../controller/usercontrol");


const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/allusers/:id", getAllUsers );


module.exports = router;

