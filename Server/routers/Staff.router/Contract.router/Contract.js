const express = require("express");
//const { getT_Hre } = require("../../../controllers/Staff/Contract/Contract");
const { Joint_Hre_Pos } = require("../../../controllers/Staff/Details/Positions");
const { getT_Hre } = require("../../../controllers/Staff/Contract/Contract");
const ContractRouter = express.Router();


ContractRouter.get("/get-thre-profile",getT_Hre);
ContractRouter.get("/joint-hre-pos",Joint_Hre_Pos);

module.exports = ContractRouter;
