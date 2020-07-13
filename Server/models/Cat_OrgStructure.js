const mongoose = require ('mongoose')

const StructureSchema = mongoose.Schema({
    ID : String,
    OrgStructureName : String,
    Code : String,
    CodeBranch : String,
    AddressDetail : String,
    Phone : String,
    TypeID : String,
    ParentID : String,
    BranchID : String,
    OrderNumber : String,
    Status : String,
    DecisionNo : String,
    OrgStructureTypeID : String,
    TypeDurationID : String,
    SortID : String,
    CompanyID : String,
    OrgUnitID : String
})
module.exports = mongoose.model( "Cat_OrgStructure" , StructureSchema);