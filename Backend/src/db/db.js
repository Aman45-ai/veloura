import config from '../config/config.js'
import mongoose from "mongoose"

const connectedDB = async() => {
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("Database Connected Successfully")
    }catch(error){
        console.log("Error in establishing connection with DB",error)
    }
}

export default connectedDB