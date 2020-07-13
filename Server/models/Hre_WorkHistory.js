const mongoose = require("mongoose");

var HreWorkSchema= new mongoose.Schema({
    ID : String,
    Code : String,
    ProfileID : String,
    DateEffective : String,
    OrganizationStructureID : String,
    PositionID : String,
    CostCentreID : String,
    LaborType : String,
    EmployeeTypeID : String,
    PayrollGroupID : String,
    WorkLocation : String,
    JobTitleID : String,
    Status : String,
    LocationCode : String,
    OrgOld : String,
    PositionOld : String,
    LaborTypeOld : String,
    CostCentreOld : String,
    PayrollGroupOld : String,
    WorkLocationOld : String,
    LocationCodeOld : String,
    JobTitleOld : String,
    EmployeeTypeOld : String,
    SupervisorOld : String,
    CodeOld : String,
    OrgStructureOldID : String,
    CompanyID : String,
    WorkPlaceID : String,
    SortID : String
})
module.exports = mongoose.model( "Hre_WorkHistory" , HreWorkSchema);