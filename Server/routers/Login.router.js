const express = require("express");
const { login, token, register } = require("../controllers/user.controller");
const { getAll, getHre, Workhistory, 
    Hre_StopWorking, Cat_Position,OrgUnit, OrgStructure,Cat_ContractType } = require("../controllers/Staff/Staff.controller");
const { verifyToken } = require("../controllers/verifyToken");
const loginRouter = express.Router();

loginRouter.post("/login", login);
loginRouter.post("/register", register);

loginRouter.post("/token", token);

loginRouter.get("/getuser",getAll);
loginRouter.get("/get-hre-profile",getHre);
loginRouter.get("/get-hre-stop-work",Hre_StopWorking);
loginRouter.get("/get-hre-work-history",Workhistory);
loginRouter.get("/get-cat-position",Cat_Position);
loginRouter.get("/get-cat-orgunit",OrgUnit);
loginRouter.get("/get-cat-orgstruture",OrgStructure);
loginRouter.get("/get-cat-contract-type",Cat_ContractType);

loginRouter.get('/checktoken',verifyToken)
module.exports = loginRouter;
