exports.profile=(req,res)=>{
    
    try {
        const {name,email}=req.user;
        return res.status(200).json({
            success:true,
            message:"Date fetch successfully",
            info:{name,email}
        })
   } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Data not fetch",
            error:error
        })
   }
}