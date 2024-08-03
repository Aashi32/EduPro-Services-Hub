const adminMiddleware = async (req, res,next)=>{
    try {
        // console.log(req.user);
        // res.status(200).json({msg: req.user.isAdmin});
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res
            .status(403)
            .json({message: "Acces denied. User is not an admin"});
        }
        
        //if user is not admin, proceed to the next middleware
        next();
    } catch (error) {
        next(error);
        
    }

};

module.exports = adminMiddleware;