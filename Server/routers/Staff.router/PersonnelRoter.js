const express = require("express");
const { getAllHre } = require("../../controllers/Staff/Personnel/getHreProfile");

const PersonnelRouter = express.Router();

PersonnelRouter.get("/get-all-hre-profile",getAllHre);
module.exports = PersonnelRouter;
