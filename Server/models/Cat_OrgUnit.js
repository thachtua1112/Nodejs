const mongoose = require("mongoose");
var OrgUnitSchema= new mongoose.Schema({

ID : String,
OrgstructureID : String,
E_COMPANY : String,
E_BRANCH : String,
E_UNIT : String,
E_DIVISION : String,
E_DEPARTMENT : String,
E_TEAM : String,
E_SECTION : String,
E_COMPANY_CODE : String,
E_BRANCH_CODE : String,
E_UNIT_CODE : String,
E_DIVISION_CODE : String,
E_DEPARTMENT_CODE : String,
E_TEAM_CODE : String,
E_SECTION_CODE : String,
SortID : String
})
module.exports = mongoose.model( "Cat_OrgUnit" , OrgUnitSchema);