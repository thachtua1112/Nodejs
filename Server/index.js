const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
//const expressValidator = require("./validators/validators");
const routes = require("./routers/routers");
const mongoose = require("mongoose");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();
const PORT = process.env.PORT || 8797;
const db = mongoose.connection;
const {verifyToken} = require('./controllers/verifyToken');
const loginRouter = require("./routers/Login.router");
const ContractRouter = require("./routers/Staff.router/Contract.router/Contract");

dotenv.config();

//connect db
mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => console.log("DB Connected!"));
db.on("error", (err) => {
  console.log("DB connection error:", err.message);
});
console.log(process.env.SECRET);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
//app.use(expressValidator());
/*
app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db,
    }),
    cookie: { maxAge: 30000 }
  })
);*/
/*
app.all('/login', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.all('/getinfor', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.all('/getAllProducts', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
*/

app.use('/',function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS ");
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With, Content-Type, Accept, Authorization,access-token");
  res.header("Access-Control-Allow-Credentials","true");
  next();
}
)
app.use("/user",verifyToken,routes);
app.use("/",loginRouter);
app.use("/staff",ContractRouter);
app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});

module.exports = app;
