const  User = require("../models/user-model");
const Contact = require("../models/contact-model");

//get all users logic

const getAllUsers = async(req, res) =>{
    try {
        const users = await User.find({},{password: 0});
        if(!users || users.length === 0){
            return res.status(404).json({message: "No users found"});
             
        }
        res.status(200).json(users);
        
    } catch (error) {
        next(error);
        
    }

};

//user delete logic

const deleteUserById = async(req, res)=>{
    try{
        const id = req.params.id;
        await User.deleteOne({ _id: id});
        return res.status(200).json({message: "user deleted successfully"})

    }catch(error){
        next(error);
    }
}

// get all contacts logic

const getAllContacts = async(req,res) => {
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: "No contacts found"});
             
        }
        res.status(200).json(contacts);
  
    } catch (error) {
        next (error);
        
    }

};

module.exports = {getAllUsers, getAllContacts, deleteUserById};