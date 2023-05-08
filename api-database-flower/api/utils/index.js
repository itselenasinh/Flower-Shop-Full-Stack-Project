const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

// async function authenticate(req, res, next) {
//   try {
//     const token = req.headers.token;
//     if (!token) {
//       return res.status(403).json({ error: "user not authorized" });
//     }

//     const decodedToken = jwt.verify(token, process.env.SECRET);
//     const user = await UserModel.findByPk(decodedToken.id);

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     req.userId = user.id;

//     next();
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }
async function authenticate(req, res, next) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).send("user not authorized");
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);

    const userId = decodedToken.id;
    if (!userId) {
      return res.status(400).send("invalid user ID");
    }

    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(404).send("user not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { authenticate };
