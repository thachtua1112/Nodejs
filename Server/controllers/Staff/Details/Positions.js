const cat_positions = require ('../../../models/Cat_Position')
//const hre_profiles = require ('../../../models/Hre_Profile')
module.exports.Joint_Hre_Pos= async function(req,res){
    await cat_positions.aggregate([{
        $lookup:{
            from: 'cat_positions',
            localField:'ID',
            foreignField:'PositionID',
            as:'infor'
            }
        }],function (err,user) {
            if (err) 
                return res.sendStatus(403);
            return res.json ({
                joint : user,
                mss:"ss"
            })
        }
    )
 };