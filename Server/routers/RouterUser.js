const express = require("express");
const { token, register } = require("../controllers/user.controller");
const { verifyToken } = require("../controllers/verifyToken");
const RouterUser = express.Router();


RouterUser.post("/register", register);
RouterUser.post("/refresh-token", token);
RouterUser.get('/checktoken',verifyToken)
module.exports = RouterUser;