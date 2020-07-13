const mongoose = require("mongoose");

var HreSchema= new mongoose.Schema({
     ID  : String,
     ProfileName  : String ,
     CodeEmp  :  String ,
     CodeTax  :  String ,
     CodeAttendance  :  String ,
     StatusSyn  :  String ,
     DateHire  :  Date ,
     DateEndProbation  :  Date,
     DateQuit  :  Date ,
     WorkGroupID  : String,
     OrgStructureID  :  String ,
     PositionID  :  String ,
     DateOfEffect  :  String ,
     CostCentreID  : String,
     LaborType  :  String ,
     WorkingPlace  : String,
     Supervisor  : String,
     Gender  :  String ,
     DateOfBirth  :  String ,
     PlaceOfBirth  : String ,
     Cellphone  :  String ,
     PAStreet  :  String ,
     JobTitleID  :  String,
     PayrollGroupID  : String,
     EducationLevelID  : String ,
     PasswordPaySlip  :  String ,
     CompanyID  :  String
});
module.exports = mongoose.model( "Hre_Profile" , HreSchema);