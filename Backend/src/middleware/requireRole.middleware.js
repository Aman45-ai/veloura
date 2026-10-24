import User from "../models/user.models.js"

const requireRole = (requiredRole) => {
    return async (req, res, next) => {
        try {
            const dbUser = await User.findById(req.userId)

            if (!dbUser) {
                return res.status(401).send("Unauthorized Access!")
            }

            const role = dbUser.role

            if (requiredRole === role) {
                return next()
            } else {
                return res.status(403).send("Unauthorised Access")
            }
        } catch (error) {
            console.log(error)
            res.status(500).send("Internal Server Error")
        }
    }
}

export default requireRole