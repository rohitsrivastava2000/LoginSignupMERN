const { generateToken } = require('../Middleware/auth');
const User=require('../Model/user');
const bcrypt=require('bcrypt');

exports.login=async (req,res)=>{
    try {
        //fetch data from body
        const {email,password}=req.body;
        //validate data
        if(!email || !password)
            return res.status(402).json({
                success:false,
                message:"All field are Mandatory"
        })

        //find data in db
        const response=await User.findOne({email:email})
        if(!response){
            return res.status(402).json({
                success:false,
                message:"User Not Register",
            })
        }
        //compare password
        if(await bcrypt.compare(password,response.password)){
            //assign token
            const payload={
                name:response.name,
                email:response.email
            }
            const token=generateToken(payload);
            //return response
            return res.status(200).json({
                success:true,
                message:"User Login Successfully",
                token:token
            })
        }
        else{
            return res.status(402).json({
                success:false,
                message:"Password Miss Match"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error, User not Sign in",
            error:error
        })
    }
}