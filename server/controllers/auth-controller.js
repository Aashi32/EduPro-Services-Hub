const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
// Home logic

const home = async(req,res)=>{
    try{
        res
        .status(200)
        .send("hello using router");

    }catch(error){
        console.log(error);
    }
};

// User Registration page

const register = async (req, res)=>{
    try{
        // console.log(req.body);
        // res.status(200).send("Welcome to registration page");

        
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({ msg: "email already exists"});
        }

        //hash password

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create ({ 
            username, 
            email, 
            phone, 
            password
            // password: hash_password,
        });
        res.status(201).json({message: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

    }catch(error){
        // console.log(error);
        res.status(500).json("internal server error");
    }

};


// User login logic

const login = async (req, res)=>{
    try{
        const{ email, password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }
        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);
        if(user){
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
            else{
                res.status(401).json({message: "Invalid email or password"});
            }
        }catch(error){
        res.status(500).json("internal server error");
        // next(error);
    }
}

//User-logic

const user = async (req,res) =>{
    try {
        const userData = req.user;
        console.log(userData);

        res.status(200).json({userData});
    } catch (error) {
        console.log(`error from user route ${error}`);
    }

}
module.exports = {home, register, login, user};

// const home = async(req,res)=>{
//         try{
//             res
//             .status(200)
//             .send("hello using router");
    
//         }catch(error){
//             console.log(error);
//         }
//     };

// const register = async(req,res)=>{
//     try {
//         console.log(req.body)
//         res.status(200).json({msg:req.body});
//     } catch (error) {
//         res.status(500).json("internal server error");
        
//     }
    
// }


// module.exports ={home, register};