const T_Hre = require('../../../models/T_Hre_Profile')

module.exports.getT_Hre= async function(req,res){
    await T_Hre.find((err, user) => {
        if(err)
        {
           return res.sendStatus(403)
        }
        if(user)
        { 
            return res.json({
                        t_hre_profile:user,
                        mss:"succsess"
                    })
        }
       return res.sendStatus(404);
    });
 };