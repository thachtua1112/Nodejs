const express = require("express");
const RouterStaff = express.Router();
const { register, logout, getInfor } = require("../controllers/user.controller");
const { UserValidator, PostValidator } = require("../validators/validators");

/*
function requiresLogout(req, res, next) {
  if (req.session && req.session.user) {
    return res.json({ err: "You must be Logout in to Login continue" });
  } else {
    return next();
  }
}*/
/*
function requiresLogin(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.json({ err: "You must be logged in to view this page." });
  }
}*/
const ContractRouter = require("./Staff.router/Contract");
const PersonnelRouter = require("./Staff.router/PersonnelRoter");

RouterStaff.use("/contract",ContractRouter);
RouterStaff.use("/personnel",PersonnelRouter);
module.exports = RouterStaff;
