const jwt=require('jsonwebtoken');
require('dotenv').config();

const auth=(req,res,next)=>{
    try {
        console.log("object");
        const token=req.headers.authorization.split(' ')[1]; 
        if(!token)
            {
                return res.status(403).json({
                    success:false,
                    message:"Token is messing"
                })
            }
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=decode;
        console.log(decode);
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Authentication Invalid",
            error:error
        })
    }

}

const generateToken=(payload)=>{
    try {
        const token=jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:'5m'});
        return token;
        
    } catch (error) {
        console.log("Token not Generated");
    }
}

module.exports={auth,generateToken};