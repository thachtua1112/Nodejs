const mongoose = require("mongoose");

var StopWorkSchema= new mongoose.Schema({
    ID : String,
    StopWorkType : String,
    ResignReasonID : String,
    DateStop : Date,
    Status : String,
    ProfileID : String,
    JobTitleID : String,
    PositionID : String,
    OrgStructureID : String,
    StoredDocuments : String,
    DateQuitSign : Date,
    ContractTypeID : String,
    SortID : Number
})
module.exports = mongoose.model( "Hre_StopWorking" , StopWorkSchema);