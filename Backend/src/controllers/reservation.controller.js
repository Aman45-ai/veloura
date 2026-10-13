import reservation from "../models/reservation.model.js"


const createReservation = async (req, res) => {
    try {
        const { name, email, phone, date, guests, time, specialRequest } = req.body

        const user = req.userId

        if (!name) {
            return res.status(400).send("Name is required!")
        }

        if (!email) {
            return res.status(400).send("Email is required!")
        }

        if (!phone) {
            return res.status(400).send("Phone number is required!")
        }

        if (!date) {
            return res.status(400).send("Date is required!")
        }

        if (!guests) {
            return res.status(400).send("Guest number is required!")
        }

        if (!time) {
            return res.status(400).send("Time is required!")
        }

        const newReservation = await reservation.create({
            user,
            name,
            email,
            phone,
            date,
            guests,
            time,
            specialRequest
        })

        res.status(201).send({
            id:newReservation._id,
            message: "Request received successfully"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export default createReservation