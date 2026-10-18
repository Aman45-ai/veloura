import User from "../models/user.models.js"
import bcrypt from "bcrypt"


const createManagerID = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const admin = await User.findById(req.userId)

        let role

        if (admin !== null) {
            role = admin.role
        } else {
            return res.status(404).send("User not found!")
        }

        if (role === "admin") {
            if (!name) {
                return res.status(400).send("Name is required!")
            }

            if (!email) {
                return res.status(400).send("Email is required!")
            }

            if (!password) {
                return res.status(400).send("Password is required!")
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const newManager = await User.create({
                name,
                email,
                password: hashedPassword,
                role:"manager"
            })

            res.status(201).send({
                name,
                email,
                role:newManager.role
            })
        }else{
            res.status(403).send("Unauthorised Access")
        }
    }catch(error){
        res.status(500).send("Internal Server Error")
    }
}

export default createManagerID