const User = require("../models/user.model");

const { check, validationResult } = require("express-validator");

exports.UserValidator = function (req, res, next) {
  //name
  console.log("VALIDATORS");
  console.log(req.body);
  check("email", "Invalid email.").isEmail();
  check("email", "Email is required.").notEmpty();
  check("username", "Username is required.").notEmpty();
  check("username", "Username must be more than 1 characters").isLength({
    min: 2,
  });
  check("password", "Password is required.").notEmpty();
  check("password", "Password must be more than 6 characters").isLength({
    min: 6,
  });
  check("password_confirm", "Password confirm is required.").notEmpty();
  check("password_confirm", "Password mismatch").equals(req.body.password);

  console.log("THIS");
  //check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

exports.PostValidator = function (req, res, next) {
  //title
  check("title", "Title is required.").notEmpty();
  check("title", "Title must be between 4 to 150 characters").isLength({
    min: 4,
    max: 150,
  });
  //content
  check("content", "Write a content").notEmpty();
  check("content", "Content must be between 4 to 2000 characters").isLength({
    min: 4,
    max: 2000,
  });

  //check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};
