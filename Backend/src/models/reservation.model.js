import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be atleast 3 characters long!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email!"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required!"],
        match: [/^[6-9]\d{9}$/, "Please enter a valid phone number!"]
    },
    date: {
        type: Date,
        required: [true, "Reservation date is required!"], 
        validate: {
            validator: function (value) {
                const now = new Date();

                const reservationDateTime = new Date(value);
                const [hours, minutes] = this.time.split(":").map(Number);

                reservationDateTime.setHours(hours, minutes, 0, 0);

                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const maxDate = new Date();
                maxDate.setHours(23, 59, 59, 999);
                maxDate.setDate(maxDate.getDate() + 7);

                return (
                    reservationDateTime > now &&
                    value >= today &&
                    value <= maxDate
                );
            },
            message: "Reservation must be in the future and within the next 7 days!"
        },
    },
    guests: {
        type: Number,
        required: [true, "Name is required!"],
        min:  [1, "Minimum 1 guest is required!"]
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled", "completed", "rejected"],
        default: "pending"
    },
    specialRequest: {
        type: String,
        maxlength: [30, "Maximum 30 characters are required!"]
    },
    time: {
        type: String,
        required: [true, "Reservation time is required!"],
        match: [/^([01]\d|2[0-3]):[0-5]\d$/, "Please enter a valid time in HH:mm format!"]
    }
}, { timestamps: true })

const reservation = mongoose.model("Reservation", reservationSchema)

export default reservation