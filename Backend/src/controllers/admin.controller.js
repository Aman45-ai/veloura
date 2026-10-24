import User from "../models/user.models.js"
import bcrypt from "bcrypt"



const createManagerID = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const admin = await User.findById(req.userId)

        if (!admin) {
            return res.status(404).send({
                message: "User not found!"
            })
        }

        if (admin.role !== "admin") {
            return res.status(403).send({
                message: "Unauthorized Access"
            })
        }

        if (!name) {
            return res.status(400).send({
                message: "Name is required!"
            })
        }

        if (!email) {
            return res.status(400).send({
                message: "Email is required!"
            })
        }

        if (!password) {
            return res.status(400).send({
                message: "Password is required!"
            })
        }

        const emailMatch = await User.findOne({ email })

        if (emailMatch) {
            return res.status(409).send({
                message: "Email already exists!"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newManager = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "manager"
        })

        return res.status(201).send({
            message: "Manager account created successfully!",
            name: newManager.name,
            email: newManager.email,
            role: newManager.role
        })

    } catch (error) {
        return res.status(500).send({
            message: "Internal Server Error"
        })
    }
}


export default createManagerID