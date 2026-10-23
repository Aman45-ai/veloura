import reservation from "../models/reservation.model.js"
import User from "../models/user.models.js"


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
            id: newReservation._id,
            message: "Request received successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const getReservationsForManager = async (req, res) => {
    try {

        const manager = await User.findById(req.userId)

        if (manager !== null && manager.role === "manager") {
            const allReservations = await reservation.find()
            res.status(200).send({
                allReservations,
                message: "Reservations fetched successfully"
            })
        } else {
            res.status(403).send("Unauthorised Access")
        }

    } catch {
        res.status(500).send("Internal server error")
    }
}

const updateReservationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const manager = await User.findById(req.userId);

        if (!manager || manager.role !== "manager") {
            return res.status(403).send("Unauthorized Access");
        }

        if (!["confirmed", "rejected"].includes(status)) {
            return res.status(400).send("Invalid reservation status");
        }

        const checkReservation = await reservation.findById(id);

        if (!checkReservation) {
            return res.status(404).send("Reservation not found");
        }

        const updatedReservation = await reservation.findByIdAndUpdate(
            id,
            { status: status },
            { new: true, runValidators: true }
        );

        return res.status(200).send({
            message: "Reservation status updated successfully",
            reservation: updatedReservation
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error");
    }
}

const getReservationForUser = async (req, res) => {
    try {
        const reservations = await reservation.find({ user: req.userId })

        res.status(200).send({
            reservations,
            message: "Reservations fetched successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
}


const cancelReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservationToCancel = await reservation.findOne({
      _id: id,
      user: req.userId
    });

    if (!reservationToCancel) {
      return res.status(404).send("Reservation not found");
    }

    if (reservationToCancel.status !== "pending") {
      return res.status(409).send("Cancellation not allowed");
    }

    const updatedReservation = await reservation.findOneAndUpdate(
      {
        _id: id,
        user: req.userId,
        status: "pending"
      },
      {
        $set: { status: "cancelled" }
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedReservation) {
      return res.status(409).send("Reservation status changed. Please try again");
    }

    return res.status(200).send({
      reservation: updatedReservation,
      message: "Reservation cancelled successfully"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}

export default { createReservation, getReservationsForManager, updateReservationStatus, getReservationForUser, cancelReservation }