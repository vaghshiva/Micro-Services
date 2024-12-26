const jwt=require('jsonwebtoken');
const axois=require('axois');

module.exports.userAuth = async (req, res, next) => {
    try{
        const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
        if(!token){
            return res.status(401).json({message:'Unathorized'});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const response=await axois.get(`${process.env.BASE_URL}/user/profile`,{
            headers: {
                Authorization:`Bearer ${token}`
            }
        })

        const user = response.data;

        if(!user){
            return response.status(401).json({message:'Unathorized'});
        }
        req.user=user;

        next();
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports.captainAuth = async (req, res, next) => {
    try{
        const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
        if(!token){
            return res.status(401).json({message:'Unathorized'});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const response=await axois.get(`${process.env.BASE_URL}/user/profile`,{
            headers: {
                Authorization:`Bearer ${token}`
            }
        })

        const captain = response.data;

        if(!captain){
            return response.status(401).json({message:'Unathorized'});
        }
        req.captain=captain;

        next();
    }catch(error){
        res.status(500).json({message:error.message});
    }
}