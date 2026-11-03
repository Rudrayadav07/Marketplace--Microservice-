const mongoose =require("mongoose")

const connectDB = async()=>{
    try{
           await mongoose.connect(process.env.MONGODB_URI)
           console.log("DB is Connected");
           
    }
    catch(error){
            console.log("Your DB is not connected ", error)
    }
}

module.exports = connectDB