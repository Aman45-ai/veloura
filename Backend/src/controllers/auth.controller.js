import config from '../config/config.js'
import User from '../models/user.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const emailCheck = await User.findOne({ email })

        if (emailCheck !== null) {
            return res.status(400).send("User with this email already registered with us.")
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (!passwordRegex.test(password)) {
            return res.status(400).send("Password must contain At least 8 characters, At least 1 lowercase letter, At least 1 uppercase letter, At least 1 number and At least 1 special character")
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.status(201).send("User registerd Successfully")
    }catch(error){
        console.log("Error in signingup", error)
        res.status(500).send("Internal Server Error")
    }
}

const login = async (req,res) =>{
    try{
        const { email, password } = req.body
        const emailMatch = await User.findOne({
            email
        })

        let passwordMatch

        if(emailMatch !== null ){
            passwordMatch = await bcrypt.compare(password, emailMatch.password)
        }else{
            return res.status(401).send("Invalid Credential")
        }

        if(passwordMatch){
            const accessToken = jwt.sign({userId:emailMatch._id}, config.JWT_SECRET,{expiresIn:'2h'})
            res.status(200).send({
                message:"Login Successfull",
                accessToken
            })
        }else{
            return res.status(401).send("Invalid Credential")
        }

    }catch(error){
        console.log("Error in LoggingIn", error)
        res.status(500).send("Internal Server Error")
    }
}

export default {signup, login}