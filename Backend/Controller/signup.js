const User=require('../Model/user');
const bcrypt=require('bcrypt');

exports.signup=async (req,res)=>{
    try {
        //extract data from body
        console.log("hi");
        const {name,email,password}=req.body;
        //validation
        if(!name || !email || !password)
            return res.status(400).json({
            success:false,
            message:"All field are Mandatory"
        })
        //user already register or not
        const checkUser=await User.findOne({email:email});
        if(checkUser)
        {
            return res.status(404).json({
                success:false,
                message:"User Already Registered"
            })
        }
        //password encrypt karlo
        const pass=await bcrypt.hash(password,10);

        //Save into the DB
        const response=await User.create({
            name,
            email,
            password:pass
        });
        console.log(response);
        //return response
        return res.status(200).json({
            success:true,
            message:"Sign Up successfully..."
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            messgae:"Sign Up Failed, try again after sometime",
        })
    }
}