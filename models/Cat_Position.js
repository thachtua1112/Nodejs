const mongoose = require("mongoose");

var PositionSchema= new mongoose.Schema({
ID : String,
PositionName: String,
Code: String,
OrgStructureID: String,
CostCentreID: String,
DateCreate: String,
DateUpdate: String,
JobtitleID: String,
WorkPlaceID: String,
LaborType: String,
EmployeeTypeID: String,
SortID: String,
HeadPosProfileID: String
});
module.exports = mongoose.model( "Cat_Position" , PositionSchema);