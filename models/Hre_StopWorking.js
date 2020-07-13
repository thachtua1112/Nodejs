const mongoose = require("mongoose");

var StopWorkSchema= new mongoose.Schema({
    ID : String,
    StopWorkType : String,
    ResignReasonID : String,
    DateStop : String,
    Status : String,
    ProfileID : String,
    JobTitleID : String,
    PositionID : String,
    OrgStructureID : String,
    StoredDocuments : String,
    DateQuitSign : String,
    ContractTypeID : String,
    SortID : String
})
module.exports = mongoose.model( "Hre_StopWorking" , StopWorkSchema);