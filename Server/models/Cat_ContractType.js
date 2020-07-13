const mongoose = require ('mongoose')

const ContractTypeSchema = mongoose.Schema({
    ID : String,
    ContractTypeName : String,
    Type : String,
    UnitTime : String,
    ValueTime : Number,
    ReportMappingID : String,
    DateCreate : String,
    DateUpdate : String,
    ExportID : String,
    SortID : String,
    ContractNextID : String
})
module.exports = mongoose.model( "Cat_ContractType" , ContractTypeSchema);