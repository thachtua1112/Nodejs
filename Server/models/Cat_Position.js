const mongoose = require("mongoose");

var PositionSchema= new mongoose.Schema({
ID : String,
PositionName: String,
Code: Number,
OrgStructureID: String,
CostCentreID: String,
DateCreate: Date,
DateUpdate: Date,
JobtitleID: String,
WorkPlaceID: String,
LaborType: String,
EmployeeTypeID: String,
SortID: Number,
HeadPosProfileID: String
});
module.exports = mongoose.model( "Cat_Position" , PositionSchema);