const User = require("../models/user.model");
const bcrypt = require("bcrypt");
//const session = require('express-session');
jwt    = require('jsonwebtoken');
const express = require('express');
/*
const { token } = require("morgan");
const { json } = require("body-parser");
*/
//jwtr


app = express();
require('dotenv').config();
//app.set('Secret', process.env.SECRET);
//const Secret = process.env.SECRET;

exports.register = function (req, res, next) {
 
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user == null) {
      //Kiểm tra xem email đã được sử dụng chưa
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        //Mã hóa mật khẩu trước khi lưu vào db
        if (err) {
          //console.log("errrrrr");
          return next(err);
        }
        
        if(req.body.password===req.body.password_confirm)
          {
              const newUser = {
              email: req.body.email,
              username: req.body.username,
              password: hash,
              password_confirm: hash
              };
              User.create(newUser, function (err, res) {
                if (err) return handleError(err);
                console.log("create!");
              });
              res.send("create!");
          }
          res.status(500).json({ err: "confirm password is wrong" });
          
        
      //  res.status(403).json({ err: "Password must be written " });

        // const user = new User(req.body);
        // user.role = ["customer"]; //sau khi register thì role auto là customer
        // user.password = hash;
        // user.password_confirm = hash;
        // user.save((err, result) => {
        //   if (err) {
        //     console.log("ERR");
        //     return res.json({ err });
        //   }
        //   res.json({ user: result });
        // });
      });
    } else {
      res.json({ err: "Email has been used" });
    }
  });
};
let refreshTokens = [];
exports.login = function (req, res) {
  console.log(req.body.username);
  User.findOne({ username: req.body.username }).exec(function (err, user) {
    if (err) 
    {
      return res.json({ err });
    } 
    else if (!user) {
      return res.json({ err: "Username is incorrect" });
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (result === true) {
        //req.session.user = user;
        const payload = 
                    {
                        data:  user
                    };
        const accessToken =  jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m" });                     
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);

       // req.token;
            res.json({
            data: user,
            accessToken :accessToken, 
            refreshToken:refreshToken,                     
            login: "success"
            });
       
      } else {
        return res.json({ err: "Password is incorrect" });
      }
    });
  });
};
exports.token = function(req, res) 
{
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = jwt.sign(user.data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
    res.json({ accessToken: accessToken })
  })
}
/*
exports.logout = function(req, res) {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
}
*/
exports.getInfor=function(req,res)
{
  var decoded = jwt.decode(req.token, {complete: true});
    return res.json({
      header: decoded.header,
      payload: decoded.payload,
      Signature:decoded.signature
    })
}
/*
exports.logout = function (req, res) {
  if (req.jwt) {
    // delete session object
    req.jwt.destroy(function (err) {
      if (err) {
        return res.json({ err });
      } else {
        return res.json({ logout: "Success" });
      }
    });
  }
};
*/

exports.logout= function(req,res)
{
 var decoded = jwt.decode(req.token, {complete: true})
    
      delete decoded.payload;  
}