const People = require('../../models/people.model');
const User   = require('../../models/user.model');
const Hre = require('../../models/Hre_Profile')
const Workhistory = require ('../../models/Hre_WorkHistory')
const Hre_StopWorking = require('../../models/Hre_StopWorking')
const Cat_Position = require('../../models/Cat_Position')
const OrgUnit = require('../../models/Cat_OrgUnit')
const StructureSchema = require('../../models/Cat_OrgStructure')
const Cat_ContractType = require('../../models/Cat_ContractType')
module.exports.getAll= async function(req,res){
    var pu = await User.find();// không có async await thêm .then(function(user) thay thế co var user
        res.json(pu);      
};
module.exports.getAllpeo= async function(req,res){
   var pu = await People.find();// không có async await thêm .then(function(user) thay thế co var user
        res.json(pu);      
};

//chi tiết nhân viên

module.exports.getHre= async function(req,res){
    await Hre.findOne((err, user) => {
        if(err)
        {
           return res.sendStatus(403)
        }
        if(user)
        { 
            return res.json({
                        hre_profile:user,
                        mss:"succsess"
                    })
        }
       return res.sendStatus(404);
    });
        
 };

 module.exports.Workhistory= async function(req,res){
    await Workhistory.find((err, user) => {
        if(err)
        {
           return res.sendStatus(403)
        }
        if(user)
        { 
            return res.json({
                        hre_workhistory:user,
                        mss:"succsess"
                    })
        }
       return res.sendStatus(404);
    });       
 };
 
 module.exports.Hre_StopWorking= async function(req,res){
    await Hre_StopWorking.find((err, user) => {
        if(err)
        {
           return res.sendStatus(403)
        }
        if(user)
        { 
            return res.json({
                        Hre_StopWorking:user,
                        mss:"succsess"
                    })
        }
       return res.sendStatus(404);
    });       
 };
 module.exports.Cat_Position= async function(req,res){
    await Cat_Position.find((err, user) => {
        if(err)
        {
           return res.sendStatus(403)
        }
        if(user)
        { 
            return res.json({
                        Cat_Position:user,
                        mss:"succsess"
                    })
        }
       return res.sendStatus(404);
    });       
 };
 module.exports.OrgUnit= async function(req,res){
   await OrgUnit.find((err, user) => {
       if(err)
       {
          return res.sendStatus(403)
       }
       if(user)
       { 
           return res.json({
                       Cat_OrgUnit:user,
                       mss:"succsess"
                   })
       }
      return res.sendStatus(404);
   });       
};

module.exports.OrgStructure= async function(req,res){
   await StructureSchema.find((err, user) => {
       if(err)
       {
          return res.sendStatus(403)
       }
       if(user)
       { 
           return res.json({
                       Cat_OrgStructure:user,
                       mss:"succsess"
                   })
       }
      return res.sendStatus(404);
   });       
};

module.exports.Cat_ContractType= async function(req,res){
   await Cat_ContractType.find((err, user) => {
       if(err)
       {
          return res.sendStatus(403)
       }
       if(user)
       { 
           return res.json({
                       Cat_ContractType:user,
                       mss:"succsess"
                   })
       }
      return res.sendStatus(404);
   });       
};
/*
module.exports.Cat_ContractType= async function(req,res){
    const newu=
        {ID:"e355c683-a461-4fbe-b601-2001818de4ae",
        ProfileName:"HỒ THỊ THỦY CHUNG",
        CodeEmp:"8002280",
        CodeTax:"8012323754",
        CodeAttendance:"8002280",
        StatusSyn:"E_STOP",
    
    }
    Cat_ContractType.create(newu, function (err, res) {
        if (err) return handleError(err);
        console.log("create!");
      });
      res.send("create!");
     
};
*/