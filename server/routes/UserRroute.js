const { signup } = require("../controller/usercontrol");
const { login } = require("../controller/usercontrol");


const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);


module.exports = router;

// const User = require("../models/userinfo");
// const router = require("express").Router();
// const bcrypt = require("bcrypt");

// router.post('/', async(req, res)=> {
//     try {
//         const {email, name, password} = req.body;
//         const user = await User.create({email, name, password});
//         res.status(300).json(user);
//     } catch (e) {
//         res.status(400).json({
//           message: "An error occurred",
//         })
//     }
        
// }) 



// router.post('/login', async(req, res)=> {
//     try {
//         const {email, name, password} = req.body;
//         const user = await User.findByCredentials({email, name, password});
//         user.status = 'online';
//         await user.save();
//         res.status(200).json(user);
//     } catch (e) {
//           res.status(400).json(e.message)
//       }
        
// }) 

