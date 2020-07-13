const express = require("express");
const router = express.Router();
const { register, logout, getInfor } = require("../controllers/user.controller");
const { UserValidator, PostValidator } = require("../validators/validators");

const {
  listPost,
  detailPost,
  createPost,
  editPost,
  deletePost,
} = require("../controllers/post.controller");

function requiresLogout(req, res, next) {
  if (req.session && req.session.user) {
    return res.json({ err: "You must be Logout in to Login continue" });
  } else {
    return next();
  }
}

function requiresLogin(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.json({ err: "You must be logged in to view this page." });
  }
}
const all=require('../controllers/Staff/Staff.controller');

router.post("/register", UserValidator, register);
//router.post("/login", requiresLogout, login);
router.delete("/logout",logout);
router.get("/getuser", all.getAll);
router.get("/getpeo", all.getAllpeo);
router.get("/getinfor", getInfor );


router.get("/posts", requiresLogin, listPost);
router.get("/post/:id", requiresLogin, detailPost);
router.post("/post/new", requiresLogin, PostValidator, createPost);
router.put("/post/:id/edit", requiresLogin, PostValidator, editPost);
router.delete("/post/:id", requiresLogin, deletePost);

module.exports = router;
