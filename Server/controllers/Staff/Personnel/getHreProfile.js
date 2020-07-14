const Hre = require('../../../models/Hre_Profile')

module.exports.getAllHre= async function(req,res){
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