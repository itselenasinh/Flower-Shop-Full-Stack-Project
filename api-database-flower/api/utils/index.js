const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

async function authenticate(req, res, next) {
  try {
    if (!req.headers.token) {
      res.status(403).json({ error: "user not authorized" });
    }
    const decodedToken = jwt.verify(req.headers.token, process.env.SECRET);
    const userId = decodedToken.id;
    const user = await UserModel.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    req.userId = userId; // Agregamos el userId al objeto request

    next(); // Llamamos a la siguiente función en el middleware chain
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = { authenticate };
