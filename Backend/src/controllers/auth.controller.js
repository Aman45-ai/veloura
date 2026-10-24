import config from '../config/config.js'
import User from '../models/user.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || typeof (name) !== "string" || name.trim() === "") {
            return res.status(400).send({
                message: "Please enter Your name.",
            })
        }

        if (!password || typeof (password) !== "string") {
            return res.status(400).send({
                message: "Please enter password.",
            })
        }

        if (!email || typeof (email) !== "string" || email.trim() === "") {
            return res.status(400).send({
                message: "Please enter email.",
            })
        }

        if (name.trim().length < 3) {
            return res.status(400).send("Name must be of atleast 3 characters long!")
        }

        const emailCheck = await User.findOne({ email })

        if (emailCheck !== null) {
            return res.status(409).send("Email already exists.")
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password: hashedPassword,
        })
        res.status(201).send({
            name,
            email,
            message: "User registerd Successfully"
        })
    } catch (error) {
        console.log("Error in signingup", error)
        res.status(500).send("Internal Server Error")
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!password || typeof (password) !== "string") {
            return res.status(400).send({
                message: "Please enter password.",
            })
        }

        if (!email || typeof (email) !== "string" || email.trim() === "") {
            return res.status(400).send({
                message: "Please enter email.",
            })
        }

        const emailMatch = await User.findOne({
            email
        })

        let passwordMatch

        if (emailMatch !== null) {
            passwordMatch = await bcrypt.compare(password, emailMatch.password)
        } else {
            return res.status(401).send("User not registered")
        }

        if (passwordMatch) {
            const accessToken = jwt.sign({ userId: emailMatch._id }, config.ACCESS_JWT_SECRET, { expiresIn: '2h' })
            const refreshToken = jwt.sign({ userId: emailMatch._id }, config.REFRESH_JWT_SECRET, { expiresIn: '7d' })

            emailMatch.refreshToken = refreshToken
            await emailMatch.save()

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax"
            })
            res.status(200).send({
                message: "Login Successfull",
                accessToken,
                role:emailMatch.role

            })
        } else {
            return res.status(401).send("Invalid Credential")
        }

    } catch (error) {
        console.log("Error in LoggingIn", error)
        res.status(500).send("Internal Server Error")
    }
}


const newToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken){
        return res.status(400).send({
            message:"Client/Authentication failure"
        })
    }
    try {
        const verification = jwt.verify(refreshToken, config.REFRESH_JWT_SECRET)
        const dbUser = await User.findById(verification.userId)
        if (dbUser === null || dbUser.refreshToken === null || dbUser.refreshToken === undefined) {
            return res.status(401).send({
                message:"Client/Authentication failure"
            })
        } else if (refreshToken === dbUser.refreshToken) {
            const newAccessToken = jwt.sign({ userId: verification.userId }, config.ACCESS_JWT_SECRET, { expiresIn: '2h' })
            res.status(200).send({
                message: "New Access Token generated",
                accessToken: newAccessToken
            })
        } else {
            res.status(401).send("Client/Authentication failure")
        }
    } catch (error) {
        console.log("Error in generating access token", error)
        res.status(401).send("Client/Authentication failure")
    }
}


const logout = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        user.refreshToken = null;
        await user.save();

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });

        return res.status(200).send({
            message: "Logout successful"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
};
export default { signup, login, newToken, logout }