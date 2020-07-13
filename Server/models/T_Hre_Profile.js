const mongoose = require("mongoose");

var T_HreSchema= new mongoose.Schema({
    ID:String,
    CodeEmp:String,
    ProfileName:String,
    CodeTax:String,
    IDNo:String,
    DateHire:String,
    DateQuit:String,
    Relatives:String,
    DateContract:String,
    PositionName:String,
    E_COMPANY_CODE:String,
    E_UNIT_CODE:String,
    E_DIVISION:String,
    E_DIVISION_CODE:String,
    E_DEPARTMENT:String,
    E_DEPARTMENT_CODE:String,
    E_SECTION:String,
    E_SECTION_CODE:String,
})
module.exports = mongoose.model( "T_Hre_Profile" , T_HreSchema);