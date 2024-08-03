const mongoose = require('mongoose');

// const URI ="mongodb://localhost:27017/mern_admin";
// const URI = "mongodb+srv://ansariaashi44:Ansari@cluster0.4bkth1x.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;


const connectDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("Connection successful to DB");

    }catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;
