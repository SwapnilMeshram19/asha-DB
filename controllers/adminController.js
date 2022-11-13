const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "IKPR45PKGV4895JL845LTY";
const AdminUser = require("../models/adminSchema");

exports.register = async (req, res) => {
  let { email, name, password } = req.body;

  const user = await AdminUser.findOne({
    email,
  });

  if (user) {
    return res.status(404).send({
      response: "error",
      message: "user already exist",
    });
  }

  password = await bycrypt.hash(password, 10);

  await AdminUser.create({
    name,
    email,
    password,
  });

  return res.send({
    response: "success",
    message: "user created successfully",
  });
};

exports.login = async (req, res) => {
  let { name, password } = req.body;

  const user = await AdminUser.findOne({
    name,
  });

  if (!user) {
    return res.status(404).send({
      response: "error",
      message: "user doesn't exists",
    });
  }

  const matched = bycrypt.compareSync(password, user.password);

  if (matched) {
    const { name } = user;
    const token = jwt.sign(
      {
        name,
      },
      SECRET_KEY
    );

    return res.send({
      response: "success",
      token,
      user: {
        name,
      },
    });
  } else {
    return res.status(404).send({
      response: "error",
      message: "Invalid Password",
    });
  }
};

exports.getLoggedInUser = async (req, res) => {
  const token = req.headers["auth-token"];

  if (token) {
    try {
      jwt.verify(token, SECRET_KEY);
    } catch (error) {
      return res.status(400).send({
        response: "error",
        message: "bad token",
      });
    }

    const decoded = jwt.decode(token);

    const user = await AdminUser.findOne({
      name: decoded.name,
    });

    if (user) {
      const { name } = user;
      return res.send({
        user: {
          name,
        },
      });
    } else {
    }
  } else {
  }

  return res.status({
    response: "error",
    message: "invalid token",
  });
};
