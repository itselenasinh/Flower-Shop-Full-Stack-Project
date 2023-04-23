const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/userModel");

async function signup(req, res) {
  try {
    const hashed_pwd = await bcrypt.hashSync(req.body.password, 10);

    const user = await UserModel.create(req.body, {
      fields: ["userName", "email", "password"],
    });

    const payload = { email: user.email, userName: user.userName };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function login(req, res) {
  try {
    const user = await UserModel.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(400).send("email or password incorrect");
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (!result) {
      return res.json({ error: "Wrong email or password" });
    }
    const payload = { email: user.email, userName: user.userName };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  login,
  signup,
};
