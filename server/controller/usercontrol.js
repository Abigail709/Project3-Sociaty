
const bcrypt = require("bcrypt");
const User = require("../models/userinfo");

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    
    const usernameScan = await User.findOne({ username });


    if (usernameScan)
      return res.json({ msg: "Username already used", status: false });
    const emailScan = await User.findOne({ email });

    if (emailScan)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });


    delete user.password;
    return res.json({ status: true, user });


  } catch (ex) {
    next(ex);
  }
    
  }


  module.exports.login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      
      const usernameScan = await User.findOne({ username });
  
  
      if (!user)
        return res.json({ msg: "Incorrect Username or Password", status: false });

        const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)

        return res.json({ msg: "Incorrect Username or Password", status: false });
      
        delete user.password;
      return res.json({ status: true, user });

    } catch (ex) {
      next(ex);
    }
  };