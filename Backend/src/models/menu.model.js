import mongoose from "mongoose"

const menuSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: {
            value: true,
            message: "Item name is required!"
        },
        minlength: {
            value: 3,
            message: "Item name must be atleast 3 characters long!"
        }
    },
    description: {
        type: String,
        required: {
            value: true,
            message: "Description is required!"
        },
        minlength: {
            value: 10,
            message: "Description must be atleast 10 characters long!"
        }
    },
    price: {
        type: Number,
        required: {
            value: true,
            message: "Price is required!"
        },
        min: {
            value: 1,
            message: "Price must be greater than 0!"
        }
    },
    category: {
        type: String,
        required: {
            value: true,
            message: "Category is required!"
        },
        enum: ["starter","soup", "salad", "indianClassics", "continental", "pasta&risotto", "mains", "breads", "sides", "desserts", "beverages"]
    },
    availability:{
        type: Boolean,
        required: {
            value: true,
            message: "Availability is required!"
        }
    }
},{timestamps:true}) 

const menu = mongoose.model("Menu", menuSchema)

export default menu